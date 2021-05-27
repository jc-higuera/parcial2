import React, { useEffect, useState } from "react";
//import "./HomesList.scss";
import { getHomeById } from "../../services/utils";
import { RoomCard } from "../../components/roomCard/roomCard";
import { useParams } from "react-router";
import { Pie } from "../../components/pie/pie";
import { FormattedMessage } from "react-intl";

export const HomeDetail = () => {
  const [rooms, setRooms] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("rooms") === null)
        setRooms([
          {
            type: "loading",
            name: "loading",
            id: "loading",
            powerUsage: { value: "loading" },
          },
        ]);
      else setRooms(JSON.parse(localStorage.getItem("rooms")));
      console.log(rooms);
    } else {
      getHomeById(id).then((data) => {
        setRooms(data.rooms);
        localStorage.setItem("rooms", JSON.stringify(data.rooms));
      });
    }
  }, []);

  return (
    <div className="container home">
      <h1><FormattedMessage id="myRooms"></FormattedMessage></h1>
      {rooms &&
        rooms.map((room) => (
          <RoomCard type={room.type} name={room.name} id={room._id}></RoomCard>
        ))}
        <h2><FormattedMessage id="stats"></FormattedMessage></h2>
        <Pie data={rooms}></Pie>
    </div>
  );
};

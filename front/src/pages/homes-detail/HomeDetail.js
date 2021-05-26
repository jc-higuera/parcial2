import React, { useEffect, useState } from "react";
//import "./HomesList.scss";
import { getHomeById } from "../../services/utils";
import { RoomCard } from "../../components/roomCard/roomCard";
import { useParams } from "react-router"

export const HomeDetail = () => {
  const [rooms, setRooms] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getHomeById(id).then((data) => setRooms(data.rooms));
  }, []);

  return (
    <div className="container home">
      <h1>Mis habitaciones</h1>
      {rooms &&
        rooms.map((room) => (
          <RoomCard type={room.type} name={room.name} id={room._id}></RoomCard>
        ))}
    </div>
  );
};

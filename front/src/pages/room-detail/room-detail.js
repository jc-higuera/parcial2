import React, { useEffect, useState } from "react";
//import "./HomesList.scss";
import { getRoomById } from "../../services/utils";
import { useParams } from "react-router";
import "./room-detail.css";

export const RoomDetail = () => {
  const [devices, setDevices] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getRoomById(id).then((data) => setDevices(data.devices));
  }, []);

  return (
    <div className="container home">
      <h1>Mis Dispositivos</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">Device</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          {devices &&
            devices.map((device) => (
              <tr>
                <th class="counterCell" scope="row"></th>
                <td>{device.id}</td>
                <td>{device.name}</td>
                <td>{device.desired.value}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

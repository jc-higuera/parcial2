import React from "react";
import { Link } from "react-router-dom";
import "./roomCard.scss";

export const RoomCard = (props) => {
  return (
    <div className="card card-room">
      <div className="card-room-body">
        <div className="card-room-body-description">
          <h5 className="card-room-title">{props.name}</h5>
        </div>
      </div>
      <Link className="card-room-img-link" to={`/rooms/${props.id}`}>
        {props.type === "kitcken" ? (
          <img
            src="/kitchen.png"
            className="card-room-img-top"
            alt="Icon Kitchen"
          />
        ) : (
          <img
            src="/living-room.png"
            className="card-room-img-top room"
            alt="Icon Room"
          />
        )}
      </Link>
    </div>
  );
};

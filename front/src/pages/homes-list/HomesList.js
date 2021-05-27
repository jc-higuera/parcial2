import React, { useEffect, useState } from "react";
import "./HomesList.scss";
import { getHomes } from "../../services/utils";
import { Card } from "../../components/card/Card";
import { FormattedMessage } from "react-intl";

export const HomesList = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("homes") === null)
        setHomes([
          {
            type: "loading",
            name: "loading",
            address: "loading",
            id: "loading",
          },
        ]);
      else setHomes(JSON.parse(localStorage.getItem("homes")));
      console.log(homes);
    } else {
      getHomes().then((data) => {
        setHomes(data);
        localStorage.setItem("homes", JSON.stringify(data));
      });
    }
  }, []);

  return (
    <div className="container home">
      <h1><FormattedMessage id="spaces"></FormattedMessage></h1>
      {homes &&
        homes.map((home) => (
          <Card
            type={home.type}
            name={home.name}
            address={home.address}
            id={home.id}
          ></Card>
        ))}
    </div>
  );
};

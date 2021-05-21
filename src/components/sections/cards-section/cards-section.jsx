import React, { useEffect, useState } from "react";

import { Card } from "./card";
import CapsulesImage from "../../../assets/images/capsules.jpg";
import CrewImage from "../../../assets/images/crew.jpg";
import RocketsImage from "../../../assets/images/rockets.jpg";
import StarlinkImage from "../../../assets/images/starlink.jpg";
import { getCapsules, getCrew, getRockets, getStarlink } from "../../../api";

export const CardsSection = () => {
  const [starlink, setStarlink] = useState([]);
  const [crew, setCrew] = useState([]);
  const [capsules, setCapsules] = useState([]);
  const [rockets, setRockets] = useState([]);

  const cards = [
    {
      src: CapsulesImage,
      alt: "Capsule in a space",
      title: "Capsules",
      data: capsules,
    },
    {
      src: CrewImage,
      alt: "Cosmonauts in a spaceship",
      title: "Crew",
      data: crew,
    },
    {
      src: RocketsImage,
      alt: "Rocket in a space",
      title: "Rockets",
      data: rockets,
    },
    {
      src: StarlinkImage,
      alt: "Starlinks in a space",
      title: "Starlink",
      data: starlink,
    },
  ];

  useEffect(() => {
    async function getData() {
      const starlink = await getStarlink();
      const crew = await getCrew();
      const capsules = await getCapsules();
      const rockets = await getRockets();

      setStarlink(starlink);
      setCrew(crew);
      setCapsules(capsules);
      setRockets(rockets);
    }
    getData();
  }, []);

  return (
    <section className="cards-section">
      {cards.map((card) => (
        <Card key={card.title} {...card} />
      ))}
    </section>
  );
};

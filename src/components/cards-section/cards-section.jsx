import React from "react";
import { Card } from "../card";
import CapsulesImage from "../../assets/images/capsules.jpg";
import CrewImage from "../../assets/images/crew.jpg";
import RocketsImage from "../../assets/images/rockets.jpg";
import StarlinkImage from "../../assets/images/starlink.jpg";

const cards = [
  { src: CapsulesImage, alt: "Capsule in a space", title: "Capsules" },
  { src: CrewImage, alt: "Cosmonauts in a spaceship", title: "Crew" },
  { src: RocketsImage, alt: "Rocket in a space", title: "Rockets" },
  { src: StarlinkImage, alt: "Starlinks in a space", title: "Starlink" },
];

export const CardsSection = () => {
  return (
    <section className="cards-section">
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </section>
  );
};

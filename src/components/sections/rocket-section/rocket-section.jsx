import React, { useState } from "react";
import { Button } from "../../core/button/button";
import MoonIcon from "../../../assets/icons/moon.svg";
import { RocketIcon } from "../../icons/rocket-icon";
import { SmokeSecondIcon } from "../../icons/smoke-second-icon";
import { SmokeFirstIcon } from "../../icons/smoke-first-icon";
import LandingGearIcon from "../../../assets/icons/landing-gear.svg";

export const RocketSection = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const rocketClass = `rocket-icon ${
    isAnimationActive ? "rocket-animation" : ""
  }`;
  const smokeFirstClass = `smoke-first smoke ${
    isAnimationActive ? "smoke-animation" : ""
  }`;
  const smokeSecondClass = `smoke-second smoke ${
    isAnimationActive ? "smoke-animation" : ""
  }`;

  const buttonText = isAnimationActive
    ? "To the earth! 🌍"
    : "Launch Rocket! 🚀";

  function disableAnimation() {
    setIsAnimationActive(false);
  }

  function enableAnimation() {
    setIsAnimationActive(true);
    setTimeout(disableAnimation, 8000);
  }

  return (
    <section className="rocket-section">
      <div className="rocket-box">
        <RocketIcon className={rocketClass} />
        <SmokeFirstIcon className={smokeFirstClass} />
        <SmokeSecondIcon className={smokeSecondClass} />
        <img
          src={LandingGearIcon}
          alt="Landing gears"
          className="landing-gear"
        />
      </div>
      <img src={MoonIcon} alt="Moon" className="rocket-section-the-moon"></img>
      <Button
        disabled={isAnimationActive}
        onClick={enableAnimation}
        className={
          isAnimationActive ? "button-green button-disabled" : "button-violet"
        }
      >
        <h2>{buttonText}</h2>
      </Button>
    </section>
  );
};

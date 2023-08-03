import React from "react";

import style from "./About.module.css";
import decorativeImage from "../../assets/images/music.jpeg";

const About = () => {
  return (
    <div className={style.about}>
      <div className={style.name}>tai bin fen fennie</div>

      <div className={style.title}>Geographic Information Science</div>

      <p className={style.description}>
        I am a <span>diligent</span> and <span>committed</span> individual, dedicated to delivering high-quality work in
        all my endeavors. My proactive approach to <span>continuous learning</span> allows me to pursue
        self-improvement, making me a valuable asset to any team.
      </p>

      <p className={style.description}>
        In addition, I possess excellent <span>problem-solving</span> skills and a <span>keen eye</span> for detail.
      </p>

      <div className={style.horizontalLine}></div>

      <div className={style.bottomSection}></div>
    </div>
  );
};

export default About;

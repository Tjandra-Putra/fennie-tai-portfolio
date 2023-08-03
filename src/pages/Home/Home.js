import React from "react";

import style from "./Home.module.css";
import { About, Navbar } from "../../routes/Routes";
import Card from "../../components/Card/Card";
import { experience } from "../../constants/experience";
import { education } from "../../constants/education";
import { projects } from "../../constants/projects";
import { awards } from "../../constants/awards";
import { leadershipActivities } from "../../constants/leadershipActivities";

const Home = () => {
  return (
    <div className={style.home}>
      <section className={style.leftContainer}>
        <Navbar />

        <About />
      </section>
      <main className={style.rightContainer}>
        <Card title="Card" category="Experience" data={experience} index="01" />
        <Card title="Card" category="Education" data={education} index="02" />
        <Card title="Card" category="Projects" data={projects} index="03" />
        <Card title="Card" category="Awards" data={awards} index="04" />
        <Card title="Card" category="Leadership & Co-curricular activities" data={leadershipActivities} index="05" />
      </main>
    </div>
  );
};

export default Home;

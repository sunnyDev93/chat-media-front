import React from "react";
import { Features, Plan, Hero, Demo, WorkFlow } from "../../pages";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <div className="bg-black">
      <Hero />
      <Demo />
      <WorkFlow />
      {/* <Content /> */}
      <Features />
      <Feedback />
      <Plan />
    </div>
  );
};

export default Home;

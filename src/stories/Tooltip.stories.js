import React from "react";
import Tooltip from "../components/Tooltip";
import "./test.css";
export default {
  title: "Tooltip",
  component: Tooltip,
};
export const Primary = () => (
  <div
    className=""
    style={{
      display: "flex",
      flexDirection: "column",
    }}
  >
    <div className="">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis pariatur
        magni temporibus aperiam molestiae corrupti adipisci magnam numquam ab
        nemo.
      </p>
    </div>
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "3rem",
      }}
    >
      <Tooltip content={<>Delete</>} position={"right-bottom"}>
        Hi hello
      </Tooltip>
    </div>
  </div>
);
Primary.storyName = "Tooltip";

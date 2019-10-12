import React from "react";
import "./styles.css";

const Container = props =>
  <div className={`container${props.fluid ? "-fluid" : ""}`}>
    {props.children}
  </div>;

export default Container;
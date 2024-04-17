import React from "react";
import Header from "./headers/Header";

export default function MainLayout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}

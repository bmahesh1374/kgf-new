import React from "react";
import "../Styles/Agriculture.css";
import AgriRequirement from "./AgriRequirement";
import AgriMyRequirement from "./AgriMyRequirement";
import { Route, Routes } from "react-router-dom";
import AgriPostRequirements from "./AgriPostRequirement";

function Agriculture() {
  return (
    <>
      <section>
        <div>
          <h3>Agriculture</h3>
        </div>
        <div className="kgf-agri-req">
          <h4>Requirement</h4>
          <h4>My Requirement</h4>
        </div>
        {/* <AgriRequirement /> */}
        {/* <AgriMyRequirement /> */}
        <AgriPostRequirements />
      </section>
    </>
  );
}

export default Agriculture;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ColorList.css";

const ColorList = ({ colors }) => {

  return (
    <div className="ColorList">
      <h1>Welcome to the color factory</h1>
      <Link to={`/colors/new`}>Add a color</Link>
      {colors.map(color => (
        <div key={color.id}>
          <Link to={`/colors/${color.name}`}>{color.name}</Link>
        </div>
      ))}
    </div> 
  );
}

export default ColorList;
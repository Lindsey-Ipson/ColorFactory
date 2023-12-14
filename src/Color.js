import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./Color.css";

const Color = ({ getColor }) => {
  const { colorName } = useParams();

  const color = getColor(colorName);

  console.log('color.hexColor', color.hexColor)

  return (
    <div className="Color" style={{backgroundColor: color.hexColor}}>
      <h1>This is {color.name}</h1>
      <Link to={`/colors`}> Go back </Link>
    </div> 
  );
}

export default Color;
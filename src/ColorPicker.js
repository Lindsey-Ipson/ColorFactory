import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const ColorPicker = ({ addColor }) => {

  console.log("ColorPicker component rendered")
  console.log(addColor)

  const navigate = useNavigate();
  const INITIAL_STATE = { name: '', hexColor: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor({ ...formData });
    navigate('/colors');
  };

  return (
    <div className="ColorPicker">
      <h1> Select and name a new color! </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <input type="color" name="hexColor" value={formData.hexColor} onChange={handleChange} />
        <button>Add color</button>
      </form>
    </div>
  );
}

export default ColorPicker;
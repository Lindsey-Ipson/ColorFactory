import React, { useState } from "react";

const ColorPicker = (addColor) => {
  const INITIAL_STATE = { name: '', color: '' };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="ColorPicker">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <input type="color" name="color" value={formData.color} onChange={handleChange} />
      </form>
    </div>
  );
}
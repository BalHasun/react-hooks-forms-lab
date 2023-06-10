import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [inputForm, setInputForm] = useState({
    id: uuid(), // the `uuid` library can be used to generate a unique id
    name: "",
    category: "",
  });

  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    return onItemFormSubmit({
      id: uuid(),
      name: inputForm.name,
      category: inputForm.category,
    });
  };
  return (
    <form onSubmit={handleFormSubmit} className="NewItem">
      <label>
        Name:
        <input
          value={inputForm.name}
          onChange={handleForm}
          type="text"
          name="name"
        />
      </label>

      <label>
        Category:
        <select
          value={inputForm.category}
          onChange={handleForm}
          name="category"
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

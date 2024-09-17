import React from "react";
import { useState } from "react";
import axios from "axios";

function Edit({ onClose, item, onSubmit }) {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedItem = {
      _id: item._id,
      title,
      description,
      price,
    };
    console.log("Updated Item data", updatedItem);
    try {
      const response = axios.put(
        `http://localhost:8000/item/${item._id}`,
        updatedItem
      );
      console.log("response data:", response.data);
      onClose();
    } catch (err) {
      console.log("Error updating item", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="title"
          />
        </div>
        <div>
          <textarea
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="description"
          />
        </div>
        <div>
          <input
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            placeholder="0"
          />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={onClose}>close</button>
    </div>
  );
}

export default Edit;

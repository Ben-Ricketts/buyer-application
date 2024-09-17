import axios from "axios";
import { useEffect, useState } from "react";
import Edit from "../components/edit";

function Items() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState({
    _id: "",
    title: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/item")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "price") {
      setPrice(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/item", {
        title: title,
        description: description,
        price: price,
      })
      .then((response) => {
        console.log("Item posted", response.data);
      })
      .catch((error) => {
        console.log("error posting item", error);
      });
  };

  const handleEditClick = (item) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  const handleEditClose = () => {
    setIsEditing(false);
  };

  const handleEditSubmit = (updatedItem) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        return item._id === updatedItem._id ? updatedItem : item;
      })
    );
    setIsEditing(false);
  };

  return (
    <div className="App">
      <>
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <h1>
                {item.title}:{" "}
                <button onClick={() => handleEditClick(item)}>Edit</button>
              </h1>
              <p>
                {item.description}- ${item.price}
              </p>
              {isEditing && currentItem._id === item._id && (
                <Edit
                  onClose={handleEditClose}
                  onSubmit={handleEditSubmit}
                  item={currentItem}
                />
              )}
            </li>
          ))}
        </ul>
      </>
      <>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              name="title"
              onChange={handleChange}
              value={title}
              placeholder="title"
            />
          </div>
          <div>
            <textarea
              name="description"
              onChange={handleChange}
              value={description}
              placeholder="description"
            />
          </div>
          <div>
            <input
              name="price"
              onChange={handleChange}
              value={price}
              placeholder="0"
            />
          </div>
          <button type="submit">post</button>
        </form>
      </>
    </div>
  );
}

export default Items;

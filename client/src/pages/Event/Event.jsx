import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Event.css";

const Event = () => {
  const baseURL = "http://localhost:3000/api/events";
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    author: "",
    dates: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleDate = (e) => {
    const newDate = e.target.value;
    if (!form.dates.includes(newDate)) {

      const sortedDates = [...form.dates, newDate].sort(
        (a, b) => Date.parse(a) - Date.parse(b)
      );

      setForm((prevForm) => ({
        ...prevForm,
        dates: sortedDates,
      }));
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    if (form.name && form.description && form.author && form.dates) {
      try {
        await axios.post(baseURL, form);
        navigate("/");
      } catch (error) {
        console.error("Erreur lors de la création de l'événement :", error);
      }
      setForm({
        name: "",
        description: "",
        author: "",
        dates: [],
      });
    }
  };

  return (
    <main>
      <h1>Create an event</h1>
      <form onSubmit={handleForm}>
        <fieldset className="fieldName">
          <label htmlFor="name">Event Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Event Name"
            value={form.name}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="fieldDesc">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="fieldAuthor">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author"
            value={form.author}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="fieldDate">
          <label htmlFor="dates">Due date</label>
          <input type="date" id="dates" name="dates" onChange={handleDate} />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Event;

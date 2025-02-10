import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Event.css";

const Event = () => {
  
  const [form, setForm] = useState({
    eventName: "",
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
      const sortedDates = [...formDates, newDate].sort((a, b) => Date.parse(a) - Date.parse(b));
      setForm((prevForm) => ({
        ...prevForm,
        dates: sortedDates,
      }));
    }
  }

  const handleForm = (e) => {
    e.preventDefault();

    if (form.eventName && form.description && form.author && form.dates) {
      setMyTasks((prevTasks) => [...prevTasks, form]);

      setForm({
        eventName: "",
        description: "",
        author: "",
        dates: [],
      });
    }
  };

  return (
    <main>
      <h1>Create an event</h1>
      <form>
        <fieldset className="fieldName">
          <label htmlFor="eventName">Event Name</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            placeholder="Event Name"
            value={form.eventName}
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
            value={form.eventName}
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
            value={form.eventName}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="fieldDate">
          <label htmlFor="dates">Due date</label>
          <input
            type="date"
            id="dates"
            name="dates"
            value={form.eventName}
            onChange={handleDate}
          />
        </fieldset>
        <button>Submit</button>
      </form>
    </main>
  );
};

export default Event;

import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import Card from "../../components/Card/Card";

function Home() {
  const baseURL = "http://localhost:3000";
  const currentRoute = "/api/events";
  const [events, setEvents] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(baseURL + currentRoute)
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur de chargement du fichier JSON:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des événements...</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  return (
    <main>
      <div id="events">
        {events && events.length > 0 ? (
          events.map(event => (
            <Card key={event.id} event={event} />
          ))
        ) : (
          <p>Aucun événement trouvé.</p>
        )}
        {events && events.length > 0 ? (
          events.map(event => (
            <Card key={event.id} event={event} />
          ))
        ) : (
          <p>Aucun événement trouvé.</p>
        )}
        {events && events.length > 0 ? (
          events.map(event => (
            <Card key={event.id} event={event} />
          ))
        ) : (
          <p>Aucun événement trouvé.</p>
        )}
      </div>
    </main>
  );
}

export default Home;

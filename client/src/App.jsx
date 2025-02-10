import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Event";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api/event" element={<Event />} />
    </Routes>
  );
}

export default App;

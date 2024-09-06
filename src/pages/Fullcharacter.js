import Header from "../components/header";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Fullcharacter() {
  const location = useLocation();
  const { info } = location.state || [];

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters/")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <main>
      <Header />

      {characters.map((item) =>
        item.id === info ? <h1>{item.name}</h1> : <></>
      )}
    </main>
  );
}

export default Fullcharacter;

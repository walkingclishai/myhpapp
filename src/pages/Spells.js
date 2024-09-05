import Header from "../components/header";
import "./Spells.css";
import React, { useEffect, useState } from "react";
import Spell from "../components/spell.js";

function Spells() {
  const [spells, setSpells] = useState([]);
  const [span, setSpan] = useState(1);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/spells")
      .then((response) => response.json())
      .then((data) => setSpells(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLoadMore = () => {
    setSpan(span + 1);
  };

  return (
    <div className="App">
      <Header />
      <h1>Spells</h1>

      <div className="grid-container">
        {spells.map((item, index) =>
          index < 9 * span ? (
            <Spell name={item.name} description={item.description} />
          ) : (
            <></>
          )
        )}
        <button className="load" onClick={handleLoadMore}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default Spells;

import Header from "../components/header";
import "./Characters.css";
import React, { useEffect, useState } from "react";
import Card from "../components/card.js";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [span, setSpan] = useState(1);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setCharacters(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleLoadMore = () => {
    setSpan(span + 1);
  };

  return (
    <div className="App">
      <Header />
      <div className="grid-container">
        {characters.map((item, index) =>
          index < 9 * span ? (
            <Card
              name={item.name}
              image={item.image}
              altName={item.alternate_names[0]}
              house={item.house}
            />
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

export default Characters;

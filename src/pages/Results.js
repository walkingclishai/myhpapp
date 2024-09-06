import Header from "../components/header";
import "./Characters.css";
import React, { useEffect, useState } from "react";
import Card from "../components/card.js";
import { useLocation } from "react-router-dom";

function Results() {
  const [characters, setCharacters] = useState([]);
  const [span, setSpan] = useState(1);

  const location = useLocation();
  const { res } = location.state || [];

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
      <h1>Results</h1>
      <div className="grid-container">
        {characters.map((item, index) =>
          item.name.toLowerCase().includes(res.toLowerCase()) ? (
            <Card
              cardId={item.id}
              name={item.name}
              image={item.image}
              altName={item.alternate_names[0]}
              house={item.house}
            />
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}

export default Results;

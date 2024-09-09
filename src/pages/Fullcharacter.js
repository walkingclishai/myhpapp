import Header from "../components/header";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Fullcharacter.css";

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
        item.id === info ? (
          <div className="full">
            <div className="img-container">
              <img className="char-logo" src={item.image} />
              <img
                className="char-banner"
                src={
                  item.house == "Gryffindor"
                    ? "/banner 2.png"
                    : item.house == "Ravenclaw"
                    ? "/banner 4.png"
                    : item.house == "Hufflepuff"
                    ? "/banner 3.png"
                    : "/banner 1.png"
                }
              />
            </div>

            <table>
              <thead></thead>
              <tbody>
                <tr className={item.house}>
                  <td className="label">Name:</td>
                  <td>{item.name}</td>
                </tr>
                <tr className={item.house}>
                  <td className="label">Gender:</td>
                  <td>{item.gender}</td>
                </tr>
                <tr className={item.house}>
                  <td className="label">Date of birth:</td>
                  <td>{item.dateOfBirth}</td>
                </tr>
                <tr className={item.house}>
                  <td className="label">Ancestry:</td>
                  <td>{item.ancestry}</td>
                </tr>
                <tr className={item.house}>
                  <td className="label">Patronus:</td>
                  <td>{item.patronus}</td>
                </tr>
                <tr className={item.house}>
                  <td className="label">Position at Hogwarts:</td>
                  <td>{item.hogwartsStudent == true ? "Student" : "Staff"}</td>
                </tr>
                <tr className={item.house}>
                  <td className="label">Played by:</td>
                  <td>{item.actor}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <></>
        )
      )}
    </main>
  );
}

export default Fullcharacter;

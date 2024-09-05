import Header from "../components/header";
import "./Houses.css";
import React, { useEffect, useState } from "react";
import House from "../components/house.js";

function Houses() {
  const info = [
    {
      image: "/tumblr 2.png",
      banner: "/banner 2.png",
      founder: "Godric Gryffindor",
      colors: "Scarlet and gold",
      animal: "Lion",
      head: "Minerva McGonagall",
    },
    {
      image: "/tumblr 4.png",
      banner: "/banner 4.png",
      founder: "Rowena Ravenclaw",
      colors: "Blue and bronze",
      animal: "Eagle",
      head: "Horace Slughorn",
    },
    {
      image: "/tumblr 3.png",
      banner: "/banner 3.png",
      founder: "Helga Hufflepuff",
      colors: "Yellow and black",
      animal: "Badger",
      head: "Pomona Sprout",
    },
    {
      image: "/tumblr 1.png",
      banner: "/banner 1.png",
      founder: "Salazar Slytherin",
      colors: "Green and silver",
      animal: "Snake",
      head: "Severus Snape",
    },
  ];
  return (
    <main>
      <Header />
      <div className="houses-container">
        <h1>Hogwarts Houses</h1>
        <div className="test">
          <p>
            "The four Houses are called Gryffindor, Hufflepuff, Ravenclaw, and
            Slytherin. Each House has its own noble history and each has
            produced outstanding witches and wizards. While you are at Hogwarts,
            your triumphs will earn your House points, while any rule breaking
            will lose House points. At the end of the year, the House with the
            most points is awarded the House Cup, a great honour. I hope each of
            you will be a credit to whichever House becomes yours." <br />
            <span>Minerva McGonagall </span> to first-year students on 1
            September 1991, shortly before the Sorting Ceremony
          </p>
        </div>
        <div className="house-grid">
          {info.map((item) => (
            <House
              image={item.image}
              banner={item.banner}
              founder={item.founder}
              colors={item.colors}
              animal={item.animal}
              head={item.head}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Houses;

import Header from "../components/header";
import "./Dashboard.css";
import Slider from "../components/Slider";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const slides = [
    { image: "/charcaters 2.jpg", title: "Characters", link: "/characters" },
    { image: "/spells 2jpg.jpg", title: "Spells", link: "/spells" },
    { image: "/houses.jpg", title: "Houses", link: "/houses" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [loop, setLoop] = useState(false);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  if (!loop) {
    const sliderIntervall = setInterval(goToNextSlide, 3000);
    setLoop(true);
  }

  return (
    <div className="App">
      <Header />
      <Slider
        imageSrc={slides[currentIndex].image}
        title={slides[currentIndex].title}
        link={slides[currentIndex].link}
        onNext={goToNextSlide}
        onPrev={goToPrevSlide}
      />
    </div>
  );
}

export default Dashboard;

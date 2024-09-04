const Slider = ({ imageSrc, title, onLearnMore, onNext, onPrev }) => {
  return (
    <div className="slider-container">
      <div>
        <svg
          onClick={onPrev}
          className="left"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M10.843 13.069L6.232 8.384a.546.546 0 0 1 0-.768l4.61-4.685a.55.55 0 0 0 0-.771a.53.53 0 0 0-.759 0l-4.61 4.684a1.65 1.65 0 0 0 0 2.312l4.61 4.684a.53.53 0 0 0 .76 0a.55.55 0 0 0 0-.771"
          />
        </svg>
        <img className="logo" src={imageSrc} alt={title} />
        <svg
          onClick={onNext}
          className="right"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="m5.157 13.069l4.611-4.685a.546.546 0 0 0 0-.768L5.158 2.93a.55.55 0 0 1 0-.771a.53.53 0 0 1 .759 0l4.61 4.684a1.65 1.65 0 0 1 0 2.312l-4.61 4.684a.53.53 0 0 1-.76 0a.55.55 0 0 1 0-.771"
          />
        </svg>
      </div>
      <div className="overlay">
        <h2>{title}</h2>
        <button onClick={onLearnMore}>Learn More</button>
      </div>
    </div>
  );
};

export default Slider;

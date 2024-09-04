const Card = ({ name, image, altName, house }) => {
  return (
    <div className="container">
      <img src={image} />
      <h2>{name}</h2>
      <h4>{altName}</h4>
      <h4>{house}</h4>
    </div>
  );
};

export default Card;

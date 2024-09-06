import { useNavigate } from "react-router-dom";

const Card = ({ cardId, name, image, altName, house }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/fullcharacter", { state: { info: cardId } });
  };

  return (
    <div onClick={handleNavigate} className="container">
      <img src={image} />
      <h2>{name}</h2>
      <h4>"{altName}"</h4>
      <h4>{house}</h4>
    </div>
  );
};

export default Card;

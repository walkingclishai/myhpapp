const Spell = ({ name, description }) => {
  return (
    <div className="spell-container">
      <img src="/spell logo .jpg" />
      <h2>{name}</h2>

      <p>
        {description.length > 100
          ? description.slice(0, 100) + "..."
          : description}
      </p>
    </div>
  );
};

export default Spell;

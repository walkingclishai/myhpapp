import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const handleSearch = () => {
    navigate("/results", { state: { res: input } });
  };

  return (
    <nav>
      <img alt="logo" height="60px" width="150px" src="/logo4.png" />
      <div>
        <svg
          onClick={handleSearch}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5a6.75 6.75 0 0 0 0-13.5M2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5"
            clip-rule="evenodd"
          />
        </svg>
        <input
          onKeyPress={handleKeyPress}
          type="search"
          placeholder="...search"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
        ></input>
      </div>
      <ul>
        <li>
          <a onClick={() => navigate("/")}>Dashboard</a>
        </li>
        <li>
          <a onClick={() => navigate("/characters")}>Characters</a>
        </li>
        <li>
          <a onClick={() => navigate("/spells")}>Spells</a>
        </li>
        <li>
          <a onClick={() => navigate("/houses")}>Houses</a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;

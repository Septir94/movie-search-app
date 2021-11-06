import React, { useState } from "react";
import "./input.css";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Input({ onChangeHandler }) {
  const [value, setValue] = useState("");
  return (
    <div className="pseudo-search">
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        placeholder="Search movie.."
      />
      <button
        onClick={() => {
          onChangeHandler(value);
          setValue("");
        }}
        className="fa fa-search"
        type="submit"
      >
        <FontAwesomeIcon color="wheat" icon={faSearch} />
      </button>
    </div>
  );
}

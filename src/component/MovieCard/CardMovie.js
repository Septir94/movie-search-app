import React from "react";
import Modal from "../Modal/Modal";
import "./card.css";

export default function CardMovie({ movie, setIsOpen }) {
  return (
    <div className="card-container" onClick={setIsOpen}>
      <div className="image-container">
        <img src={movie.Poster} alt="Image Poster" />
        <label>{movie.Title}</label>
      </div>
    </div>
  );
}

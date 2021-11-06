import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import CardMovie from "../MovieCard/CardMovie";
import "./listMovie.css";

export default function ListMovie() {
  const state = useSelector((state) => state.movie);
  const [isOpen, setIsOpen] = useState({ isOpen: false, url: "" });
  return (
    <div className="list-movie-outer-container">
      <label className="label">Movie List</label>
      <div className="list-movie-container">
        {state.data.length === 0
          ? state.data
          : state.data.Search.map((movie, index) => {
              if (movie.Poster !== "N/A") {
                return (
                  <CardMovie
                    setIsOpen={() => {
                      setIsOpen({ isOpen: true, url: movie.imdbID });
                    }}
                    key={index}
                    movie={movie}
                  />
                );
              }
            })}
      </div>
      <Modal
        isOpen={isOpen.isOpen}
        imdbId={isOpen.url}
        setIsOpen={() => {
          setIsOpen({ isOpen: false, url: "" });
        }}
      />
    </div>
  );
}

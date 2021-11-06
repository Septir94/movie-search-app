import React, { useEffect } from "react";
import "./modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { fetchMovieAction } from "../../action/fetchMovieAction";
import { useDispatch, useSelector } from "react-redux";
import MovieDetail from "../Layout/MovieDetail/MovieDetail";

export default function Modal({ isOpen, imdbId, setIsOpen }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieAction.getMovieByID(imdbId));
  }, [dispatch, imdbId]);
  const state = useSelector((state) => state.movie);
  return (
    <div
      className="modal-container"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className="modal-image-container">
        <MovieDetail data={state.dataId==null?{}:state.dataId} />
        <button onClick={setIsOpen}>
          <FontAwesomeIcon icon={faTimes} color="#282828" size="2x" />
        </button>
      </div>
    </div>
  );
}

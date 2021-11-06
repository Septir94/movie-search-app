import React from "react";
import { useDispatch } from "react-redux";
import { fetchMovieAction } from "../../../action/fetchMovieAction";
import Input from "../../input/Input";
import "./header.css";

export default function Header() {
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    dispatch(fetchMovieAction.getMovieSearch(e, 1));
  };
  const onChangeType = (keyword, type) => {
    const request = {
      keyword: keyword,
      page: 1,
      type: type,
    };
    dispatch(fetchMovieAction.getMovieByType(request));
  };
  return (
    <div className="header-outer-container">
      <div className="header-inner-container">
        <div>Song's Movie</div>
        <Input onChangeHandler={onChangeHandler} />
        <div className="category-container">
          <label
            onClick={() => {
              onChangeType("first", "movie");
            }}
          >
            Movie
          </label>
          <label
            onClick={() => {
              onChangeType("boku", "series");
            }}
          >
            Anime
          </label>
          <label
            onClick={() => {
              onChangeType("hero", "Movie");
            }}
          >
            Action
          </label>
        </div>
      </div>
    </div>
  );
}

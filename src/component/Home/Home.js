import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { fetchMovieAction } from "../../action/fetchMovieAction";
import Header from "../Layout/Header/Header";
import ListMovie from "../ListMovie/ListMovie";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovieAction.getMovieSearch("batman", 1));
  }, [dispatch]);
  return (
    <div>
      <Header />
      <div className="list-movie-container">
        <ListMovie />
      </div>
    </div>
  );
}
export default withRouter(Home);

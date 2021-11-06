import {
  GET_MOVIE_FAILED,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_TYPE_FAILED,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_BY_ID_FAILED,
  GET_MOVIE_TYPE_REQUEST,
  GET_MOVIE_TYPE_SUCCESS,
} from "../constant/reducerConstant";
import { fetchMovieService } from "../service/fetchMovieService";

export const fetchMovieAction = {
  getMovieSearch: (keyword, page) => {
    return (dispatch) => {
      dispatch({
        type: GET_MOVIE_REQUEST,
      });
      fetchMovieService
        .searchMovieList(keyword, page)
        .then((data) => {
          if (data.Error == null) {
            dispatch({
              type: GET_MOVIE_SUCCESS,
              data: data,
            });
          } else {
            dispatch({
              type: GET_MOVIE_FAILED,
              err: "failed to get data movie",
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: GET_MOVIE_FAILED,
            err: "failed to get data movie",
          });
        });
    };
  },
  getMovieByID: (id) => {
    return (dispatch) => {
      dispatch({ type: GET_MOVIE_BY_ID_REQUEST });

      fetchMovieService
        .getMovieDetail(id)
        .then((data) => {
          if (data.Error == null) {
            dispatch({
              type: GET_MOVIE_BY_ID_SUCCESS,
              dataId: data,
            });
          } else {
            dispatch({
              type: GET_MOVIE_BY_ID_FAILED,
              err: data.Error,
            });
          }
        })
        .catch((err) => {
          dispatch({
            type: GET_MOVIE_BY_ID_FAILED,
            err: err,
          });
        });
    };
  },
  getMovieByType: (request) => {
    return (dispatch) => {
      dispatch({ type: GET_MOVIE_TYPE_REQUEST });
      fetchMovieService
        .getMovieByType(request)
        .then((data) => {
          if (data.Error == null) {
            dispatch({ type: GET_MOVIE_TYPE_SUCCESS, datatype: data });
          } else {
            dispatch({ type: GET_MOVIE_TYPE_FAILED, err: data.Error });
          }
        })
        .catch((err) => {
          dispatch({ type: GET_MOVIE_TYPE_FAILED, err: err });
        });
    };
  },
};

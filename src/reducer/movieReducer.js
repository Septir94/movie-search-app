import {
  GET_MOVIE_BY_ID_FAILED,
  GET_MOVIE_BY_ID_REQUEST,
  GET_MOVIE_BY_ID_SUCCESS,
  GET_MOVIE_FAILED,
  GET_MOVIE_REQUEST,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_TYPE_FAILED,
  GET_MOVIE_TYPE_REQUEST,
  GET_MOVIE_TYPE_SUCCESS,
} from "../constant/reducerConstant";

const initialState = {
  data: [],
  dataId: null,
  dataType: [],
  loading: false,
  error: false,
  message: null,
  totalData: 0,
  isBack: false,
  isDeleted: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_MOVIE_SUCCESS:
      return {
        data: action.data,
        loading: false,
        error: null,
      };
    case GET_MOVIE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    case GET_MOVIE_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_MOVIE_BY_ID_SUCCESS:
      return { ...state, dataId: action.dataId, loading: false, error: null };
    case GET_MOVIE_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        error: action.err,
      };
    case GET_MOVIE_TYPE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_MOVIE_TYPE_SUCCESS:
      return {
        ...state,
        data: action.datatype,
        loading: false,
        error: null,
      };
    case GET_MOVIE_TYPE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.err,
      };

    default:
      return state;
  }
};

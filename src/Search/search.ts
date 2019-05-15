import axios from 'axios';
import { REQUEST, SUCCESS, FAILURE } from '../shared/reducers/action';
import { AuthService } from '../config/auth';

export const auth = new AuthService(
  "https://accounts.spotify.com/authorize",
  "70599ee5812a4a16abd861625a38f5a6",
  "token",
  "http://localhost:3000/"
);

export const ACTION_TYPES = {
  SEARCH_NEWS: 'news/SEARCH_NEWS',
};

const stateAlbums = {
  loading: false,
  errorMessage: null,
  search: 'string',
  updateSuccess:null,
};

axios.interceptors.request.use(req => {
  req.headers["Authorization"] = `Bearer ${auth.getToken()}`;
  return req;
});

export default (state = stateAlbums, action:any) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.SEARCH_NEWS):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
        search: 'test',
      };
    case FAILURE(ACTION_TYPES.SEARCH_NEWS):
      return {
        ...state,
        loading: false,
        updateSuccess: false,
        errorMessage: action.payload,
        search: 'test',
      };
    case SUCCESS(ACTION_TYPES.SEARCH_NEWS):
      return {
        ...state,
        loading: false,
        search: 'test',
      };
    default:
      return state;
  }
};

const apiUrl = 'https://api.spotify.com/v1/search';


export function getDataDone(data) {
  return {
    type: 'GET_DATA_DONE',
    payload: data
  };
}

export const getSearchEntitiesFetch=(query:string)=> {
  return dispatch => {
    // set state to "loading"

    fetch('https://api.github.com/users/burczu/repos')
      .then(response => response.json())
      .then(data => {
        // set state for success
        dispatch(getDataDone(data))
      })
}};
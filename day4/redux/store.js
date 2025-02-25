// store.js
import { createStore } from 'redux';

const initialState = {
  quotes: [],
  loading: false,
  error: null,
};

// Action Types
const FETCH_QUOTES_REQUEST = 'FETCH_QUOTES_REQUEST';
const FETCH_QUOTES_SUCCESS = 'FETCH_QUOTES_SUCCESS';
const FETCH_QUOTES_FAILURE = 'FETCH_QUOTES_FAILURE';

// Reducer
function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_QUOTES_SUCCESS:
      return { ...state, loading: false, quotes: action.payload };
    case FETCH_QUOTES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

// Create Redux Store
const store = createStore(quotesReducer);

export default store;

// Action Creators
export const fetchQuotesRequest = () => ({
    type: FETCH_QUOTES_REQUEST,
  });
  
  export const fetchQuotesSuccess = (quotes) => ({
    type: FETCH_QUOTES_SUCCESS,
    payload: quotes,
  });
  
  export const fetchQuotesFailure = (error) => ({
    type: FETCH_QUOTES_FAILURE,
    payload: error,
  });
  

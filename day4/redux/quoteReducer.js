import { createStore, combineReducers } from "redux";


const initialState = {
  quotes: [],
};

export const setQuotes = (quotes) => ({
  payload: quotes,
});

const quoteReducer = (state = initialState, action) => {
      return {
        ...state,
        quotes: action.payload,
      }  
};



const rootReducer = combineReducers({
  quotes: quoteReducer,
});


export const store = createStore(rootReducer);

export default quoteReducer;
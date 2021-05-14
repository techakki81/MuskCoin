import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {constants} from '../utils'

const  initialAppState= {
  login:{ isLoggedIn:false,loggedInName:""}
};

export const AppContext = createContext();

export function useAppState() {
  return useContext(AppContext);
}

const appStateReducer = (state, action) => {
  switch (action.type) {
    case constants.dispatchLoginClick:
         return { ...state, login: action.payload };

    case 'CHOOSE_PRODUCT':
      return { ...state, chosenProduct: action.payload };

    default:
      return state;
  }
};

export function AppStateProvider({ children }) {
  let [state, dispatch] = useReducer(
    appStateReducer,
    initialAppState,
  );

  //to test the logged in context every time we make a change 
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

import React, { createContext, useContext, useReducer } from "react";

// This prepares the Data layer
export const StateContext = createContext();

// This will wrap the app and provide the Data layer, which means we
// will go to our indext.js and implement the wrapping

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// This pulls information from the data layer
export const useStateValue = () => useContext(StateContext);

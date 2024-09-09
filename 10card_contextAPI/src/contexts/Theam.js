import React from "react";
import { useContext } from "react";
import { createContext, useState } from "react";

export const TheamContext = createContext({
  theamMode: "light",
  darkTheam: () => {},
  lightThean: () => {},
});

export const TheamProvider = TheamContext.Provider;

export default function useTheam() {
  return useContext(TheamContext);
}

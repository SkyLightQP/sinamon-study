import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const context =
  createContext<[number, Dispatch<SetStateAction<number>>] | undefined>(
    undefined
  );

export const NumProvider: React.FC = ({ children }) => {
  const state = useState(0);

  return <context.Provider value={state}>{children}</context.Provider>;
};

export const useNum = () => useContext(context);

import React, { useState } from "react";

export const colorContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("Hello World");


  return (
    <colorContext.Provider value={{ color, setColor, text, setText }}>
      {children}
    </colorContext.Provider>
  );
};

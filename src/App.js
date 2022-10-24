import React from "react";

import { Routes, Route } from "react-router-dom";
import { ContextProvider } from "././useContext/ContextProvider";
import Home from "./Home";
import Box from "././useContext/Box";
import Screen from "././useContext/Screen";
import Text from "././useContext/Text";
import UseCallBack from "./useCallBack/UseCallBack";
import UseMemoComp from "./useMemo/UseMemo";
import UseReducer from "./useReducer/UseReducer";
import UseTransition from "./useTransition/UseTransition";
import UseDeferredValue from "./useDeferredValue/UseDeferredValue";
import UseLayoutEffect from "./useLayoutEffect/UseLayoutEffect";
import UseId from "./useId/UseId";

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/screen" element={<Screen />} />
        <Route path="/box" element={<Box />} />
        <Route path="/text" element={<Text />} />
        <Route path="/useMemo" element={<UseMemoComp />} />
        <Route path="/useCallBack" element={<UseCallBack />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useTransition" element={<UseTransition />} />
        <Route path="/useDeferredValue" element={<UseDeferredValue />} />
        <Route path="/UseLayoutEffect" element={<UseLayoutEffect />} />
        <Route path="/UseId" element={<UseId />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </ContextProvider>
  );
}

export default App;

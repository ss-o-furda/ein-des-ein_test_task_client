import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Basic from "./pages/Basic";
import { ALL_GROUPS, TRAIN, VALID, TEST } from "./utils/constants";
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   alert("10 год тюрми");
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={ALL_GROUPS} replace />} />
        <Route path={ALL_GROUPS} element={<Basic />} />
        <Route path={TRAIN} element={<Basic />} />
        <Route path={VALID} element={<Basic />} />
        <Route path={TEST} element={<Basic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

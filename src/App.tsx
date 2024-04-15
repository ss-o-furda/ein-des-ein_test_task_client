import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Basic from "./pages/Basic";
import { ALL_GROUPS, TRAIN, VALID, TEST } from "./utils/constants";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    alert(
      `I spent about 9 hours on this task.

I spent 4 and a half hours on the frontend.
I spent about 3 hours on the backend.
It took me about half an hour to deploy.`
    );
  }, []);

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

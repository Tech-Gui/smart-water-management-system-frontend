import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ActionPage from "./ActionPage";
import ChatbotPage from "./Chat";
import Dashboard from "./Dashboard";
import QuestionPage from "./langchainChat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/action" element={<ActionPage />} />
        <Route path="/chat" element={<ChatbotPage />} />
        <Route path="/questions" element={<QuestionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

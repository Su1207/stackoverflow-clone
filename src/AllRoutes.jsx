import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Auth from "./pages/Auth/Auth";
import Questions from "./pages/Questions/Questions";
import AskQuestions from "./pages/AskQuestions/AskQuestions";
import DisplayQuestion from "./pages/Questions/DisplayQuestion";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/Questions" element={<Questions />} />
      <Route path="/AskQuestions" element={<AskQuestions />} />
      <Route path="/Questions/:id" element={<DisplayQuestion />} />
    </Routes>
  );
};

export default AllRoutes;

import Header from "./Header";
import Main from "./Main";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { CourseContext } from "../Contexts/CoursesContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import CoursePageHeader from "./CoursePage";
function Home({ searchVal }) {
  return (
    <div className="App">
      <Header />
      <Main searchVal={searchVal} />
    </div>
  );
}

export default Home;

import React from "react";
// import Navbar from "../../components/Navbar/Navbar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import HomeMainBar from "../../components/HomeMainBar/HomeMainBar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";

const Questions = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <HomeMainBar />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Questions;

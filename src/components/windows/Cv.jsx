import React from "react";
// import CvContent from "./CvContent.jsx";
import cv from "../../assets/CV/cv.html";

export default function Cv() {
  return (
    <>
      <div className="bg-white">
        <iframe src={cv} title="CV" width="600px" height="600px" />
      </div>
    </>
  );
}

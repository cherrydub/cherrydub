import React from "react";
import midpic from "../assets/middle.png";
import toppic from "../assets/toppy.png";
import bottompic from "../assets/bottom.png";
import cvPdf from "../assets/cv.pdf";

export default function WindowCard() {
  return (
    <div className="flex flex-col items-center h-screen">
      <div className="window-top mt-20">
        <img src={toppic} alt="" />
      </div>
      <div className="text-center flex-1 overflow-auto">
        <div className="midpic-background">
          <div className="bg-white mx-1 h-full">
            <iframe src={cvPdf} title="CV" className="w-full h-full"></iframe>
          </div>
        </div>
      </div>
      <div className="window-bottom mb-20">
        <img src={bottompic} alt="" />
      </div>
    </div>
  );
}

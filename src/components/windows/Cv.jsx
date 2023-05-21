import React from "react";
import cvPdf from "../../assets/cv.pdf";

export default function Cv() {
  return (
    <div>
      <iframe src={cvPdf} title="CV" className="w-full h-full"></iframe>
    </div>
  );
}

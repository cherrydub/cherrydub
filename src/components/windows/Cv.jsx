import React from "react";
import cvPdf from "../../assets/cv.pdf";

export default function Cv() {
  return (
    <>
      <div className="border-2 border-green-500">
        <embed src={cvPdf} type="application/pdf" width="100%" height="auto" />
      </div>
      {/* <div className="border-2 border-green-500">
        <iframe
          src={cvPdf}
          title="CV"
          className="w-full border border-red-700"
        ></iframe>
      </div>
      <div className="border-2 border-green-500">
        <iframe
          src={cvPdf}
          title="CV"
          className="w-full border border-red-700"
        ></iframe>
      </div>
      <div className="border-2 border-green-500">
        <iframe
          src={cvPdf}
          title="CV"
          className="w-full border border-red-700"
        ></iframe>
      </div>
      <div className="border-2 border-green-500">
        <iframe
          src={cvPdf}
          title="CV"
          className="w-full border border-red-700"
        ></iframe>
      </div>
      <div className="border-2 border-green-500">
        <iframe
          src={cvPdf}
          title="CV"
          className="w-full border border-red-700"
        ></iframe>
      </div>
      <div className="border-2 border-green-500">
        <iframe
          src={cvPdf}
          title="CV"
          className="w-full border border-red-700"
        ></iframe>
      </div>
      <div className="border-2 border-green-500">
        <iframe
          src={cvPdf}
          title="CV"
          className="w-full border border-red-700"
        ></iframe>
      </div> */}
    </>
  );
}

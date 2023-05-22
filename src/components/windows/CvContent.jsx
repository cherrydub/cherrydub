import React from "react";
import cvHtml from "../../assets/CV/cv.html";

export default function CvContent() {
  return <div dangerouslySetInnerHTML={{ __html: cvHtml }} />;
}

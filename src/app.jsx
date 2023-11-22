import React from "react";
import "./app.css";

export function App() {
  return (
    <div className="app">
      <div className="portfolio">
        <iframe
          src="https://cherrydub.com"
          frameBorder="0"
          height="100%"
          width="100%"
          title="portfolio"
        ></iframe>
        <span>
          <a target="_blank" href="https://98.cherrydub.com">
            <button>Portfolio</button>
          </a>
        </span>
      </div>
      <div className="windows98">
        <iframe
          src="https://98.cherrydub.com"
          frameBorder="0"
          height="100%"
          width="100%"
          title="windows 98"
        ></iframe>
        <span className="spanbox">
          <a target="_blank" href="https://98.cherrydub.com">
            <button>Windows 98</button>
          </a>
        </span>
      </div>
      <div className="blog">
        <iframe
          src="https://blog.cherrydub.com"
          frameBorder="0"
          height="100%"
          width="100%"
          title="blog"
        ></iframe>
        <span>
          <a target="_blank" href="https://98.cherrydub.com">
            <button>Blog</button>
          </a>
        </span>
      </div>
    </div>
  );
}
import React from "react";

export default function WindowTop() {
  return (
    <div>
      <div className="title-bar">
        <div className="title-bar-text">{windowDisplayed}</div>
        <div className="title-bar-controls">
          <button className="bg-gray-300" aria-label="Minimize" />
          <button
            className="bg-gray-300"
            aria-label={windowIcon}
            onClick={handleWindowIconClick}
          />
          <button
            className="bg-gray-300"
            onClick={() => setWindowDisplayed(null)}
            aria-label="Close"
          />
        </div>
      </div>
    </div>
  );
}

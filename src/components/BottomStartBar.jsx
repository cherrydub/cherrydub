import React from "react";
import starticon from "../assets/start.png";

export default function BottomStartBar() {
  return (
    <div className="start-bar flex">
      <div className="border flex-initial start-button-wrapper flex items-center justify-center">
        <img
          src="https://win98icons.alexmeub.com/images/start-button.png"
          width={"35px"}
          alt=""
        />

        {/* <button
          className="flex items-center justify-center"
          style={{ width: "25px", height: "25px" }}
        >
          <img
            src="https://win98icons.alexmeub.com/images/start-button.png"
            alt=""
            width="35px"
          />
        </button> */}
      </div>
      <div className="flex-auto">
        {/* <button className="flex items-center justify-center border border-red-500">
          <img src="" alt="" width="33px" />
        </button> */}
      </div>
      <div className="flex-initial made-by">
        {/* <button className="flex items-center justify-center">
          <img src="" alt="" width="33px" />
        </button> */}
        04:20 PM
      </div>
    </div>
  );
}

import React from "react";

export default function NavigationDesktop({ setWindowDisplayed }) {
  return (
    <div className="navigation-desktop absolute left-3 top-5 border  space-y-3">
      <div className="mb-2">
        <a href="">
          <img
            src="https://win98icons.alexmeub.com/icons/png/computer_explorer_cool-0.png"
            alt="comp"
            width={"30px"}
          />
          <p className="">Home</p>
        </a>
      </div>
      <div className="mb-2">
        <img
          src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs-4.png"
          alt="folder file"
          width={"30px"}
        />
        <p className="">Projects</p>
      </div>
      <div className="mb-2">
        <img
          src="https://win98icons.alexmeub.com/icons/png/notepad-5.png"
          alt="notepad"
          width={"30px"}
        />
        <p className="">CV</p>
      </div>
      <div className="mb-2">
        <img
          src="https://win98icons.alexmeub.com/icons/png/directory_open_file_mydocs_2k-4.png"
          alt="folder file"
          width={"30px"}
        />
        <p className="">Other</p>
      </div>
      <div className="mb-2">
        <img
          src="https://win98icons.alexmeub.com/icons/png/directory_closed-4.png"
          alt="folder"
          width={"30px"}
        />
        <p className="">Misc</p>
      </div>
      <div className="mb-2 bg-emerald-500">
        <img
          onClick={() => {
            setWindowDisplayed("Counter");
          }}
          src="https://win98icons.alexmeub.com/icons/png/directory_closed-4.png"
          alt="folder"
          width={"30px"}
        />
        <p className="">Counter test</p>
      </div>
    </div>
  );
}

import React from "react";

function Header() {
  return (
    <header className="bg-base-200 flex shadow-xl p-1 font-sans">
      <h1 className="text-5xl">Hearts Window Photgraphy</h1>
      <button className=" text-xl w-64 btn-lg btn-primary text-lg ml-auto rounded-lg wi">
        Gallery
      </button>
      <button className=" w-64 btn-lg btn-primary text-lg ml-8 rounded-lg">
        About
      </button>
      <button className=" shadow-md text-xl w-64 btn-lg btn-primary text-lg ml-8 mr-16 rounded-lg">
        Contact
      </button>
    </header>
  );
}

export default Header;

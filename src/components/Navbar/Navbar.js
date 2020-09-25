import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Neflix logo"
      />

      <img
        className="navbar__avatar"
        src="https://s1.qwant.com/thumbr/0x380/1/9/07fee9ed8726cbeab1942900d2084433dcd1deb6955c8c0bd024f4f29a2aa0/avatar-circle-human-male-black-9-512.png?u=https%3A%2F%2Fcdn0.iconfinder.com%2Fdata%2Ficons%2Favatars-21%2F512%2Favatar-circle-human-male-black-9-512.png&q=0&b=1&p=0&a=1"
        alt="Neflix logo"
      />
    </div>
  );
}

export default Navbar;

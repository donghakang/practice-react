import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

import "./Navbar.scss";

const MenuItems = [
  {
    name: "Home",
    link: "#",
    cName: "menu_items",
  },
  {
    name: "About",
    link: "#",
    cName: "menu_items",
  },
  {
    name: "Services",
    link: "#",
    cName: "menu_items",
  },
  {
    name: "Contact",
    link: "#",
    cName: "menu_items",
  },
];

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [login, setLogin] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  function handleLog() {
    setLogin(!login);
  }

  return (
    <div className="navbar">
      <h1>LOGO</h1>
      <ul className={!clicked ? "navlist" : "navlist_active"}>
        {MenuItems.map((item, index) => {
          return (
            <li onClick={handleClick} key={index} className={item.cName}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
        <li className="log" onClick={handleLog}>
          {login ? "Sign out" : "Sign in"}
        </li>
      </ul>
      {clicked ? (
        <MdClose className="fas" onClick={handleClick} />
      ) : (
        <MdMenu className="fas" onClick={handleClick} />
      )}
    </div>
  );
}

export default Navbar;

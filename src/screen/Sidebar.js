import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [nav, setNav] = useState([
    { label: "home", slug: "/", icon: "fas fa-home" },
    { label: "discover", slug: "discover", icon: "fas fa-list-ul    " },
    { label: "categories", slug: "categories", icon: "fas fa-tags    " },
    { label: "my courses", slug: "mycourses", icon: "fas fa-book    " },
  ]);
  const [currentPage, setCurrentPage] = useState("/");

  var navigation = [];
  for (let i = 0; i < nav.length; i++) {
    navigation.push(
      <li key={"nav" + i + "." + nav[i]}>
        <NavLink
          to={nav[i].slug}
          className={
            "link  noul flex c333" + (currentPage === nav[i].slug ? " on" : "")
          }
        >
          <div class={nav[i].icon}></div>
          <h2 className="label s20">{nav[i].label}</h2>
        </NavLink>
      </li>
    );
  }

  return (
    <div className="sidebar rel">
      <a href="./" className="logo noul">
        <h1 className="title">
          <span className="c333">cambridge </span>tutours
        </h1>
      </a>
      <ul className="nav s20">{navigation}</ul>
      <div className="updated-course">
        <div class="fas fa-lightbulb    "></div>
        <div className="label s25 fontb">
          updated course
          <h2 className="author s20 c777">by lawal adebola</h2>
        </div>
      </div>
      <div className="stats flex">
        <div className="point flex">
          <div class="fas fa-shield-alt    "></div>
          <h2 className="label  s25 c333 fontb"> 1800</h2>
          <h2 className="label  s20 c777 fontb"> point</h2>
        </div>
        <div className="point flex">
          <div class="fas fa-battery-half    "></div>

          <h2 className="label  s25 c333 fontb"> 1800</h2>
          <h2 className="label  s20 c777 fontb"> 43%</h2>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "./sidebar.css";
import SideItem from "./SideItem";
import logo from "./logo.png";
import { NavItems } from "./NavItemsData";

function SideNav() {
  return (
    <div className="sidenav">
      <img src={logo} alt="logo" className="imagePlacement" />
      {NavItems.map((navItem, i) => {
        return <SideItem key={i} subMenu={navItem} />;
      })}
    </div>
  );
}

export default SideNav;

import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

function SideItem({ subMenu }) {
  const { name, links, open, link, withSubMenus } = subMenu;
  const [isOpen, setOpen] = React.useState(open);

  const openSideNav = () => {
    if (withSubMenus) {
      setOpen(!isOpen);
    }
  };

  function display() {
    if (withSubMenus) {
      return (
        <div>
          <div className="dropdown-div">
            {name} <IoMdArrowDropdown />
          </div>
          <div className="dropdown-container">
            {isOpen &&
              links.map((link, i) => {
                const { title, to } = link;
                return (
                  <div key={i}>
                    <Link to={to} className="textOverflow">
                      {title}
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={link}>{name}</Link>
        </div>
      );
    }
  }

  return <div onClick={() => openSideNav()}>{display()}</div>;
}

export default SideItem;

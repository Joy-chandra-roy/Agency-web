import React from "react";
import { NavLink } from "react-router";

const NavItems = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    {
      name: "Categories",
      dropdown: true,
      children: [
        { name: "Web development", path: "/" },
        { name: "Software development", path: "/" },
        { name: "Digital marketing", path: "/" },
      ],
    },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
    
      {menuItems.map((item, index) => (
        <li key={index}>
          {item.dropdown ? (
            <details>
              <summary>{item.name}</summary>
              <ul className="p-2 bg-base-100 w-40">
                {item.children.map((child, i) => (
                  <li key={i}>
                    <NavLink to={child.path}>{child.name}</NavLink>
                  </li>
                ))}
              </ul>
            </details>
          ) : (
            <NavLink to={item.path}>{item.name}</NavLink>
          )}
        </li>
      ))}
    
    </>
  );
};

export default NavItems;

import React from "react";

export const Menu = ({ children }) => {
  return <div className="menu">{children}</div>;
};

export const MenuItem = ({ children }) => {
  return <div className="menu-item">{children}</div>;
};

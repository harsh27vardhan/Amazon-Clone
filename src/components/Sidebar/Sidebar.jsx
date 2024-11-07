import React from "react";
import "./Sidebar.css";

const Sidebar = ({ open, setSidebar }) => {
  function closeSidebar() {
    setSidebar(false);
  }
  return open ? (
    <div className="parent-sidebar">
      <div className="sidebar-background"></div>
      <div className="sidebar-container">
        <button className="slider-sign-in">Hello, Sign In</button>
        <button className="cross-sidebar" onClick={closeSidebar}>
          X
        </button>
        <div className="side-bar-items">
          <ContentContainer />
          <ContentContainer />
          <ContentContainer />
          <ContentContainer />
        </div>
      </div>
    </div>
  ) : null;
};

export default Sidebar;

function ContentContainer() {
  return (
    <>
      <div className="content-container">
        <div className="content-title">Trending</div>
        <div className="content-items">
          <div className="content-item">Best Seller</div>
          <div className="content-item">New Release</div>
          <div className="content-item">Movers and Shakers</div>
        </div>
      </div>
    </>
  );
}

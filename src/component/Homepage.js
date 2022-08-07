import React from "react";
import { SIDEBAR_ITEM } from "../constants";
import Sidebar from "./Sidebar";

function Homepage() {
  return (
    <div className="body">
      <div className="sideBar">
        {SIDEBAR_ITEM.map((item, key) => {
          return <Sidebar key={key} data={item} />;
        })}
      </div>

      <div className="pageContainer">
        <div className="page">{/* iterate through layout array */}</div>
      </div>
    </div>
  );
}

export default Homepage;

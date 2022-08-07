import React from "react";
import { useDrag } from "react-dnd";

function Sidebar({ data }) {
  const [{ opacity }, drag] = useDrag({
    type: data.type,
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <div className="sideBarItem" ref={drag} style={{ opacity }}>
      {data.component.type}
    </div>
  );
}

export default Sidebar;

import { memo } from "react";

function SideBar({ setCategory, category }) {
  function handleSetCategory(e) {
    setCategory(e);
  }

  return (
    <div className="sidebar d-flex d-md-block">
      <h3 className="sidebar-header">Men's Shoes</h3>
      <p
        className="sidebar-category me-3 me-md-0"
        onClick={(e) => handleSetCategory(e.target.textContent)}
      >
        All
      </p>
      <p
        className="sidebar-category me-3 me-md-0"
        onClick={(e) => handleSetCategory(e.target.textContent)}
      >
        Shoes
      </p>
      <p
        className="sidebar-category me-3 me-md-0"
        onClick={(e) => handleSetCategory(e.target.textContent)}
      >
        Sandals
      </p>
    </div>
  );
}
export default memo(SideBar);

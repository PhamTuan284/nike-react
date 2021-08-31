import { memo } from "react";

function Search({ setSearchInput }) {
  return (
    <input
      type="text"
      className="form-control search"
      placeholder="Search"
      onChange={(e) => setSearchInput(e.target.value)}
    />
  );
}
export default memo(Search);

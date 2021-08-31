import { memo } from "react";

function Sort({ setSortInput }) {
  return (
    <select
      className="form-select"
      required
      onChange={(e) => setSortInput(e.target.value)}
    >
      {/* <option selected disabled value="default">
          Sort
        </option> */}
      <option value="">Default</option>
      <option value="desc">Price descending</option>
      <option value="asc">Price ascending</option>
    </select>
  );
}
export default memo(Sort);

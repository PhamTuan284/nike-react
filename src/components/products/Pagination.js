import { memo } from "react";

function Pagination({
  totalProducts,
  currentPage,
  setCurrentPage,
  pageLimit,
}) {
  //calculate total page
  let totalPage = Math.ceil(totalProducts / pageLimit);
  //create array inclue total page number
  let totalPageArr = [];
  for (let i = 0; i < totalPage; i++) {
    totalPageArr.push(i + 1);
  }

  function handlePrev() {
    currentPage > 1
      ? setCurrentPage(Number(currentPage) - 1)
      : setCurrentPage(1);
  }

  function handleNext() {
    currentPage < totalPage
      ? setCurrentPage(Number(currentPage) + 1)
      : setCurrentPage(totalPage);
  }
  return (
    <ul className="home-pagination">
      <li className="page-item">
        <button
          onClick={handlePrev}
          //eslint-disable-next-line
          disabled={currentPage == 1 ? true : false}
          className="page-item-btn"
        >
          Previous
        </button>
      </li>
      {totalPageArr.map((page) => (
        <li
          key={page}
          className={
            //eslint-disable-next-line
            page == currentPage ? "page-item page-item-active" : "page-item"
          }
          onClick={(e) => setCurrentPage(e.target.textContent)}
        >
          {page}
        </li>
      ))}

      <li className="page-item">
        <button
          onClick={handleNext}
          //eslint-disable-next-line
          disabled={currentPage == totalPage ? true : false}
          className="page-item-btn"
        >
          Next
        </button>
      </li>
    </ul>
  );
}
export default memo(Pagination);
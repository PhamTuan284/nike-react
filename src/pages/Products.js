import React, { memo } from "react";
import Sort from "../components/products/Sort";
import Product from "../components/products/Product";
import SideBar from "../components/products/SideBar";
import Pagination from "../components/products/Pagination";
import LimitPage from "../components/products/LimitPage";
import Search from "../components/products/Search";

function Products({
  setSortInput,
  products,
  totalProducts,
  currentPage,
  setCurrentPage,
  pageLimit,
  setPageLimit,
  loading,
  setSearchInput,
  setCategory,
  category,
}) {
  return (
    <div className="App products">
      <div className="container">
        <div className="row mb-3">
          <div className="col-2"></div>
          <div className="col-4">
            <Search setSearchInput={setSearchInput} />
          </div>
          <div className="col-2"></div>

          <div className="col-1">
            <LimitPage setPageLimit={setPageLimit} />
          </div>

          <div className="col-3">
            <Sort setSortInput={setSortInput} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-2 sidebar ">
            <SideBar setCategory={setCategory} category={category} />
          </div>

          <div className="col-12 col-md-10">
            <div className="row">
              {loading ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <Product products={products} />
              )}
            </div>

            <Pagination
              totalProducts={totalProducts}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageLimit={pageLimit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Products);

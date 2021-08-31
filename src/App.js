import "./App.css";
import { useEffect, useState, createContext } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import NavBar from "./components/NavBar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { checkItemsInCart } from "./Utils";
import { useDispatch, useSelector } from "react-redux";
import { checkLogged } from "./store/loginSlice";
import Footer from "./components/Footer";
import AppNike from "./pages/AppNike";

export const ContextElement = createContext();

const { REACT_APP_PRODUCT_URL, REACT_APP_LIMIT_PER_PAGE } = process.env;

function App() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortInput, setSortInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pageLimit, setPageLimit] = useState(REACT_APP_LIMIT_PER_PAGE);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const [itemsInCart, setItemsInCart] = useState(checkItemsInCart());
  const [addItemToCartMessage, setAddItemToCartMessage] = useState(false);

  let user = useSelector((state) => state.login.user);

  useEffect(() => {
    if (user !== null) {
      dispatch(checkLogged(user.token));
    }
    // eslint-disable-next-line
  }, [user]);

  //handle sort, search, pagination + get data
  useEffect(() => {
    let sortUrl =
      sortInput !== "" ? "_sort=price&_order=" + sortInput + "&" : "";
    let paginationUrl = `_page=${currentPage}&_limit=${pageLimit}`;
    let searchUrl = searchInput !== "" ? `q=${searchInput}&` : "";
    let categoryUrl =
      category !== "" && category !== "All" ? `type=${category}&` : "";

    if (sortInput !== null || searchInput !== null || category !== null) {
      fetch(
        REACT_APP_PRODUCT_URL +
          categoryUrl +
          searchUrl +
          sortUrl +
          paginationUrl
      )
        .then((response) => {
          setLoading(true);
          setTotalProducts(Number(response.headers.get("x-total-count")));
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setProducts(data);
        })
        .catch((error) => console.log(error));
    } else {
      fetch(REACT_APP_PRODUCT_URL + paginationUrl)
        .then((response) => {
          setLoading(true);
          setTotalProducts(Number(response.headers.get("x-total-count")));
          return response.json();
        })
        .then((data) => {
          setLoading(false);
          setProducts(data);
        })
        .catch((error) => console.log(error));
    }
  }, [sortInput, currentPage, searchInput, pageLimit, category]);

  return (
    <>
      <ContextElement.Provider
        value={{
          itemsInCart,
          setItemsInCart,
          addItemToCartMessage,
          setAddItemToCartMessage,
        }}
      >
        <Router>
          <NavBar />

          <Switch>
            <Route path="/cart" children={<Cart />} />

            <Route
              path="/app"
              children={
                <AppNike/>
              }
            />
            <Route
              path="/products/:id"
              children={<ProductDetail products={products} loading={loading} />}
            />

            <Route
              path="/products"
              children={
                <Products
                  setSortInput={setSortInput}
                  products={products}
                  totalProducts={totalProducts}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageLimit={pageLimit}
                  setPageLimit={setPageLimit}
                  loading={loading}
                  setSearchInput={setSearchInput}
                  setCategory={setCategory}
                  category={category}
                />
              }
            />

            <Route
              path="/"
              children={
                <Home
                  setSortInput={setSortInput}
                  products={products}
                  totalProducts={totalProducts}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  pageLimit={pageLimit}
                  setPageLimit={setPageLimit}
                  loading={loading}
                />
              }
            />
          </Switch>
          <Footer />
        </Router>
      </ContextElement.Provider>
    </>
  );
}

export default App;

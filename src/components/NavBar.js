import React, { memo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContextElement } from "../App";
import { logIn } from "../store/loginSlice";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/loginSlice";

function NavBar() {
  let { itemsInCart } = useContext(ContextElement);
  const [isClickLogin, setIsClickLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.user);
  let userLogged = useSelector((state) => state.login.userLogged);

  function handleLoginBtn() {
    const userInfo = {
      username: username,
      password: password,
    };
    dispatch(logIn(userInfo));
    setIsClickLogin(false);
    document.body.classList.toggle("stopScrolling");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent ">
        <div className={isClickLogin ? "login active" : "login"}>
          <div
            className="login-overlay"
            onClick={() => setIsClickLogin(false)}
          ></div>
          <div className="login-pop-up p-4">
            <svg
              fill="#111"
              height="30px"
              width="30px"
              viewBox="0 0 24 24"
              onClick={() => setIsClickLogin(false)}
            >
              <path d="M15.04 12L24 2.96 21.04 0 12 8.96 3.04 0 0 2.96 9.04 12 0 20.96 3.04 24 12 14.96 21.04 24 24 20.96z"></path>
            </svg>
            <div className="mb-3 text-center">
              <h2>Login</h2>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <button
                type="button"
                className="btn btn-dark"
                onClick={() => handleLoginBtn()}
              >
                Login
              </button>
            </div>
          </div>
        </div>
        <div className="container ">
          <Link to="/">
            <div className="navbar-brand">
              <svg
                className="pre-logo-svg"
                height="60px"
                width="60px"
                fill="#111"
                viewBox="0 0 69 32"
              >
                <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
              </svg>
            </div>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto mb-2 mb-lg-0 d-flex ">
              <li className=" d-flex">
                <NavLink
                  exact
                  to="/"
                  className="navbar__link me-3"
                  activeClassName="navbar__link--active"
                >
                  Home
                </NavLink>

                <NavLink
                  to="/products"
                  className="navbar__link me-3"
                  activeClassName="navbar__link--active"
                >
                  Products
                </NavLink>
                <NavLink
                  to="/app"
                  className="navbar__link me-3"
                  activeClassName="navbar__link--active"
                >
                  Nike App
                </NavLink>
              </li>
            </ul>

            {userLogged ? (
              <>
                <img
                  src={user.avatar}
                  className="user-avatar"
                  alt="user-avatar"
                />
                <span
                  className="user-logout"
                  onClick={() => {
                    dispatch(userLogout());
                  }}
                >
                  Log out
                </span>
              </>
            ) : (
              <svg
                aria-hidden="true"
                data-var="glyph"
                fill="#111"
                height="30px"
                width="30px"
                viewBox="0 0 24 24"
                onClick={() => {
                  setIsClickLogin(true);
                  document.body.classList.toggle("stopScrolling");
                }}
              >
                <path d="M16.44 11A5.94 5.94 0 0 0 18 7 6 6 0 0 0 6 7a5.94 5.94 0 0 0 1.56 4A5 5 0 0 0 3 16v5a1 1 0 0 0 2 0v-5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v5a1 1 0 0 0 2 0v-5a5 5 0 0 0-4.56-5zM8 7a4 4 0 1 1 4 4 4 4 0 0 1-4-4z"></path>
              </svg>
            )}

            <Link to="/cart" className="cart-icon-wrapper">
              <svg
                width="30px"
                height="30px"
                fill="#111"
                viewBox="0 0 24 24"
                className="ms-3 cart-icon"
              >
                <path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path>
                <path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path>
              </svg>
              <span className="cart-quantity">{itemsInCart.length}</span>
            </Link>
          </div>
        </div>
      </nav>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active text-center">
            <h4>HELLO NIKE APP</h4>
            <span>
              Download the app to access everything Nike.
              <Link to="/app">Get Your Great</Link>
            </span>
          </div>
          <div className="carousel-item text-center">
            <h4>FREE DELIVERY</h4>
            <span>
              Applies to orders of 250$ or more.
              <Link to="/products">Shopping now</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default memo(NavBar);

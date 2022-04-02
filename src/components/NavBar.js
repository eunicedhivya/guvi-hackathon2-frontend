import { useHistory, NavLink, Link } from "react-router-dom";

function NavBar({ cartItems }) {
  const history = useHistory();
  return (
    <div className="container-fluid fixed-top bg-light">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        {/* <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <h1 className="site-name">Lendkart</h1>
        </a> */}
        <Link to="/">
          <h1 className="site-name">Lendkart</h1>
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to="#" className="nav-link px-2 link-secondary">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link px-2 link-dark">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="nav-link px-2 link-dark">
              About
            </NavLink>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary position-relative"
            onClick={() => {
              history.push("/cart");
            }}
          >
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItems.length}
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default NavBar;

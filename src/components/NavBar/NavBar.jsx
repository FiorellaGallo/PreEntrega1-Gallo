import CartWidget from "./CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse nav " id="navbarNavDropdown">
            <Link className="navbar-brand " to="/">Logo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <Link className="nav-link" to="/category/bronzer">Bronzer</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/category/eyeshadow">Eyeshadow</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/category/foundation">Foundation</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/category/lip_liner">Lip liner</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/category/lipstick">Lipstick</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/category/mascara">Mascara</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/category/nail_polish">Nail polish</Link>
              </li>
              <div className="seeker">
                <Link to="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-search" viewBox="0 0 20 20">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </Link>
              </div>
              
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
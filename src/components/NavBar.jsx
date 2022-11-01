import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse nav " id="navbarNavDropdown">
            <a className="navbar-brand " href="#">Logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav ">
              <li className="nav-item " >
                <a className="nav-link" href="#">Opción A</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Opción B</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Opción C</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Opción D</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">Opción E</a>
              </li>
              <div className="seeker">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-search" viewBox="0 0 20 20">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
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
import CartWidget from "./CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";
import Search from "./Search";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:"rgb(34, 39, 48)"}}>
        <div className="container-fluid ">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse nav " id="navbarScroll">
            <Link className="navbar-brand " to="/"><img src={`${process.env.PUBLIC_URL}/logo.png`} className="logo"></img></Link>
           
            <ul className="navbar-nav " >
              <li className="nav-item " >
                <Link className="nav-link" to="/category/bronzer" >Bronzer</Link>
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
             <Search className="search"/>
              
            </ul>
          </div>
          <CartWidget />
        </div>
      </nav>
    </div>
  )
}

export default NavBar;
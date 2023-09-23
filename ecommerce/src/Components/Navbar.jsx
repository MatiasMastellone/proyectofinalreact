import { CartWidget } from "./CartWidget.jsx";
import {Logo} from "./Logo.jsx";
import { Link} from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export const NavBar = () => {
  return (

	<Navbar bg="dark" data-bs-theme="dark">
	<Container>
	  <Link to={"/"}><Logo/></Link>
	  <Nav className="me-auto">
		<Link  className="nav-link" to={"/"}>Home</Link>
		<Link  className="nav-link" to="/category/blonde">Blonde</Link>
		<Link  className="nav-link" to="/category/IPA">IPA</Link>
		<Link  className="nav-link" to="/category/porter">Porter</Link>
	  </Nav>
	  <CartWidget/>
	</Container>
  </Navbar>
  );
};

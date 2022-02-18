import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useResultContext } from "../../context/ResultsContext";
import './NavBarComponent';
const NavBarComponent = () => {
  const {search,setSearch,dark,setDark}=useResultContext()
console.log("search",search);
  const handleValueChange = (e)=>{
    setSearch(e.target.value)
  }

  return (
    <Navbar  expand="lg" className={dark? 'dark':''}>
      <img
        className="img-fluid w"
        style={{ width: "100px" }}
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        alt=""
      />
      <Container>
        <input
          style={{ borderRadius: "21px" }}
          className="form-control w-50 input"
          type="text"
          name=""
          id=""
          value={search}
          placeholder="Search.."
          onChange={handleValueChange}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <button onClick={()=>setDark(!dark)} className="px-2 py-1 rounded">{dark? <MdDarkMode /> : <MdLightMode />} </button>
            <Nav.Link href="#link">
              <button className="btn-primary px-2 py-1 rounded"> Login  </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;

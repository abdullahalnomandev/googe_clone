import React from "react";
import { NavLink } from "react-router-dom";
import { useResultContext } from "../../context/ResultsContext";
// import './Search.css';

const Search = () => {
 const {dark}=useResultContext()
  const route = [
    { path: "/search", name: "All" },
    { path: "/news", name: "News" },
    { path: "/images", name: "Images" },
    { path: "/videos", name: "Videos" },
  ];
  return (
    <div style={{ borderBottom: "1px solid gray" }}  className={dark?'dark':''} > 
      <div className="container">
        {route.map(({ name, path }, i) => (
          <NavLink style={{textDecoration:'none'}} to={path} key={i} className={(ex) => (ex.isActive ? 'active ms-5 ' : 'ms-5')}>
            {name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Search;

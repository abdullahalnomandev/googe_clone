import React from "react";
import { Route, Routes } from "react-router-dom";
import ResultPages from "../pages/ResultPages";


const RoutesComponent = () => {
  return (
    <Routes>
        {
          ['/images','/videos','/search','/news'].map((path,i)=>(
            <Route path={path} key={i} element={<ResultPages  />} />
            ))
          }
      </Routes>

  );
};

export default RoutesComponent;

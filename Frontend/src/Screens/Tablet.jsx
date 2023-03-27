import React from "react";
import { MainContainer, Sidebar } from "../Layouts";

const Tablet = () => {
  return (
    <div className='two_grid_layout'>
      <Sidebar>
        <h4>Sidebar Filters here</h4>
      </Sidebar>
      <MainContainer>
        <div className='allProductsContainer'>
          <h4>Products here</h4>
        </div>
      </MainContainer>
    </div>
  );
};

export default Tablet;

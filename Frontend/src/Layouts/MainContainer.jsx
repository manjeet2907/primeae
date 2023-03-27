import React from "react";

const MainContainer = ({ children, title, productlength }) => {
  return (
    <div className='main_container'>
      <div className='main_container_heading'>
        <div className='beadcrumb'>Breadcrumshere</div>
        <div className='main_container_heading_content'>
          <div className='main_container_heading_title'>
            <h4>
              {title} ({productlength})
            </h4>
          </div>
          <div className='sortingoption'> sort by </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default MainContainer;

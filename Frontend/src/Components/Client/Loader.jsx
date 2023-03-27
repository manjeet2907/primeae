import React from "react";
import { LoaderIcon } from "../../assets/images";

const Loader = () => {
  return (
    <div className='loader'>
      <img src={LoaderIcon} alt='loader' />
    </div>
  );
};

export default Loader;

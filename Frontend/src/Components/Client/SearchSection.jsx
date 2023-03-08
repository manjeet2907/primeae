import React from "react";
import { BsCart, BsSearch } from "react-icons/bs";

const SearchSection = () => {
  return (
    <div className='searchSection'>
      <div className='logoSection'>
        <h3>Prime Ae</h3>
      </div>
      <div className='searchbarSection'>
        <input type='text' placeholder='Search For Keyword' />
        <button>
          <BsSearch />
        </button>
      </div>
      <div className='cartIcon'>
        <BsCart />
      </div>
    </div>
  );
};

export default SearchSection;

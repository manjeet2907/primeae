import React, { useState } from "react";

const MyAccordian = ({ question, answer }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='accordian'>
        <button className='primary_button' onClick={() => setShow(!show)}>
          {question} {show ? "-" : "+"}{" "}
        </button>
        {show && <div className='answers'> {answer} </div>}
      </div>
    </>
  );
};
export default MyAccordian;

import React from "react";
import { HeroImage } from "../Components/Client";
import MyAccordian from "../Components/Client/Accordian";

const CustomerSupport = () => {
  return (
    <>
      <HeroImage />
      <div className='customersupport'>
        <MyAccordian
          question={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae"
          }
          answer={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae."
          }
        />
        <MyAccordian
          question={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae"
          }
          answer={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae."
          }
        />
        <MyAccordian
          question={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae"
          }
          answer={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae."
          }
        />
        <MyAccordian
          question={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae"
          }
          answer={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, recusandae."
          }
        />
      </div>
    </>
  );
};

export default CustomerSupport;

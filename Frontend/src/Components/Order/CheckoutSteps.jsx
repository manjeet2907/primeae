import React from "react";
import { Stepper, StepLabel, Step } from "@mui/material";
import { MdOutlineLocalShipping, MdPayment } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";

const CheckoutSteps = ({ activeStep }) => {
  const steps = [
    {
      label: <p>Shipping Details</p>,
      icon: <MdOutlineLocalShipping />,
    },
    {
      label: <p>Confirm Order</p>,
      icon: <GiConfirmed />,
    },
    {
      label: <p>Payment</p>,
      icon: <MdPayment />,
    },
  ];

  const stepStyles = {
    boxSizing: "border-box",
    fontSize: "22rem",
  };

  return (
    <>
      <Stepper alternativeLabel activeStep={activeStep} style={stepStyles}>
        {steps.map((item, index) => (
          <Step
            key={index}
            active={activeStep === index ? true : false}
            completed={activeStep >= index ? true : false}>
            <StepLabel
              style={{
                color: activeStep >= index ? "#d4a853" : "rgba(0, 0, 0, 0.649)",
              }}
              icon={item.icon}>
              {item.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default CheckoutSteps;

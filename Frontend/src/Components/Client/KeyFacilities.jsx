import React from "react";
import {
  FastDelivery,
  FreeDelivery,
  DamageProtection,
  ExtendedWarranty,
  BrandGuarantee,
} from "../../assets/images";

const KeyFacilities = () => {
  return (
    <div className='keyfacilities'>
      <div className='keyfacilities_heading'>
        <h4>We've Seriously got you Covered</h4>
      </div>
      <div className='kefacilities_list'>
        <div className='kefacilities_list_facility'>
          <img src={FastDelivery} alt='fastdelivery' />
          <p>Fast Delivery</p>
        </div>
        <div className='kefacilities_list_facility'>
          <img src={FreeDelivery} alt='deliveryfree' />
          <p>Free Shipping</p>
        </div>
        <div className='kefacilities_list_facility'>
          <img src={DamageProtection} alt='damagerp' />
          <p>Damage Protection</p>
        </div>
        <div className='kefacilities_list_facility'>
          <img src={ExtendedWarranty} alt='warranty' />
          <p>3 years Extended Warranty</p>
        </div>
        <div className='kefacilities_list_facility'>
          <img src={BrandGuarantee} alt='guarantee' />
          <p>Brand Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default KeyFacilities;

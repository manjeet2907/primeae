import React from "react";
import { HeroImage } from "../Components/Client";
import { MetaData } from "../Layouts";

const AboutUs = () => {
  return (
    <>
      <MetaData title='About Prime Ae' />
      <HeroImage />
      <div className='aboutus'>
        <p className='info_section'>
          PRIME STORE is managed and administrated by KHALID LEMAR Company,
          Dubai based company and established in 2016. We are offering a wide
          range of electronics like Mobile phones, Tablet, Smart Watches, Mobile
          Accessories, and Perfumes. We are purely dealing with genuine and
          authentic products. We are directly working with brands.
        </p>
        <p className='info_section'>
          From the very beginning of our existence, we have been dealing mobile
          phones retail and wholesale by partnering with all the major brands
          such as Apple (iPhone, iPad), Samsung, Huawei, HTC, Nokia, XIAOMI, LG,
          PRIME, and Sony. <br /> <br /> We are a company with well-known
          professionals that is always present in the key moments to achieve the
          challenges posed by our customers. We are problem-solvers,
          technologists, and innovators. <br />
          <br />
        </p>
        <p>
          What We Do We lead Customers on their digital transformation journey,
          providing solutions and services that leverage deep industry
          expertise, global scale, customer care core value independence and an
          extensive partner community. <br />
          <br /> Our team of experts designs, builds and operates global
          networks, information systems and mobile technologies that connect
          people and also helps Local and International Customers by modernizing
          their IT infrastructure, Communication needs with latest technology
          solutions. <br />
          <br /> Our Mission
          <br />
          Our Mission is to provide affordable and quality solutions in the
          mobile industry and the world at large to meet specific challenges and
          enable our customers to benefit from the advanced use of information
          technology We are dedicated to delighting our customers by
          persistently delivering advanced technology that becomes paramount for
          today, tomorrow and their future needs. <br />
          <br /> To convert our ideas into tangible attitudes and a culture that
          makes a difference in the IT & Technology Industry, we will convert
          our mission into vital and significant results that we would like to
          accomplish to make the greatest impact on our company.
          <br />
          <br /> Our Vision <br />
          <br /> Our dream is to become the world leading Mobile and Technology
          Company that produces quality products and provides reliable services.{" "}
          <br />
          <br /> In order to achieve our vision, we will focus and clearly
          define the vision statement and integrated it as the image of PRIME.ae
          business that we feel very compelled to achieve. As clearly stated in
          our mission statement, we want to provide affordable and quality
          solutions in mobile industry and the world at large to meet specific
          challenges and enable our customers to benefit from the advanced use
          of information technology, this will assist us on how we are going to
          achieve our vision.
        </p>
      </div>
    </>
  );
};

export default AboutUs;

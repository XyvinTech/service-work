"use client";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { Box, useMediaQuery } from "@mui/material";
import ServiceCard from "./ServiceCard";
const servicesData = [
  {
    title: "AC Repair",
    image: "/Home/Services/1.webp",
    description:
      "Our expert repair services swiftly diagnose and fix any cooling issues, ensuring your comfort is restored in no time.",
  },
  {
    title: "AC Installation",
    image: "/Home/Services/2.webp",
    description:
      "Our skilled technicians ensure your new unit is expertly installed for optimal performance and efficiency",
  },
  {
    title: "AC Maintenance",
    image: "/Home/Services/3.webp",
    description:
      "Our comprehensive maintenance services keep your unit running efficiently saving you from unexpected breakdowns.",
  },
  {
    title: "Networking Solutions",
    image: "/Home/Services/110.webp",
    description:
      "Enhance your business operations with our robust networking solutions. From designing and installing efficient network infrastructures to providing reliable network support, we ensure seamless connectivity and optimal performance. Our experts optimize your network for speed, security, and scalability.",
  },
  {
    title: "CCTV Installation",
    image: "/Home/Services/12.webp",
    description:
      "Protect your property with our professional CCTV installation services. Our skilled technicians design and install customised surveillance systems tailored to your specific needs. From high-definition cameras to advanced recording equipment, we deliver top-notch security solutions.",
  },
  {
    title: "Refrigerator Repair, Installation, and Servicing",
    image: "/Home/Services/17.png",
    description:
      "Expert diagnostics and repairs for all major refrigerator brands.Swift and efficient service to restore your refrigerator's functionality.Transparent pricing with no hidden fees.",
  },
  {
    title: "Geyser Repair, Installation, and Servicing",
    image: "/Home/Services/15.png",
    description:
      "Professional installation of new geysers for efficient and safe hot water supply.Expert diagnostics and repairs to address any geyser issues promptly.Transparent pricing and upfront estimates.",
  },
  {
    title: "Washing Machine Repair, Installation, and Servicing",
    image: "/Home/Services/16.png",
    description:
      "Skilled technicians for expert installation of new washing machines.Swift and efficient repairs to resolve any washing machine problems.Transparent pricing and upfront estimates.",
  },
];
function StyledSlider() {
  const [isPreviousClicked, setIsPreviousClicked] = useState(false);
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
    setIsPreviousClicked(false);
  };

  const previous = () => {
    sliderRef.slickPrev();
    setIsPreviousClicked(true);
  };
  const StyledSlider = styled(Slider)`
    .slick-slide {
      padding: 0 20px;
      height: 700px;

      @media (max-width: 600px) {
        padding: 0 5px;
        height: 400px;
      }
    }
    .slick-prev,
    .slick-next {
      display: block;
    }
    @media (max-width: 768px) {
      .slick-prev,
      .slick-next {
        display: none;
      }
    }
    .slick-dots {
      left: 10px;
      bottom: -30px;
      text-align: left;

      li {
        margin: 0;
      }

      li button:before {
        color: #fc8229;
        font-size: 8px;
      }

      li.slick-active button:before {
        color: #fc8229;
        font-size: 8px;
      }
    }
  `;
  const ButtonBox = styled(Box)`
    position: absolute;
    right: 40px;
    display: flex;
    gap: 10px;
    margin-top: 20px;
    @media (max-width: 600px) {
      display: none;
    }
  `;
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true, // Show dots on mobile
          arrows: false, // Hide arrows on mobile
        },
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
          dots: true, // Show dots on mobile
          arrows: false, // Hide arrows on mobile
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <StyledSlider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            image={service.image}
            description={service.description}
          />
        ))}
      </StyledSlider>
      <ButtonBox>
        <img
          src={
            isPreviousClicked ? "/images/Button2.png" : "/images/Button1.png"
          }
          style={{ width: "48px", height: "48px" }}
          onClick={previous}
          alt="Previous"
        />
        <img
          src={isPreviousClicked ? "/images/Button3.png" : "/images/Button.png"}
          style={{ width: "48px", height: "48px" }}
          onClick={next}
          alt="Next"
        />
      </ButtonBox>
    </div>
  );
}

export default StyledSlider;

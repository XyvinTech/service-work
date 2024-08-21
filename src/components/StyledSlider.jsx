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
  // Add more services as needed
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
            height: 700px; // Increased height for slides

      @media (max-width: 600px) {
        padding: 0 5px;
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

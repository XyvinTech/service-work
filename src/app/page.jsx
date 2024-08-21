import React from "react";
import bgImage from "/public/Home/Remaining/Land.png";
import LandingHeader from "@/components/LandingHeader";
import StyledBox from "@/components/StyledBox";
import Statistics from "@/components/Statistics";
import StyledSlider from "@/components/StyledSlider";
import Achievements from "@/components/Achievements";
import ReviewCarousel from "@/components/ReviewCarousel";
import GetApp from "@/components/GetApp";
import LandingCarousel from "@/components/LandingCarousal";
import LandingService from "@/components/LandingService";
const page = () => {
  const awards = [
    "/Home/Remaining/Client1.png",
    "/Home/Remaining/Client2.png",
    "/Home/Remaining/Client3.png",
    "/Home/Remaining/Client4.png",
    "/Home/Remaining/Client5.png",
    "/Home/Remaining/Client6.png",
    "/Home/Remaining/Client7.png",
    "/Home/Remaining/Client8.png",
  ];
  const services = [
    {
      url: "/Home/Remaining/Service1.png",
      title: "Premium Service",
    },
    {
      url: "/Home/Remaining/Service2.png",
      title: "Secure Payment",
    },
    {
      url: "/Home/Remaining/Service3.png",
      title: "Highest Rated",
    },
    {
      url: "/Home/Remaining/Service4.png",
      title: "Quality Assured",
    },
    {
      url: "/Home/Remaining/Service5.png",
      title: "Timely service",
    },
  ];

  const images1 = [
    "/Home/Carousal/1.webp",
    "/Home/Carousal/2.webp",
    "/Home/Carousal/3.webp",
    "/Home/Carousal/4.webp",
    "/Home/Carousal/5.webp",
    "/Home/Carousal/6.webp",
    "/Home/Carousal/7.webp",
    "/Home/Carousal/9.webp",
    "/Home/Carousal/10.webp",
    "/Home/Carousal/11.webp",
    "/Home/Carousal/12.webp",
    "/Home/Carousal/13.webp",
  ];
  return (
    <>
      {" "}
      <LandingHeader
        title={"Expert Appliance Repair at Your Doorstep"}
        isLand
        bgImg={bgImage.src}
      />
      <StyledBox>
        <Statistics />
      </StyledBox>
      <StyledBox title={"Our Service"}>
        <StyledSlider />
      </StyledBox>
      <StyledBox></StyledBox>
      <Achievements images={awards} />
      <StyledBox title={"Our Expert technicians"}>
        <LandingCarousel images={images1} />
      </StyledBox>{" "}
      <LandingService images={services} />
      <GetApp />
      <StyledBox title={"Testimonials"}>
        <ReviewCarousel />
      </StyledBox> <StyledBox></StyledBox>
    </>
  );
};

export default page;

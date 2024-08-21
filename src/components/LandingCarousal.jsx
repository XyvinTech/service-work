"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Avatar,
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/navigation";
function LandingCarousel({ images }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const router = useRouter();
  const mobileStyle = { width: "56px", height: "56px" };
  const desktopStyle = { width: "100px", height: "100px" };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 12,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <>
      <Typography
        textAlign={isMobile && "justify"}
        variant={isMobile ? "h7" : "h6"}
        lineHeight={"27px"}
        paddingLeft={isMobile ? 0 : 30}
        paddingRight={isMobile ? 0 : 30}paddingBottom={isMobile ? 0 : 10}
      >
        Meet our team of highly skilled and experienced technicians. With years
        of expertise in appliance repair, our professionals are dedicated to
        providing top-notch service. From diagnosing complex issues to
        delivering efficient repairs, our team is committed to restoring your
        appliances to optimal performance.
      </Typography>
      <div className="slider-container" style={{ overflow: "hidden", paddingTop: isMobile ? '30px' : '0px',  }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <Avatar src={image} sx={isMobile ? mobileStyle : desktopStyle} />
            </div>
          ))}
        </Slider>
      </div>
     
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="20px"
      >
        <Button
          variant="navbar"
          fullWidth={isMobile}
          color="primary"
          onClick={() => router.push("https://www.workoindia.com/enroll")}
        >
          Enroll Now
        </Button>
      </Box>
    </>
  );
}

export default LandingCarousel;

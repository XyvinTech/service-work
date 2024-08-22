"use client";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import bgImage from "/public/assets/home/img/footer.png";
import styled from "styled-components";
import { mont } from "@/theme";
import StyledInput from "@/ui/StyledInput";
import PlusIcon from "../assets/icons/call.svg";
import SMSIcon from "../assets/icons/sms.svg";
import StyledIconButton from "@/ui/StyledIconButton";
import { useState } from "react";
import Link from "next/link";

const FooterContainer = styled(Box)(() => ({
  backgroundImage: `url(${bgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: "white",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.95)",
    zIndex: 1,
  },
  "& > *": {
    zIndex: 2,
  },
}));

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [showMore, setShowMore] = useState(false);
  const handleViewMoreClick = () => {
    setShowMore(!showMore);
  };
  const styles = {
    typography: {
      fontSize: "20px",
      fontWeight: 700,
      fontFamily: mont.style.fontFamily,
      backgroundImage:
        "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.31) 100%)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },
  };

  return (
    <FooterContainer>
      {/* <StyledBox> */}

      <Stack
        direction={isMobile ? "column" : "row"}
        p={isMobile ? 0 : 4}
        spacing={isMobile ? 3 : isTablet ? 0 : 20}
      >
        <Box>
          <img
            src="/Home/Remaining/Logo.webp"
            alt="Logo"
            width={isMobile ? "165px" : "270px"}
            height={"auto"}
          />
          <Typography variant="h6" lineHeight={"30px"} p={2}>
            Address: <br />
            Nextra the address, plot no. 4B, District <br /> center, Mayur Vihar
            phase 1 extension,
            <br />
            New Delhi
          </Typography>
        </Box>
        <Stack width={isMobile ? "100%" : "55%"} pt={3} spacing={2}>
          <Typography style={styles.typography}>Need some Help?</Typography>
          <Typography
            fontFamily={mont.style.fontFamily}
            fontSize={"30px"}
            fontWeight={"700"}
            color={"primary"}
          >
            Reach out to us
          </Typography>
          <Stack
            direction={isMobile ? "column" : isTablet ? "column" : "row"}
            spacing={3}
          >
            <StyledIconButton
              hover={true}
              icon={PlusIcon}
              buttonText="7-666-666-559"
              color={"white"}
              borderColor={"rgba(255, 255, 255, 0.12)"}
            />
            <StyledIconButton
              hover={true}
              icon={SMSIcon}
              buttonText="info@workoindia.com"
              color={"white"}
              borderColor={"rgba(255, 255, 255, 0.12)"}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={isMobile ? "column" : "row"}
        px={isMobile ? 1 : 6}
        py={1}
        spacing={isMobile ? 5 : 10}
        alignItems={"center"}
        width={"100%"}
        marginTop={isMobile ? 2 : 0}
      >
        {/* <Stack spacing={2} width={isMobile ? "100%" : "55%"}>
          <Typography variant="h5">Join our newsletter</Typography>
          <Stack direction={"row"} spacing={2}>
            <StyledInput
              placeholder={"Email ID"}
              backgroundColor={"background.paper"}
            />
            <Stack width={isMobile ? "49%" : "20%"}>
              <Button variant="navbar" fullWidth>
                Submit
              </Button>
            </Stack>
          </Stack>
        </Stack> */}
       
      </Stack>
      {/* <Stack>
        <Typography
          variant="h6"
          fontWeight={"400"}
          px={isMobile ? 2 : 6}
          py={2}
        >
          Worko Locations
        </Typography>
      </Stack>
      <Stack
        direction={isMobile ? "column" : "row"}
        p={isMobile ? 2 : 4}
        px={isMobile ? 2 : 6}
        spacing={isMobile ? 2 : isTablet ? 4 : 18}
        // justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={isMobile ? 7 : isTablet ? 4 : 18}>
          <Stack spacing={3}>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Delhi NCR
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Chennai
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Mumbai
            </Typography>
          </Stack>
          <Stack spacing={3}>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Dehradun
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Mumbai
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Assam
            </Typography>
          </Stack>
        </Stack>{" "}
        <Stack direction="row" spacing={isMobile ? 7 : isTablet ? 4 : 18}>
          <Stack spacing={3}>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Tirupati
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Gujarat
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Andaman
            </Typography>
          </Stack>

          <Stack spacing={3}>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Lucknow
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Kerala
            </Typography>
            <Typography variant="h7" color={"#BDBDBD"}>
              Worko in Rajasthan
            </Typography>
          </Stack>
        </Stack>
      </Stack> */}
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={isMobile ? "left" : "space-between"}
        bgcolor={"#333333"}
        p={2}
        height={"60px"}
        spacing={1}
      >
        <Typography variant="copyrights">
          &copy; 2005-2024 Worko Private limited. All Rights Reserved
        </Typography>
        <Typography variant="copyrights" color={"#908E8E"}>
          Handcrafted with ❤️ by Acute Angle
        </Typography>
      </Stack>
      {/* </StyledBox> */}
    </FooterContainer>
  );
}

export default Footer;

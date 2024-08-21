"use client";
import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import LandingForm from "./LandingForm";

function LandingHeader({ bgImg, title, isHome, height, mobile, top, isLand }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const router = useRouter();

  return (
    <Stack
      sx={{
        position: "relative",
        overflow: "hidden",
        ...(isLand && bgImg
          ? {
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -2,
              },
              "&::after": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: -1,
              },
            }
          : {
              backgroundColor: "#fff", // Set background color to white when isLand is false
            }),
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      height={
        isMobile ? mobile || "910px" : isTablet ? "900px" : height || "680px"
      }
      alignItems={isLand ? "left" : "center"}
      justifyContent={"center"}
      spacing={2}
    >
      {" "}
      {isLand && (
        <Grid container spacing={2} paddingTop={isMobile ? 2 : 10}>
          <Grid item md={6}>
            <Typography
              variant="h1"
              color={isLand ? "#fff" : "#000"}
              textAlign={isLand ? "left" : isMobile ? "left" : "center"}
              paddingTop={isMobile ? 0 : 10}
              paddingBottom={isMobile ? 10 : 0}
              px={isLand ? 10 : isMobile ? 2 : 20}
            >
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            md={4}
            xs={11}
            bgcolor={"white"}
            paddingLeft={2}
            paddingRight={2}
            borderRadius={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <LandingForm />
          </Grid>
        </Grid>
      )}
      {!isLand && (
        <Stack
          spacing={2}
          textAlign={isMobile ? "left" : "center"}
          px={isMobile ? 2 : 20}
        >
          <Typography
            variant="h1"
            color={isLand ? "#fff" : "#000"}
            textAlign={isLand ? "left" : isMobile ? "left" : "center"}
            paddingTop={top}
            width={isLand ? "52%" : "100%"}
            px={isLand ? 10 : isMobile ? 2 : 20}
          >
            Thank you for choosing{" "}
            <span style={{ color: "#FC8229" }}>Worko</span>
          </Typography>
          <Typography variant="h5" color="#605F5E">
            We're thrilled to have you as part of our family!
          </Typography>
          <Typography variant="h6" color="#605F5E">
            We appreciate your trust in us for your appliance repair and
            maintenance needs. Our team is dedicated to keeping your home
            running smoothly. If you need further assistance, we're always here
            to help!
          </Typography>{" "}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="20px"
          >
            <Button variant="navbar" fullWidth={isMobile} color="primary">
              Get in Touch
            </Button>
          </Box>
        </Stack>
      )}
    </Stack>
  );
}

export default LandingHeader;

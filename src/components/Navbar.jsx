"use client";
import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Collapse,
  useTheme,
  useMediaQuery,
  Box,
  Stack,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PlusIcon from "../assets/icons/call.svg";
import { mont } from "@/theme";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import NavbarButton from "@/ui/NavbarButton";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };



  const pathname = usePathname();
  const router = useRouter();

  const isTransparent = pathname === "/" || pathname.startsWith("/blog/");
  const isThankPage = pathname === "/thank";


  return (
    <AppBar
      position="absolute"
      style={{
        backgroundColor: isThankPage
          ? "#fff" 
          : mobileMenuOpen && isTransparent
          ? "#fff"
          : mobileMenuOpen
          ? "#000000"
          : isTransparent
          ? "transparent"
          : "#00000033",
        color:
          mobileMenuOpen && isTransparent
            ? "#000"
            : mobileMenuOpen
            ? "#fff"
            : isTransparent
            ? "#000"
            : "#fff",
        height: isMobile ? (mobileMenuOpen ? "auto" : "64px") : "",
      }}
    >
      <Toolbar>
        <Box display="flex" flexDirection="column" width="100%" p={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <img
              src="/main_logo.png"
              alt="Logo"
              width={isMobile ? "130px" : "168px"}
              height={"auto"}
            />
            {!isMobile && (
              <Stack direction={"row"} spacing={2}>
                <Link
                  href={`tel:${7666666559}`}
                  passHref
                  target="_blank"
                  style={{ textDecorationLine: "none" }}
                >
                  <NavbarButton
                    icon={PlusIcon}
                    buttonText="Customer care"
                    alternateText="7-666-666-559"
                    width={"210px"}
                  />
                </Link>
               
              </Stack>
            )}

            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMobileMenuToggle}
              >
                <MenuIcon color="primary" />
              </IconButton>
            )}
          </Box>
          {isMobile ? (
            <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
              <Box
                mt={2}
                width="100%"
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection={"column"}
              >
            
                <Stack spacing={2} mt={2} width={"230px"}>
                  <Link
                    href={`tel:${7666666559}`}
                    passHref
                    target="_blank"
                    style={{ textDecorationLine: "none", width: "100%" }}
                  >
                    <NavbarButton
                      icon={PlusIcon}
                      buttonText="Customer care"
                      alternateText="7-666-666-559"
                      width={"100%"}
                    />
                  </Link>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => router.push("/get-the-app")}
                  >
                    Get the App
                  </Button>{" "}
                </Stack>
              </Box>
            </Collapse>
          ) : (
            <Stack
              alignItems="center"
              direction={"row"}
              justifyContent={"center"}
              spacing={4}
            >
            
            </Stack>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

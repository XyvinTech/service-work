"use client";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: 122px;
  height: auto;
  object-fit: cover;
  border: 1px solid rgba(238, 231, 231, 0.9);
  border-radius: 4px;
  @media (max-width: 768px) {
    width: 60px;
    height: auto;
  }
`;

const Title = styled(Typography)`
  margin-top: 10px;
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #66574C;
`;

const LandingService = ({ images }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      paddingTop={isMobile ? 10 : 10}
      marginTop={isMobile ? 5 : 10}
      bgcolor={"#FEEFE4"}
      paddingBottom={10}
    >
      <Grid
        container
        spacing={isMobile ? 2 : 4}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {images.map((image, index) => (
          <Grid
            item
            xs={4}
            sm={6}
            md={2}
            key={index}
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <StyledImg src={image.url} alt={`img${index}`} />
            <Title>{image.title}</Title>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LandingService;

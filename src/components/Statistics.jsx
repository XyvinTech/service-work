"use client";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { mont } from "@/theme";
import { useEffect, useState } from "react";
import axios from "axios";
import dummyData from "@/assets/json/DummyData";

const Statistics = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get("https://theworko.in/admin/tcapi_v1/website_dummy_data.php");
        // console.log("response", response.data.data);
        setData(dummyData);
        console.log("response", data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();

  
  }, [dummyData]);

  console.log("response", data);
  const statistics = [
    { label: "Workers on Duty", value: 5749 },
    { label: "Jobs Completed", value: 44500 },
    { label: "Locations", value: 8},
    { label: "Happy Customers", value:39800 },
  ];

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" height={isMobile ? "237px" : "0px"}>
      {statistics.map((stat, index) => (
        <Grid item xs={isMobile ? 6 : 3} textAlign="center" key={index}>
          <Typography
            fontSize={isMobile ? "32px" :isTablet?"40px": "62px"}
            fontWeight={"700"}
            color={"#FC8229"}
            fontFamily={mont.style.fontFamily}
          >
           {stat.value}+
          </Typography>
          <Typography
            fontWeight={"500"}
            fontSize={isMobile ? "12px" :isTablet?"10px": "20px"}
            fontFamily={mont.style.fontFamily}
          >
            {stat.label}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Statistics;

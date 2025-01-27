import { Box, Typography } from "@mui/material";
import React from "react";
import SwiperCards from "./SwiperCards";
import { Swiper, SwiperSlide } from 'swiper/react';
import CenterTitile from "../CenterTitile";

// Import Swiper styles



function CarouselCard() {
  return (
    <Box sx={{ width: "100%", marginTop: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
       <CenterTitile  titile={'Lawfrim'} heading={'splaized laywers around the clock'}/>
      </Box>
    </Box>
  );
}

export default CarouselCard;

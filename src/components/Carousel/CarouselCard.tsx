
import { Box, Typography } from "@mui/material";
import React from "react";
import SwiperCards from "./SwiperCards";
import CenterTitile from "../CenterTitile";

// Import Swiper styles



function CarouselCard() {
  return (
    <Box sx={{ width: "100%", marginTop: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CenterTitile titile={'Lawfrim'} heading={'splaized laywers around the clock'} />
      </Box>
      <SwiperCards />

    </Box>
  );
}

export default CarouselCard;

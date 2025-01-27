import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";


function SwiperCards() {
  return (
    <Card>
      <Box sx={{ backgroundColor: "red", width: "16%",display:"flex",flexDirection:'column',gap:1,alignItems:'center' }}>
        <Box>
          <ChangeCircleIcon />
        </Box>
        <Typography>sales for Law</Typography>
        <Typography sx={{textAlign:"center"}}>
          i provide specialized legal Consultation in the field of companies
        </Typography>
      </Box>
      
    </Card>
  );
}

export default SwiperCards;

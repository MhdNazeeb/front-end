import { Box, Card, Typography } from "@mui/material";
import React from "react";
import blog from "../../assets/images/blog.webp";
import palette from "../../theme/palette";
import typography from "../../theme/typography";

function BolgCards() {
  return (
    <Card sx={{ maxWidth:{xs:"100%"}, padding: 2}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={blog}
          alt="flag"
          width={350}
          height={200}
          style={{ borderRadius: 5 }}
        />
      </Box>
      <Typography sx={{ marginLeft: 2, marginTop: 2 ,font:5}}>
        june,23,2024 
        </Typography>

      <Box>

      </Box>
      <Box sx={{ width: 250, marginLeft: 2 ,marginTop:2}}>
        <Typography sx={typography.h1}>
          Avoid Trouble: Common Legal Mistake to Keep Away
        </Typography>
      </Box>
      <Box sx={{ width: 350, marginLeft: 2,marginTop:2 }}>
        <Typography sx={typography.discription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Typography>
      </Box>
    </Card>
  );
}

export default BolgCards;

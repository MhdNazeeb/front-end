import { Box, Typography } from "@mui/material";
import React from "react";
import CenterTitile from "../CenterTitile";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function Questions() {
  return (
    <Box>
      <CenterTitile titile={"FAQ"} heading={"Frequently Asked Questions"} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ width: "80%" }}>
          <Box
            sx={{
              margin: "auto",
              paddingY: 3,
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
              },
              gap: 2,
            }}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <Box
              data-aos="zoom-out-left"
                key={index}
                sx={{
                  height: 50,
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: 2,
                  boxShadow: 1,
                  paddingX: 2,
                }}
              >
                <Typography>What service does offfer</Typography>
                <ArrowDownwardIcon />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Questions;

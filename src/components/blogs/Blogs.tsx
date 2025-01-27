import { Box, Typography } from "@mui/material";
import React from "react";
import ViewAll from "../ViewAll";
import BolgCards from "./BolgCards";
import palette from "../../theme/palette";

function Blogs() {
  return (
    <Box sx={{ marginTop: 5 }}>
      <ViewAll heading="Community" titile="Naseh legal Blog" view="Blogs" />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(3, 1fr)", 
        },
        gap: 2, 
        width: "80%",
        margin: "auto",
        paddingY: 3,
      }}
    >
      {Array.from(Array(3)).map((_, index) => (
        <BolgCards  />
      ))}
    </Box>
      </Box>
    </Box>
  );
}

export default Blogs;

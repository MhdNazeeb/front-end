import { Box, Button, Card, Grid2, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import grapgh from "../../assets/images/grapgh.png";
import palette from "../../theme/palette";

function JoinComponent() {
  return (
    <Box
      sx={{
        backgroundColor: palette.secondary.main,
        display: "flex",
        justifyContent: "center",
        gap: 2,
        paddingY: 5,
      }}
    >
      <Card
        sx={{
          width: "20%",
          height: 250,
          backgroundColor: palette.secondary.main,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          border: "2px solid gray",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          alignItems: "center",
        }}
      >
        <Box>
          <img src={grapgh} alt="flag" width={"60%"} height={"60%"} />
        </Box>
      </Card>
      <Box
        sx={{
          width: "55%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ width: "60%" }}>
          <Typography>Join as a lawyer</Typography>
          <Typography>Join as a lawyer</Typography>

          <Typography>
            Become a part of our professional legal network and offer your
            expertise to clients in need. As a lawyer, you will have the
            opportunity to represent individuals, provide legal advice{" "}
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              flexDirection: "row",
            }}
          >
            {Array.from(Array(4)).map((_, index) => (
              <Button
                sx={{ paddingX: { sm: 10, xs: 4,md:13 }, display: "flex", gap: 1 }}
                variant="contained"
              >
                <CheckCircleIcon />
                Contained
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={{ marginTop: 2 }}>
          <Button sx={{ paddingX: 4 }} variant="contained">
            Contained
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default JoinComponent;

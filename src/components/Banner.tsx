import { Box, Button, Typography } from "@mui/material";
import React from "react";
import strings from "../common/string";
import palette from "../theme/palette";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import BookIcon from "@mui/icons-material/Book";

function Banner() {
  return (
    <Box
      sx={{
        minHeight: { xs: "80%", sm: "70%", md: "90%" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: "url(/assets/images/banner.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: palette.secondary.main,
        pt: 20,
        pb: 20,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
          padding: 4,
          borderBottom: "2px solid gray",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: palette.primary.main,
              fontSize: "1.5rem",
              display: "flex",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: 50,
                height: 50,
                borderRadius: 2,
                backgroundColor: "white",
                display: "flex",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AddIcCallIcon sx={{ color: "black" }} />
            </Box>
            <Typography>
              {strings.consulting}
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 8,
                  fontWeight: 10,
                }}
              >
                {strings.book}
              </Typography>
            </Typography>
          </Typography>
        </Box>

        <Typography
          sx={{ color: "yellow", fontSize: "1.5rem", display: "flex", gap: 2 }}
        >
          <Button
            variant="contained"
            size="small"
            sx={{ color: palette.primary.main, backgroundColor: "red" }}
          >
            <BookIcon />
            <p>Consult Now</p>
          </Button>
        </Typography>
      </Box>
      <Box sx={{ width: "80%", textAlign: "center" }}>
        <Typography sx={{ fontSize: 30, color: palette.primary.main }}>
          choose & filtter & schedule
        </Typography>
        <Box sx={{ flex: 1, justifyContent: "center", display: "flex" }}>
          <Typography
            sx={{
              width: "40%",
              fontSize: { xs: 5, md: 10 },
              color: palette.primary.main,
            }}
          >
            Easy access to your legal advice. choose,sort,and clearly define the
            font the best fits your schedule
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;

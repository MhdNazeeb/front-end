
import { Box, Button, Card, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import grapgh from "../../assets/images/grapgh.png";
import palette from "../../theme/palette";

function JoinComponent() {
  return (
    <Box
      sx={{
        backgroundColor: palette.secondary.main,
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, 
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 3, md: 2 },
        paddingY: 5,
        paddingX: { xs: 2, md: 0 }, 
      }}
    >
      <Card
        sx={{
          width: { xs: "100%", md: "20%" }, 
          height: { xs: 200, md: 250 }, 
          backgroundColor: palette.secondary.main,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid gray",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        data-aos="zoom-in-down"
      >
        <Box>
          <img
            src={grapgh}
            alt="flag"
            style={{ width: "100%", height: "100%", objectFit: "contain" }} 
          />
        </Box>
      </Card>

      <Box
        sx={{
          width: { xs: "100%", md: "55%" }, 
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          gap: { xs: 3, md: 2 }
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "60%" } }}>
          <Typography variant="h6" sx={{ fontWeight: "bold",color:palette.primary.main,fontSize:{xs:17,sm:25} }}>
            Join as a lawyer
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 ,color:palette.primary.main,fontSize:{xs:10,sm:13}}}>
            Become a part of our professional legal network and offer your
            expertise to clients in need. As a lawyer, you will have the
            opportunity to represent individuals, provide legal advice, and more.
          </Typography>
        </Box>

        {/* Buttons Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: { xs: "center", md: "flex-start" }, 
          }}
        >
          {Array.from(Array(4)).map((_, index) => (
            <Button
              key={index}
              sx={{
                paddingX: { xs: 4, sm: 10, md: 13 }, 
                display: "flex",
                gap: 1,
                flex: { xs: "1 1 45%", md: "none" }, 
              }}
              variant="contained"
              data-aos="zoom-in-up"
            >
              <CheckCircleIcon />
              Contained
            </Button>
          ))}
        </Box>

        {/* Single Button Section */}
        <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
          <Button sx={{ paddingX: 4 }} variant="contained">
            Contained
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default JoinComponent;
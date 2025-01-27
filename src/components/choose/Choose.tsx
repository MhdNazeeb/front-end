import { Box, Button, Typography } from "@mui/material";
import palette from "../../theme/palette";
import EmailIcon from "@mui/icons-material/Email";

import android from "../../assets/images/android.png";
import apple from "../../assets/images/apple.png";
import phone1 from "../../assets/images/phone1.jpeg";
import phone2 from "../../assets/images/phone2.jpeg";
import typography from "../../theme/typography";

function Choose() {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: palette.secondary.main,
          display: "flex",
          minHeight: 300,
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "80%" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            marginTop: 3,
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "30%" } }}>
            <Typography variant="h5" sx={{ fontWeight: "bold",color:palette.primary.main,fontSize:{xs:17,sm:25} }}>Why Choose Us?</Typography>
            <Typography sx={{ marginTop: 1 ,color:palette.primary.main, fontSize:{xs:7,sm:9}}}>
              We prioritize integrity, transparency, and expert guidance in all
              legal matters. Our team is dedicated to providing personalized
              solutions, ensuring compliance, and protecting your rights every
              step of the way.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <img src={android} alt="android" width={70} height={30} />
            <img src={apple} alt="apple" width={70} height={30} />
          </Box>
        </Box>
        <Box
          sx={{
            width: { xs: "90%", sm: "80%" },
            margin: "auto",
            paddingY: 3,
            display: "grid",
            position: "absolute",
            top: { xs: 200, sm: 90 },
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
            },
            gap: 2,
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Box
              key={index}
              sx={{
                height: { xs: 300, sm: 400 },
                backgroundColor: "primary.main",
                display: "flex",
                borderRadius: 2,
                boxShadow: 1,
                alignItems: "center",
                flexDirection: index === 1 ? "column-reverse" : "column",
                justifyContent: "space-between",
                padding: 2,
              }}
              data-aos="flip-down"
            >
              <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography variant="h6">
                  Here is The title of the features or service
                </Typography>
                <Typography sx={{ fontSize: 12, marginTop: 1 }}>
                  Here is The title of the features or service in the Here is
                  The title of the features or service in the Here is The title
                  of the features or service in the
                </Typography>
              </Box>
              <Box>
                {index === 1 ? (
                  <img src={phone1} alt="phone1" width={150} height={150} />
                ) : (
                  <img src={phone2} alt="phone2" width={150} height={150} />
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: { xs: "80%", sm: "30%",md:"16%" },
          display: "flex",
          justifyContent: "center",

          
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "80%" },
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            gap: { xs: 2, sm: 0 },
          }}
        >
          <Box>
            <Typography variant="h5">Newsletter</Typography>
            <Typography sx={typography.description}>
              Here is The title of the features or service in the Here is The
              title of the features or service in
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: { xs: "column", sm: "row" },
              position: "relative",
              backgroundColor: "white",
              borderRadius: 10,
              height: { xs: "auto", sm: 40 },
              width: { xs: "100%", sm: "60%" },
              paddingX: 2,
              paddingY: { xs: 2, sm: 0 },
              gap: { xs: 2, sm: 0 },
              top:{sm:20}
            }}
          >
            <EmailIcon sx={{ color: "black", flexShrink: 0 }} />
            <input
              type="text"
              placeholder="Enter your email"
              style={{
                flex: 1,
                height: "100%",
                border: "none",
                outline: "none",
                background: "transparent",
                color: "black",
                marginLeft: 10,
              }}
            />
            <Button
              variant="contained"
              sx={{
                marginLeft: { xs: 0, sm: 6 },
                borderRadius: 10,
                marginTop: { xs: 2, sm: 0 },
                alignSelf: { xs: "center", sm: "flex-start" },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Choose;
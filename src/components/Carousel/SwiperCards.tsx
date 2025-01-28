import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
  Button,
  Avatar,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
const LawFirmSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const firms = [
    {
      name: "Al Ansari Law Firm",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies",
      experience: "10-15",
      languages: "Arabic & English",
    },
    {
      name: "Dawi Law Firm",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies",
      experience: "10-15",
      languages: "Arabic & English",
    },
    {
      name: "Saleh For Law",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies",
      experience: "10-15",
      languages: "Arabic & English",
    },
    {
      name: "Dunne Law Pllc",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies",
      experience: "10-15",
      languages: "Arabic & English",
    },
    {
      name: "Al Ansari Law Firm",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies",
      experience: "10-15",
      languages: "Arabic & English",
    },
    {
      name: "Dawi Law Firm",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies",
      experience: "10-15",
      languages: "Arabic & English",
    },
    {
      name: "Saleh For Law",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies",
      experience: "10-15",
      languages: "Arabic & English",
    },
    {
      name: "Dunne Law Pllc",
      description:
        "I Provide Specialized Legal Consultations In The Field Of Companies",
      experience: "10-15",
      languages: "Arabic & English",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? firms.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === firms.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        padding: "32px",
        bgcolor: "grey.50",
        overflow: "hidden",
      }}
    >
      {/* Slider Container */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
          transform: `translateX(-${currentIndex * 320}px)`, // Adjust based on card width + gap
          transition: "transform 0.5s ease",
          width: "max-content", // Ensure the container fits all cards
          position: "relative",
          px: 5,
        }}
      >
        {firms.map((val) => (
          <Card
            sx={{
              maxWidth: 345,
              bgcolor: "background.paper",
              p: 3,
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            {/* Logo Section */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                borderBottom: "2px solid gray", 

              }}
            >
              <Box sx={{ mb: 2 }}>
                <Avatar sx={{ bgcolor: "common.black", width: 48, height: 48 }}>
                  <Box
                    sx={{
                      width: 16,
                      height: 16,
                      bgcolor: "success.main",
                      borderRadius: 0.5,
                    }}
                  />
                </Avatar>
              </Box>

              {/* Title Section */}
              <CardContent sx={{ p: 0 }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "medium", mb: 1, textAlign: "center" }}
                >
                  {val?.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, textAlign: "center" }}
                >
                  {val?.description}
                </Typography>
              </CardContent>
            </Box>
            {/* Info Section */}
            <Box sx={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <LanguageIcon sx={{ fontSize: 16 }} />
              <Box>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:12}}>
                {val?.languages}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:12}}>
                {"spoken language"}
              </Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1,justifyContent:"center" }}>
              <AccessTimeIcon sx={{ fontSize: 16 }} />

                <Box>
                <Typography variant="body2" color="text.secondary"  sx={{ fontSize: 12 }}>
                {"years of Experience"}
                </Typography>
                <Typography variant="body2" color="text.secondary"  sx={{ fontSize: 12 }}>
                {val?.experience}
                </Typography>
                </Box>
              </Box>
              
            </Box>
            </Box>
            {/* Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "common.black",
                color: "common.white",
                "&:hover": { bgcolor: "grey.800" },
              }}
            >
              View Profile
            </Button>
          </Card>
        ))}
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          bgcolor: "white",
          boxShadow: 2,
          "&:hover": { bgcolor: "grey.100" },
          width: 40,
          height: 40,
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 16,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 2,
          bgcolor: "white",
          boxShadow: 2,
          "&:hover": { bgcolor: "grey.100" },
          width: 40,
          height: 40,
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* Dots Indicator */}
      <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 4 }}>
        {firms.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              bgcolor: index === currentIndex ? "#0A2756" : "grey.300",
              transition: "background-color 0.2s",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default LawFirmSwiper;

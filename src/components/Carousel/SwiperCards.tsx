import  { useState } from 'react';
import { Box, Card, CardContent, Typography, IconButton, Stack } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight, AccessTime, Language } from '@mui/icons-material';

const LawFirmSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const firms = [
    {
      name: 'Al Ansari Law Firm',
      description: 'I Provide Specialized Legal Consultations In The Field Of Companies',
      experience: '10-15',
      languages: 'Arabic & English',
    },
    {
      name: 'Dawi Law Firm',
      description: 'I Provide Specialized Legal Consultations In The Field Of Companies',
      experience: '10-15',
      languages: 'Arabic & English',
    },
    {
      name: 'Saleh For Law',
      description: 'I Provide Specialized Legal Consultations In The Field Of Companies',
      experience: '10-15',
      languages: 'Arabic & English',
    },
    {
      name: 'Dunne Law Pllc',
      description: 'I Provide Specialized Legal Consultations In The Field Of Companies',
      experience: '10-15',
      languages: 'Arabic & English',
    },
    {
      name: 'Al Ansari Law Firm',
      description: 'I Provide Specialized Legal Consultations In The Field Of Companies',
      experience: '10-15',
      languages: 'Arabic & English',
    },
    {
      name: 'Dawi Law Firm',
      description: 'I Provide Specialized Legal Consultations In The Field Of Companies',
      experience: '10-15',
      languages: 'Arabic & English',
    },
    {
      name: 'Saleh For Law',
      description: 'I Provide Specialized Legal Consultations In The Field Of Companies',
      experience: '10-15',
      languages: 'Arabic & English',
    },
    {
      name: 'Dunne Law Pllc',
      description: 'I Provide Specialized Legal Consultations In The Field Of Companies',
      experience: '10-15',
      languages: 'Arabic & English',
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? firms.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === firms.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      padding: '32px',
      bgcolor: 'grey.50',
      overflow: 'hidden'
    }}>
      {/* Slider Container */}
      <Box sx={{ 
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        transform: `translateX(-${currentIndex * 320}px)`, // Adjust based on card width + gap
        transition: 'transform 0.5s ease',
        width: 'max-content', // Ensure the container fits all cards
        position: 'relative',
        px: 5
      }}>
        {firms.map((firm, index) => (
          <Card 
            key={index}
            sx={{
              minWidth: 280,
              maxWidth: 280,
              boxShadow: 3,
              borderRadius: 2,
              flex: '0 0 auto',
              bgcolor: 'white'
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Stack spacing={2}>
                {/* Law Firm Name */}
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#0A2756',
                    fontWeight: 600,
                    mb: 1
                  }}
                >
                  {firm.name}
                </Typography>

                {/* Description */}
                <Typography 
                  variant="body2" 
                  sx={{ color: 'text.secondary', mb: 2 }}
                >
                  {firm.description}
                </Typography>

                {/* Experience and Languages */}
                <Stack 
                  direction="row" 
                  spacing={3} 
                  sx={{ width: '100%', mb: 2 }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AccessTime sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {firm.experience} years
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Language sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {firm.languages}
                    </Typography>
                  </Stack>
                </Stack>

                {/* View Profile Button */}
                <Box 
                  component="button"
                  sx={{
                    width: '100%',
                    py: 1.5,
                    bgcolor: '#0A2756',
                    color: 'white',
                    border: 'none',
                    borderRadius: 1,
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: '#0A2756',
                      opacity: 0.9
                    }
                  }}
                >
                  View Profile
                </Box>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Navigation Arrows */}
      <IconButton 
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          left: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          bgcolor: 'white',
          boxShadow: 2,
          '&:hover': { bgcolor: 'grey.100' },
          width: 40,
          height: 40
        }}
      >
        <KeyboardArrowLeft />
      </IconButton>

      <IconButton 
        onClick={handleNext}
        sx={{
          position: 'absolute',
          right: 16,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          bgcolor: 'white',
          boxShadow: 2,
          '&:hover': { bgcolor: 'grey.100' },
          width: 40,
          height: 40
        }}
      >
        <KeyboardArrowRight />
      </IconButton>

      {/* Dots Indicator */}
      <Stack 
        direction="row" 
        spacing={1} 
        justifyContent="center" 
        sx={{ mt: 4 }}
      >
        {firms.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: index === currentIndex ? '#0A2756' : 'grey.300',
              transition: 'background-color 0.2s'
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default LawFirmSwiper;
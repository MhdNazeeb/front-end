import { Box, Typography } from '@mui/material'
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Services() {
  return (
    <Box sx={{width:"80%"  }}>
         <Typography>
            <Box sx={{width:"20%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} >
                <CheckCircleIcon />
            </Box>
            <Box sx={{width:"20%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <Typography>
                CONTENT HEADER
              </Typography>
            </Box>
            <Box sx={{width:"20%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:'center'}}>
              <Typography>
                fdgvsdfgsfdgv frgergfvcs fdgrtsg fgstwertg 
              </Typography>
            </Box>
         </Typography>
        </Box>
  )
}

export default Services
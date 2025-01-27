import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import typography from '../theme/typography';


interface ViewAllProps {
    heading:string,
    titile:string,
    view:string
}
function ViewAll({heading,titile,view}: ViewAllProps) {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center",marginTop:1 }}>
    <Box
      sx={{
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography sx={typography.title}>{heading}</Typography>
        <Typography sx={typography.description}>{titile}</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Typography>View All {view}</Typography>
        <ArrowRightAltIcon />
      </Box>
    </Box>
  </Box>
  )
}

export default ViewAll
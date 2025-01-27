import { Box, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";


interface ViewAllProps {
    heading:string,
    titile:string,
    view:string
}
function ViewAll({heading,titile,view}: ViewAllProps) {
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
    <Box
      sx={{
        width: "80%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography>{heading}</Typography>
        <Typography>{titile}</Typography>
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
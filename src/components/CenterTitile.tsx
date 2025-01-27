import { Box, Typography } from '@mui/material'
import React from 'react'
interface CenterTitile{
    titile:string,
    heading:string
}
function CenterTitile({titile,heading}:CenterTitile) {
  return ( 
  <Box>
    <Typography sx={{ textAlign: "center" }}>{titile}</Typography>
    <Typography sx={{ textAlign: "center" }}>
      {heading}
    </Typography>
  </Box>

  )
}

export default CenterTitile
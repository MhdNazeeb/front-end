import { Box, Typography } from '@mui/material'
import React from 'react'
import { ServiceOption, services } from '../../common/constens'
import Services from './Services'

function Service() {
  return (
    <Box       data-aos="fade-left"
    sx={{display:"flex",justifyContent:"space-evenly" ,flexWrap:"wrap",paddingBottom:10,gap:{xs:2,md:1}}}>
       {services.map((item:ServiceOption)=>(
        <Services item={item} />
       ))}
    </Box>
  )
}

export default Service

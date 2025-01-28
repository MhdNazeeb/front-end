import { Box } from '@mui/material'
import { ServiceOption, services } from '../../common/constens'
import Services from './Services'

function Service() {
  return (
    <Box       data-aos="fade-left"
    sx={{display:"flex",justifyContent:"space-evenly" ,marginTop:4,flexWrap:"wrap",paddingBottom:10,gap:{xs:2,md:1}}}>
       {services.map((item:ServiceOption)=>(
        <Services item={item} />
       ))}
    </Box>
  )
}

export default Service

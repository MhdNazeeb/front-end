import React from 'react'
import NaveBar from './naveBar/NaveBar'
import Banner from './Banner'
import Filter from './filter/Filter'
import { Box } from '@mui/material'
import Service from './service/Service'

function Home() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <NaveBar />
            <Banner />
            <div style={{ backgroundColor: "#F5FBFF",paddingBottom:5 }}>

                <Box >
                    <Filter />
                </Box>
                <Service />
            </div>
            


        </div>
    )
}

export default Home

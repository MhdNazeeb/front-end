import NaveBar from "./naveBar/NaveBar";
import Banner from "./Banner";
import Filter from "./filter/Filter";
import { Box } from "@mui/material";
import Service from "./service/Service";
import palette from "../theme/palette";
import MultiService from "./multiService/MultiService";
import CarouselCard from "./Carousel/CarouselCard";
import JoinComponent from "./Join/JoinComponent";
import Blogs from "./blogs/Blogs";
import Questions from "./questions/Questions";
import Choose from "./choose/Choose";
import Footer from "./footer/Footer";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: palette.primary.main,
        paddingBottom: 2,
        overflowX:"hidden"
      }}
    >
      <NaveBar />
      <Banner />
      <div style={{ backgroundColor: "#F5FBFF", paddingBottom: 5 }}>
        <Box>
          <Filter />
        </Box>
        <Service />
        <div style={{position:"relative"}}>
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          position:{xs:"fixed",sm:"absolute"},
          zIndex:1,
          top:{md:100,xs:400,sm:200},
          left:{sm:20},
          right:{xs:15,sm:0},
        }}
      >
        <WhatsAppIcon />
        <SupportAgentIcon />
      </Box>
      </div>
      </div>
      <div style={{ backgroundColor: "#F5FBFF" }}>
        <MultiService />
        <CarouselCard />
        <JoinComponent />
        <Blogs />
        <Questions />
        <Choose /> 
        <Footer />
      </div>

    </div>
  );
}

export default Home;

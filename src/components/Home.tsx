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

function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: palette.primary.main,
        paddingBottom: 2,
      }}
    >
      <NaveBar />
      <Banner />
      <div style={{ backgroundColor: "#F5FBFF", paddingBottom: 5 }}>
        <Box>
          <Filter />
        </Box>
        <Service />
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

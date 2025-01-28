import { Box, Card, Typography } from "@mui/material";
import blog from "../../assets/images/blog.webp";
import typography from "../../theme/typography";

function BolgCards() {
  return (
    <Card 
    data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"
    sx={{ maxWidth:{xs:"100%"}, padding: 2}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={blog}
          alt="flag"
          width={350}
          height={200}
          style={{ borderRadius: 5 }}
        />
      </Box>
      <Typography sx={{ marginLeft: 2, marginTop: 2 ,...typography.title}}>
        june,23,2024 
        </Typography>

      <Box>

      </Box>
      <Box sx={{ width: 250, marginLeft: 2 ,marginTop:2}}>
        <Typography sx={typography.title.sm}>
          Avoid Trouble: Common Legal Mistake to Keep Away
        </Typography>
      </Box>
      <Box sx={{ width: {md:300,xs:200}, marginLeft: 2,marginTop:2 }}>
        <Typography sx={typography.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Typography>
      </Box>
    </Card>
  );
}

export default BolgCards;

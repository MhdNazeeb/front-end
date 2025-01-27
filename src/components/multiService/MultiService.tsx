import { Box, Typography } from "@mui/material";
import { consultations } from "../../common/constens";
import { MultiServices } from "./MultiServices";
import ViewAll from "../ViewAll";

const Services = () => {
  return (
    <Box sx={{ marginTop: 5 }}>
      {/* Header */}
       <ViewAll heading={'Services'} titile={'A wide range of legal services'} view={"Services"} />

      {/* Responsive Grid */}
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "80%",
            marginTop: { sm: 7 },
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 2,
          }}
        >
          {consultations.map((item) => (
            <MultiServices item={item} key={item.key} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Services;

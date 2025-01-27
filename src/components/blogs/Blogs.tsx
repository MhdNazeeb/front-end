import { Box,  } from "@mui/material";
import ViewAll from "../ViewAll";
import BolgCards from "./BolgCards";

function Blogs() {
  return (
    <Box sx={{ marginTop: 5 }}>
      <ViewAll heading="Community" titile="Naseh legal Blog" view="Blogs" />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr", 
          sm: "repeat(2, 1fr)", 
          md: "repeat(3, 1fr)", 
        },
        gap: 2, 
        width: "80%",
        margin: "auto",
        paddingY: 3,
      }}
    >
      {Array.from(Array(3)).map((_, ) => (
        <BolgCards  />
      ))}
    </Box>
      </Box>
    </Box>
  );
}

export default Blogs;

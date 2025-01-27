import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface FilterCategoryProps {
  item: {
    key: number;
    name: string;
    description: string;
  };
}
function Services({ item }: FilterCategoryProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width:{md:"18%"}
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CheckCircleIcon />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>{item?.name}</Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
        }}
      >
        <Typography sx={{ fontSize: 10, fontWeight: 3, textAlign: "center" }}>
          {item?.description}
        </Typography>
      </Box>
    </Box>
  );
}

export default Services;

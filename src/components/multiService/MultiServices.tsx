import { Box, Button, Card, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import palette from "../../theme/palette";

interface ServiceCategoryProps {
  item: {
    key: number;
    name: string;
    description: string;
  };
}

export function MultiServices({ item }: ServiceCategoryProps) {
  return (
    <Card
      key={item?.key}
      sx={{
        padding: 2,
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: 200,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 1,
            backgroundColor: "#BFCCDD",
            borderRadius: 2,
          }}
        >
          <BookIcon />
        </Box>
        <Box sx={{ padding: 1 }}>
          <Typography>{"Service Description"}</Typography>

          <Typography>{item?.description || "Service Description"}</Typography>
        </Box>
      </Box>
      <Button
        variant="contained"
        size="small"
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          backgroundColor:
            item?.key === 1 || item?.key === 2 ? "#050a30" : "#BFCCDD",
        }}
      >
        <BookIcon sx={{color:palette.primary.main}} />
        <Typography sx={{color:palette.primary.main}}>{item?.name}</Typography>
      </Button>
    </Card>
  );
}

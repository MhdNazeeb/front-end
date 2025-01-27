import { Box, Button, Card, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import palette from "../../theme/palette";
import typography from "../../theme/typography";

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
    data-aos="flip-left"

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

          <Typography sx={{fontSize:{xs:10,sm:14}}} >{item?.description || "Service Description"}</Typography>
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
        <Typography sx={{color:palette.primary.main,fontSize:typography.description}}>{item?.name}</Typography>
      </Button>
    </Card>
  );
}

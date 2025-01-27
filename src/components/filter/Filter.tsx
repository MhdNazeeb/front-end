import { Box, Button, Typography } from "@mui/material";
import {
  filtering,
  FilterOption,
} from "../../common/constens";
import FilterCategory from "./FilterCategory";
import palette from "../../theme/palette";
import BookOnlineOutlinedIcon from "@mui/icons-material/BookOnlineOutlined";

function Filter() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        bottom: 140,
        borderRadius: 5,
      }}
    >
      <Box
        sx={{
          backgroundColor: palette.primary.main,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { md: 3, xs: 3 },
          height: { md: 200 },
          paddingY: { xs: 10, md: 3 },
          minWidth: { sm: "80%", xs: "50%" },
        }}
      >
        {filtering.map((val: FilterOption) => (
          <FilterCategory item={val} />
        ))}
      </Box>
      <Box sx={{ position: "absolute", bottom: 10 }}>
        <Button variant="contained" sx={{ display: "flex", gap: 2 }}>
          <Typography>
            <BookOnlineOutlinedIcon />
          </Typography>
          <Typography>book a consilation</Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default Filter;

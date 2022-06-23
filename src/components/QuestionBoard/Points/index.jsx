import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Points = () => {
  const points = useSelector((st) => st.points);
  return (
    <Box margin={"30px"}>
      <Typography variant="h5" color="white">
        Points:{points.value}
      </Typography>
    </Box>
  );
};
export default Points;

import { Box, Button, CircularProgress, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import UndoIcon from "@mui/icons-material/Undo";
import LinearProgressBar from "./LinearProgressBar/LinearProgress";
export default function IndexQuestionsBoard({
  element,
  handleNext,
  points,
  handlePrev,
  loading,
}) {
  const CustomArrowButton = ({ val, handler }) => (
    <Box
      height={"100%"}
      display="flex"
      justifyContent="center"
      alignItems={"center"}
    >
      <Button sx={{ height: "min-content" }} onClick={handler}>
        <Typography variant="h5">{val}</Typography>
      </Button>
    </Box>
  );
  const CustomLoading = () => {
    return (
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent="center"
        width={"400px"}
        height="200px"
      >
        <CircularProgress size={"100px"} />
      </Box>
    );
  };
  const stylesBox = {
    height: "100vh",
    padding: "0",
    margin: "0",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <Box {...stylesBox}>
      <Box display={"flex"}>
        <CustomArrowButton
          val={<UndoIcon fontSize="large" />}
          handler={handlePrev}
        />
        {element && element}
        {loading && <CustomLoading />}
        <CustomArrowButton
          val={<ArrowForwardIosIcon fontSize="large" />}
          handler={handleNext}
        />
      </Box>
      <Box margin={"30px"}>
        <Typography variant="h5" color="white">
          Points: {points}
        </Typography>
      </Box>
    </Box>
  );
}

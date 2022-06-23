import { Box } from "@mui/system";
import { CustomArrowButton, CustomLoading, stylesBox } from "./helper";
import Points from "./Points";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import UndoIcon from "@mui/icons-material/Undo";

export default function IndexQuestionsBoard({ handleNext, data, element }) {
  return (
    <Box {...stylesBox}>
      <Box display={"flex"}>
        <CustomArrowButton val={<UndoIcon fontSize="large" />} />
        {element}
        {!data && <CustomLoading />}
        <CustomArrowButton
          val={<ArrowForwardIosIcon fontSize="large" />}
          handler={handleNext}
        />
      </Box>
      <Points />
    </Box>
  );
}

import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CustomButtonWidth, styles } from "./helper";
import Input from "./Input/Input";
import LinearProgressBar from "../../QuestionBoard/LinearProgressBar/LinearProgress";
import CustomLinearProgress from "../../QuestionBoard/LinearProgressBar/Linear";
import { nanoid } from "nanoid";
import AnswersLayout from "./AnswersLayout";
const OptionsLayout = ({
  items,
  title,
  isConfig = false,
  correct_answer,
  handleNext,
  controls,
  addPoint,
}) => {
  const GRID_ITEMS =
    items.length > 0 ? (
      <AnswersLayout
        addPoint={addPoint}
        handleNext={handleNext}
        items={items}
        correct_answer={correct_answer}
        isConfig={isConfig}
        controls={controls}
      />
    ) : (
      <Input handleNext={handleNext} />
    );
  return (
    <Container sx={styles}>
      <Box textAlign="center">
        <Typography variant="h5" component="h1" color="white" mb="40px">
          {title}
        </Typography>
      </Box>
      <Box>
        {!isConfig && (
          <Box width="100%">
            <CustomLinearProgress controls={controls} />
          </Box>
        )}
        <Grid container spacing={{ xs: 2, md: 10 }}>
          {GRID_ITEMS}
        </Grid>
      </Box>
    </Container>
  );
};

export default OptionsLayout;

import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styles } from "./helper";
import Input from "./Input/Input";
import CustomLinearProgress from "../../QuestionBoard/LinearProgressBar/Linear";
import AnswersLayout from "./AnswersLayout";
import HTMLReactParser from "html-react-parser";
const OptionsLayout = ({
  items,
  title,
  isConfig = false,
  correct_answer,
  handleNext,
  controls,
}) => {
  const GRID_ITEMS =
    items.length > 0 ? (
      <AnswersLayout
        handleNext={isConfig && handleNext}
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
      {!isConfig && (
        <Box width="100vw" position={"absolute"} top={"0"}>
          <CustomLinearProgress
            nextStep={!isConfig && handleNext}
            controls={controls}
          />
        </Box>
      )}
      <Box textAlign="center">
        <Typography variant="h5" component="h1" color="white" m="40px 0">
          {HTMLReactParser(title)}
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={{ xs: 2, md: 6 }}>
          {GRID_ITEMS}
        </Grid>
      </Box>
    </Container>
  );
};

export default OptionsLayout;

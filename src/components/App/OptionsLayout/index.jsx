import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CustomButtonWidth, styles } from "./helper";
import Input from "./Input/Input";
import LinearProgressBar from "../../QuestionBoard/LinearProgressBar/LinearProgress";
import CustomLinearProgress from "../../QuestionBoard/LinearProgressBar/Linear";
const OptionsLayout = ({
  items,
  title,
  questionID,
  isConfig = false,
  alreadySelected,
  handler,
}) => {
  const COLUMNS_AMOUNT_DESKTOP =
    items.length % 2 === 0 ? (items.length > 10 ? 3 : 6) : 12;
  const COLUMNS_AMOUNT_MOBILE = 12;
  const GRID_ITEMS =
    items.length > 0 ? (
      items.map((item, i) => (
        <Grid
          item
          xs={COLUMNS_AMOUNT_MOBILE}
          md={COLUMNS_AMOUNT_DESKTOP}
          key={i}
        >
          <CustomButtonWidth
            disabled={alreadySelected && !item?.selected ? true : false}
            variant={
              isConfig
                ? "contained"
                : alreadySelected
                ? "contained"
                : "outlined"
            }
            color={
              alreadySelected
                ? item?.isCorrect
                  ? "success"
                  : "error"
                : "primary"
            }
            onClick={() =>
              item[1] ? handler(item[1]) : handler(questionID, item.id)
            }
          >
            {item[0] || item.value}
          </CustomButtonWidth>
        </Grid>
      ))
    ) : (
      <Input handleNext={handler} />
    );
  return (
    <Container sx={styles}>
      <Box textAlign="center">
        <Typography variant="h5" component="h1" color="white" mb="40px">
          {title}
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={{ xs: 2, md: 10 }}>
          {!isConfig && (
            <Box width="100%">
              <CustomLinearProgress />
            </Box>
          )}
          {GRID_ITEMS}
        </Grid>
      </Box>
    </Container>
  );
};

export default OptionsLayout;

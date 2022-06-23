import { Grid } from "@mui/material";
import { nanoid } from "nanoid";
import { CustomButtonWidth } from "../../helper";
import HTMLReactParser from "html-react-parser";

const AnswersButtons = ({
  show,
  handler,
  value,
  selected,
  isConfig,
  COLUMNS_AMOUNT_DESKTOP,
  COLUMNS_AMOUNT_MOBILE,
  isCorrect,
  search,
  id,
}) => {
  const DISABLED = true;
  const NOT_DISABLED = false;
  return (
    <Grid
      item
      xs={COLUMNS_AMOUNT_MOBILE}
      md={COLUMNS_AMOUNT_DESKTOP}
      key={nanoid()}
    >
      <CustomButtonWidth
        disabled={show && !selected ? DISABLED : NOT_DISABLED}
        variant={isConfig ? "contained" : show ? "contained" : "outlined"}
        color={show ? (isCorrect ? "success" : "error") : "primary"}
        onClick={() => (isConfig ? handler(search) : handler(id, value))}
      >
        {HTMLReactParser(value)}
      </CustomButtonWidth>
    </Grid>
  );
};
export default AnswersButtons;

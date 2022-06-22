import { Grid } from "@mui/material";
import { Input } from "@mui/material";
import { CustomButtonWidth } from "../helper";

export default function IndexInput({
  handleNext,
  handleChange,
  CURRENT_VALUE,
  IS_EMPTY,
  DEFAULT,
}) {
  return (
    <Grid
      item
      xs={12}
      display="flex"
      flexDirection="column"
      gap="20px"
      alignContent="center"
    >
      <Input
        type="number"
        sx={{
          color: "white",
          width: "50%",
          scale: "2",
          alignSelf: "center",
        }}
        onChange={(e) => handleChange(e)}
      />
      <CustomButtonWidth
        onClick={() => handleNext(IS_EMPTY ? DEFAULT : CURRENT_VALUE)}
      >
        Send
      </CustomButtonWidth>
    </Grid>
  );
}

import { Grid } from "@mui/material";

const IndexApp = ({ step, elements }) => {
  const [Category, Amount, Difficulty, typeApi] = elements;
  return (
    <Grid
      height={step === 1 ? "" : "100vh"}
      padding="0"
      margin="0"
      justifyContent={"center"}
    >
      {step === 1 && Category}
      {step === 2 && Amount}
      {step === 3 && Difficulty}
      {step === 4 && typeApi}
    </Grid>
  );
};

export default IndexApp;

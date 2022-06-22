import { Box, Container } from "@mui/material";

const IndexApp = ({ step, elements }) => {
  const [Category, Amount, Difficulty, typeApi] = elements;
  return (
    <Box height="100vh" padding="0" margin="0">
      {step === 1 && Category}
      {step === 2 && Amount}
      {step === 3 && Difficulty}
      {step === 4 && typeApi}
    </Box>
  );
};

export default IndexApp;

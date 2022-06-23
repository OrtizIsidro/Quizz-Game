import { Box, Button, CircularProgress, Typography } from "@mui/material";

export function shuffle(array) {
  let newArray = [...array];
  let randomIndex;
  let currentIndex = array.length;
  for (currentIndex > 0; currentIndex--; ) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }
  return newArray;
}
export const stylesBox = {
  height: "100vh",
  padding: "0",
  margin: "0",
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
};
//sacar indices randoms y pasarlos al otro array, y el array actual debe ser eliminado
export const CustomArrowButton = ({ val, handler }) => (
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
export const CustomLoading = () => {
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

import { Typography, Box, Button } from "@mui/material";
import { useSelector } from "react-redux";

const IndexDashBoard = ({ restart }) => {
  const points = useSelector((st) => st.points);

  return (
    <Box
      height={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={5}
    >
      <Box>
        <Typography variant="h1" color={"primary"} fontFamily={"Secular One"}>
          GAME OVER
        </Typography>
      </Box>
      <Box>
        <Typography variant="h3" color={"white"}>
          Your Score was: "
          {
            <Typography
              variant="h3"
              color={
                points.value > 3
                  ? points.value > 7
                    ? "warning"
                    : "success"
                  : "error"
              }
              display={"inline-block"}
            >
              {points.value}
            </Typography>
          }
          "
        </Typography>
      </Box>

      <Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Button
            color={"warning"}
            variant={"outlined"}
            onClick={() => restart()}
          >
            <Typography variant="h5" fontFamily={"Secular One"}>
              Try Again
            </Typography>
          </Button>
          <Typography variant="h5" alignSelf={"center"} color={"white"}>
            or
          </Typography>
          <Button color={"warning"} variant={"outlined"}>
            <Typography variant="h5" fontFamily={"Secular One"}>
              POST
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default IndexDashBoard;

import { Button } from "@mui/material";

export const CustomButtonWidth = (props) => (
  <Button
    sx={{ width: "100%", padding: "10 20px" }}
    variant="contained"
    {...props}
  />
);
export const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
};

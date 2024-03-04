import React from "react";
import DisplayCam from "./pages/DisplayCam";
import DropCam from "./pages/DropCam";
import "./index.css";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

function App() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <Box
      className="App"
      sx={{
        background: "#273143 !important",
        height: matches ? "100vh" : "",
      }}
    >
      {/* <DisplayCam /> */}
      <DropCam />
    </Box>
  );
}

export default App;

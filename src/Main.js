import React from "react";
import DropCam from "./pages/DropCam";
import "./index.css";
import { Box, Paper, Typography } from "@mui/material";

function Main() {
  return (
    <>
      <Box className="App">
        <DropCam />
      </Box>
      <Paper
        elevation={3}
        sx={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          textAlign: "right",
        }}
      >
        <Typography variant="h6" sx={{ fontSize: "14px", fontWeight: "bold" }}>
          © 2024 Copyright{" "}
          <a
            style={{
              textDecoration: "none",
              color: "black",
              paddingRight: "5px",
            }}
            href="https://navajna.com/"
          >
            , Navajna Technologies. All rights reserved.
          </a>{" "}
        </Typography>
      </Paper>
    </>
  );
}

export default Main;

import React, { useEffect, useState } from "react";
import videoloss from "../images/videoloss.png";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import axios from "axios";
import nav from "../images/nav_fulllogo.png";
import totalCount from "../images/counter.png";
import entry from "../images/entry.png";
import exit from "../images/exit.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function DropCam() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const cardData = [
    {
      id: 0,
      image: entry,
      title: "Entry Count",
      count: 0,
    },
    {
      id: 1,
      image: exit,
      title: "Exit Count",
      count: 0,
    },
    {
      id: 2,
      image: totalCount,
      title: "Total Count",
      count: 0,
    },
  ];
  const camData = [
    {
      id: 0,
      image: videoloss,
      camUrl: "http://192.168.1.56:5000/video_feed/1",
      //   camUrl: videoloss,
      camName: "Camera 01",
    },
    {
      id: 1,
      image: videoloss,
      camUrl: "http://192.168.1.56:5000/video_feed/2",
      //   camUrl: videoloss,
      camName: "Camera 02",
    },
    {
      id: 2,
      image: videoloss,
      camUrl: videoloss,
      camName: "Camera 03",
    },
    {
      id: 3,
      image: videoloss,
      camUrl: "http://192.168.1.56:5000/video_feed/1",

      camName: "Camera 04",
    },
    {
      id: 4,
      image: videoloss,
      camUrl: videoloss,

      camName: "Camera 05",
    },
    {
      id: 5,
      image: videoloss,
      camUrl: "http://192.168.1.56:5000/video_feed/2",

      camName: "Camera 06",
    },
    {
      id: 6,
      image: videoloss,
      camUrl: videoloss,
      camName: "Camera 07",
    },
    {
      id: 7,
      image: videoloss,
      camUrl: videoloss,
      camName: "Camera 08",
    },
    {
      id: 8,
      image: videoloss,
      camUrl: videoloss,
      camName: "Camera 09",
    },
    {
      id: 9,
      image: videoloss,
      camUrl: videoloss,
      camName: "Camera 10",
    },
  ];
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));
  const [selectedCamera, setSelectedCamera] = useState(camData[0]);

  //   useEffect(() => {
  //     const url = "";
  //     axios.get("url");
  //   }, []);
  const handleImageError = () => {
    setIsError(true);
  };

  return (
    <Box>
      <Paper elevation={5} sx={{ p: 2, mb: 2 }}>
        <Box>
          <img src={nav} alt="nav_logo" width={100} />
        </Box>
      </Paper>
      {matches ? (
        <>
          <Grid container sx={{ px: 5, py: 3 }}>
            <Box
              sx={{
                display: matches ? "flex" : "",
                justifyContent: matches ? "center" : "",
                width: matches ? "100%" : "",
                py: 4,
                background: "#1b2531 !important",
              }}
            >
              <Grid
                item
                xs={12}
                xl={2}
                lg={3.5}
                sx={{
                  border: "2px solid #e4e6e9",
                  mr: matches ? 3 : 1,
                  ml: matches ? "" : 3,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bolder", p: 2, color: "#e4e6e9" }}
                >
                  Count Analytics
                </Typography>
                <Box>
                  {cardData.map((card) => {
                    return (
                      <Card
                        component={Paper}
                        elevation={5}
                        sx={{
                          p: 2,
                          my: 5,
                          mx: 2,
                          background: "#273143 !important",
                        }}
                        key={card?.id}
                      >
                        <img src={card?.image} alt={card?.title} width={60} />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "700",
                            color: "#fff",
                          }}
                        >
                          {card?.title} : <span>{card?.count}</span>
                        </Typography>
                      </Card>
                    );
                  })}
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                xl={4}
                lg={8}
                sx={{ border: "2px solid #e4e6e9" }}
              >
                <Card sx={{ background: "#273143 !important", color: "#fff" }}>
                  <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ pt: 2 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          textAlign: "left",
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        {selectedCamera.camName}
                      </Typography>
                    </Box>
                    <Box sx={{ pt: 2 }}>
                      <FormControl sx={{ width: "300px", color: "#fff" }}>
                        <InputLabel
                          id="camera-select-label"
                          sx={{ fontWeight: "bold", color: "#fff" }}
                        >
                          Select Camera
                        </InputLabel>
                        <Select
                          label="Select Camera"
                          labelId="camera-select-label"
                          id="camera-select"
                          value={selectedCamera.id}
                          onChange={(e) => {
                            const selectedCam = camData.find(
                              (cam) => cam.id === e.target.value
                            );
                            setSelectedCamera(selectedCam);
                          }}
                          sx={{
                            fontWeight: "bold",
                            borderColor: "#fff !important",
                            color: "#fff", // Set text color to white
                            "& fieldset": {
                              borderColor: "#fff !important", // Set border color for focused state
                            },
                            "&:hover fieldset": {
                              borderColor: "#fff !important", // Set border color for hover state
                            },
                            "& svg": {
                              color: "#fff !important", // Set icon color to white
                            },
                          }}
                        >
                          {camData.map((cam) => (
                            <MenuItem
                              key={cam.id}
                              value={cam.id}
                              sx={{
                                width: "300px",
                                fontWeight: "bold",
                              }}
                            >
                              {cam.camName}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </CardContent>

                  <Box>
                    {isError ? (
                      <img
                        src={videoloss}
                        alt="video feed"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : (
                      <img
                        src={selectedCamera.camUrl}
                        alt="video feed"
                        onError={handleImageError}
                      />
                    )}
                  </Box>
                </Card>
              </Grid>
            </Box>
          </Grid>
        </>
      ) : (
        <>
          <Box sx={{ background: "#1B2531 !important", mx: 2 }}>
            <Grid container sx={{ px: 5, py: 3 }}>
              <Grid
                item
                xs={12}
                xl={2}
                lg={3.5}
                sx={{
                  border: "2px solid #e4e6e9",
                  mr: matches ? 3 : 1,
                  ml: matches ? "" : 3,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bolder", p: 2, color: "#fff" }}
                >
                  Count Analytics
                </Typography>
                <Box>
                  {cardData.map((card) => {
                    return (
                      <Card
                        component={Paper}
                        elevation={5}
                        sx={{
                          p: 2,
                          my: 5,
                          mx: 2,
                          background: "#273143 !important",
                        }}
                        key={card?.id}
                      >
                        <img src={card?.image} alt={card?.title} width={60} />
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "700",
                            color: "#fff",
                          }}
                        >
                          {card?.title} : <span>{card?.count}</span>
                        </Typography>
                      </Card>
                    );
                  })}
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                xl={4}
                lg={8}
                sx={{ border: "2px solid #e4e6e9" }}
              >
                <Card sx={{ background: "#273143 !important", color: "#fff" }}>
                  <CardContent
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ pt: 2 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{
                          textAlign: "left",
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        {selectedCamera.camName}
                      </Typography>
                    </Box>
                    <Box sx={{ pt: 2 }}>
                      <FormControl sx={{ width: "300px", color: "#fff" }}>
                        <InputLabel
                          id="camera-select-label"
                          sx={{ fontWeight: "bold", color: "#fff" }}
                        >
                          Select Camera
                        </InputLabel>
                        <Select
                          label="Select Camera"
                          labelId="camera-select-label"
                          id="camera-select"
                          value={selectedCamera.id}
                          onChange={(e) => {
                            const selectedCam = camData.find(
                              (cam) => cam.id === e.target.value
                            );
                            setSelectedCamera(selectedCam);
                          }}
                          sx={{
                            fontWeight: "bold",
                            borderColor: "#fff !important",
                            color: "#fff", // Set text color to white
                            "& fieldset": {
                              borderColor: "#fff !important", // Set border color for focused state
                            },
                            "&:hover fieldset": {
                              borderColor: "#fff !important", // Set border color for hover state
                            },
                            "& svg": {
                              color: "#fff !important", // Set icon color to white
                            },
                          }}
                        >
                          {camData.map((cam) => (
                            <MenuItem
                              key={cam.id}
                              value={cam.id}
                              sx={{
                                width: "300px",
                                fontWeight: "bold",
                              }}
                            >
                              {cam.camName}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Box>
                  </CardContent>

                  <Box>
                    {isError ? (
                      <img
                        src={videoloss}
                        alt="video feed"
                        style={{
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    ) : (
                      <img
                        src={selectedCamera.camUrl}
                        alt="video feed"
                        onError={handleImageError}
                      />
                    )}
                  </Box>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </>
      )}

      <Paper
        elevation={3}
        sx={{
          position: matches ? "absolute" : "sticky",
          bottom: 0,
          width: "100%",
          py: 0.1,
          borderRadius: 0,
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
    </Box>
  );
}

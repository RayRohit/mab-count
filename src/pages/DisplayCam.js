import React, { useEffect, useState } from "react";
import videoloss from "../images/videoloss.png";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import axios from "axios";
import nav from "../images/nav_fulllogo.png";
import totalCount from "../images/counter.png";
import entry from "../images/entry.png";
import exit from "../images/exit.png";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function DisplayCam() {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("xl"));

  //   useEffect(() => {
  //     const url = "";
  //     axios.get("url");
  //   }, []);
  const handleImageError = () => {
    setIsError(true);
  };
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
      // camUrl: videoloss,
      camName: "Camera 01",
    },
    {
      id: 1,
      image: videoloss,
      camUrl: "http://192.168.1.56:5000/video_feed/2",
      // camUrl: videoloss,
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
      camUrl: videoloss,

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
      camUrl: videoloss,
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
  return (
    <Box>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Box>
          <img src={nav} alt="nav_logo" width={100} />
        </Box>
      </Paper>
      <Paper sx={{ p: 2, m: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bolder", p: 2 }}>
          Count Analytics
        </Typography>
        <Grid container spacing={2}>
          {cardData.map((card) => {
            return (
              <Grid item xs={12} xl={2} lg={3} key={card?.id}>
                <Card
                  component={Paper}
                  elevation={5}
                  sx={{ p: 2, m: 2, display: matches ? "flex" : "" }}
                >
                  <img src={card?.image} alt={card?.title} width={60} />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "700",
                      pt: matches ? 2 : "",
                      px: matches ? 5 : "",
                    }}
                  >
                    {card?.title} : <span>{card?.count}</span>
                  </Typography>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
      <Paper sx={{ m: 3 }}>
        <Box sx={{ p: 4 }}>
          <Typography variant="h4" sx={{ float: "left", fontWeight: "bolder" }}>
            Camera Details
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ px: 4, py: 3 }}>
          {camData.map((cam) => {
            return (
              <Grid item xs={12} lg={4} xl={2} key={cam.id}>
                <Card sx={{ maxWidth: 400 }} component={Paper} elevation={7}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      sx={{ textAlign: "left", fontWeight: 700 }}
                    >
                      {cam.camName}
                    </Typography>
                  </CardContent>

                  <Box>
                    {isError ? (
                      <CardMedia
                        sx={{ height: 220 }}
                        image={videoloss}
                        title="video feed"
                        onError={handleImageError}
                      />
                    ) : (
                      <>
                        <CardMedia
                          sx={{ height: 220 }}
                          image={cam?.camUrl}
                          title="video feed"
                          onError={handleImageError}
                        />
                        {/* <>
                        <img
                          src={cam?.camUrl}
                          width="100%"
                          height="280"
                          alt="video feed"
                          onError={handleImageError}
                        />
                      </> */}
                      </>
                    )}
                  </Box>
                  {/* <CardMedia
                  sx={{ height: 220 }}
                  image={cam.image}
                  title="CCTV Footage"
                /> */}
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
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

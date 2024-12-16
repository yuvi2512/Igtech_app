import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Typography,Button} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "200px",
  margin: theme.spacing(2),
}));

function Features() {
  const sections = [
    {
      image: "image1.jpg",
      title: "Section 1",
      description: "Lorem ipsum dolor sit amet...",
    },
  ];

  return (
    <Grid container spacing={5}>
      {/* Cards on the left (half screen) */}
      <Grid item xs={12} sm={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <StyledCard sx={{mt:10}}>
              <CardContent>
                <Typography variant="h3" align="center" color="orange" gutterBottom>
                  80k +
                </Typography>
                <Typography variant="body2" align="center">
                  We have more than students
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledCard>
              <CardContent>
                <Typography variant="h3" align="center" color="red" gutterBottom>
                  150+
                </Typography>
                <Typography variant="body2" align="center">
                  Free Online tutorial videos available
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} >
            <StyledCard sx={{mt:10}}>
              <CardContent>
                <Typography
                  variant="h3"
                  align="center"
                  color="pink"
                  gutterBottom
                >
                  90+
                </Typography>
                <Typography variant="body2" align="center">
                  Daily updated blog post maintain
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} sm={6} >
            <StyledCard>
              <CardContent>
                <Typography
                  variant="h3"
                  align="center"
                  color="purple"
                  gutterBottom
                >
                  & 3M
                </Typography>
                <Typography variant="body2" align="center">
                  Job posted everydays with qualificaitons
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="h4" gutterBottom color="orange">
          Core Features
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vehicula purus at mi aliquet, vel feugiat nisi cursus. Aenean euismod
          urna eget orci aliquet, sed iaculis neque auctor.
        </Typography>
        <Button variant="contained" sx={{mt:10}} color="alert">Explore Details</Button>
      </Grid>
    </Grid>
  );
}

export default Features;

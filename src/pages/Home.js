import React from "react";
import "./home.css"; 
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Features from "../components/features";
import Accordion from '../components/Accordion'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
              <li>
                <a href="#">Supports</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="header-content">
            <h1>Learn Design with Nia Matos</h1>
            <p>
              Get Your Blood tests deliverd at let home collect sample from the
              victory of the management that supplies best design system
              guidelines ever.
            </p>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Course Name"
              variant="filled"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <h2>Tutorials that people love most</h2>
          <div className="tutorial-cards">
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
            <div>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="80"
                  image="/"
                  alt="Tutorial 1"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ★★★★★
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    How to work with prototype design with adobe
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="80"
                  image="/"
                  alt="Tutorial 2"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ★★
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Create multiple artboard by using figma
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
            <div>
            <Card sx={{ maxWidth: 345, margin: 2 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="80"
                  image="/"
                  alt="Tutorial 3"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    ★★★
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Convert your web layout theming easily
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </div>
            </Carousel>
          </div>
          
        </div>
      </main>
      <Features />
      <Accordion/>
    </div>
  );
}

export default App;

import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";
import "./Hero.css";

const Hero = () => {

  const [article, setArticle] = useState([]);
  useEffect(() => {
    const getArticle = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=all&apiKey=969391ae87354b49b557af6a97477d2a`
      );
      setArticle(response.data.articles);
    };
    getArticle();
  }, [article]);
  
  return (
    <div>
      <div className="h-wrapper">
        <div className="h-container">
          <Carousel indicators={false} autoPlay={true}>
            {article && article.map((item, i) => {
              const Date = item.publishedAt;
              const formatDate = Date.replace("T", " ");
              const formatTime = formatDate.replace("Z", " ");
              return(
                <Paper
                  className="paper"
                  variant="elevation"
                  preview={2}
                  elevation={3}
                  key={i}
                >
                  <img src={item.urlToImage} alt="" />
                  <div className="words">
                    <Typography
                      className="type-one"
                      variant="subtitle1"
                      component="subtitle1"
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className="type-two"
                      variant="h5"
                      component="h6"
                    >
                      <a href={item.url}>{item.description}</a>
                    </Typography>
                    <Typography
                      className="type-three"
                      variant="body1"
                      component="body1"
                    >
                      Published at : {formatTime}
                    </Typography>
                  </div>
                </Paper>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;

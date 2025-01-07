import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const TrendingScience = () => {
    const [science, setScience] = useState([]);

    useEffect(() => {
      const getArticles = async () => {
        const reponse = await axios.get(
          "https://newsapi.org/v2/everything?q=science&apiKey=969391ae87354b49b557af6a97477d2a"
        );
        setScience(reponse.data.articles);
      };
  
      getArticles();
    }, [science]);

    const responseScience = science.splice(0, 12);

  
    return (
      <div>
        <div className="c-wrapper">
          <div className="c-container">
            <div className="c-head">
              <div className="empty"></div>
              <span>science</span>
            </div>
            <div className="cy-container">
              {science && responseScience.map((item, i) => {
                const Date = item.publishedAt;
                const formatDate = Date.replace("T", " ");
                const formatTime = formatDate.replace("Z", " ");
                return (
                  <div className="cy-con" key={i}>
                    <img src={item.urlToImage} alt="" />
                    <div className="cy-words">
                    <span><a href={item.url} className='ttype-one'>{item.title}</a></span>
                      <span>{item.description}</span>
                      <span>Published at : {formatTime}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}

export default TrendingScience

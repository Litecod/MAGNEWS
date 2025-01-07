import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const TrendingEntertainment = () => {
    const [entertainment, setEntertainment] = useState([]);


    useEffect(() => {
      const getEntertainment = async () => {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=entertainment&apiKey=969391ae87354b49b557af6a97477d2a`
        );
        setEntertainment(response.data.articles);
      };
      getEntertainment();
    }, [entertainment]);

    const responseEntertainment = entertainment.splice(0, 12);
  
    return (
      <div>
        <div className="t-wrapper">
          <div className="t-container">
          <div className="c-head">
              <div className="empty"></div>
              <span>Entertainment</span>
            </div>
            <div className="cy-container">
              {entertainment && responseEntertainment.map((item, i) => {
              const Date = item.publishedAt;
              const formatDate = Date.replace("T", " ");
              const formatTime = formatDate.replace("Z", " ");
                return (
                  <div className="cy-con" key={i}>
                    <img src={item.urlToImage} alt="" />
                    <div className="cy-words">
                    <span><a href={item.url} className='ttype-one'>{item.title}</a></span>
                      <span>{item.description}</span>
                      <span>Published at : {formatDate}</span>
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

export default TrendingEntertainment

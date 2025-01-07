import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const TrendingSport = () => {
    const [sport, setSport] = useState([]);


    useEffect(() => {
      const getSport = async () => {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=sport&apiKey=969391ae87354b49b557af6a97477d2a`
        );
        setSport(response.data.articles);
      };
      getSport();
    }, [sport]);

    const responseSport = sport.splice(0, 12);
  
    return (
      <div>
        <div className="t-wrapper">
          <div className="t-container">
          <div className="c-head">
              <div className="empty"></div>
              <span>sport</span>
            </div>
            <div className="cy-container">
              {sport && responseSport.map((item, i) => {
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

export default TrendingSport

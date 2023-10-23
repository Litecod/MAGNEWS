import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const TrendingBusiness = () => {
    const [business, setBusiness] = useState([]);

    useEffect(() => {
      const getArticles = async () => {
        const reponse = await axios.get(
          "https://newsapi.org/v2/everything?q=business&apiKey=969391ae87354b49b557af6a97477d2a"
        );
        setBusiness(reponse.data.articles);
      };
  
      getArticles();
    }, [business]);

    
    return (
      <div>
        <div className="c-wrapper">
          <div className="c-container">
            <div className="c-head">
              <div className="empty"></div>
              <span>Business</span>
            </div>
            <div className="cy-container">
              {business && business.map((item, i) => {
                const Date = item.publishedAt;
                const formatDate = Date.replace("T", " ");
                const formatTime = formatDate.replace("Z", " ");
                return (
                  <div className="cy-con" key={i}>
                    <img src={item.urlToImage} alt="" />
                    <div className="cy-words">
                     <span ><a href={item.url} className='ttype-one'>{item.title}</a></span>
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

export default TrendingBusiness

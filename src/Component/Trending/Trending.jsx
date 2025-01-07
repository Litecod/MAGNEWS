import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { RiMenu4Fill } from "react-icons/ri";
import "./Trending.css";

const Trending = () => {
  const [menu, setMenu] = useState([]);

  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("trending");

  const navs = [
    { id: 1, name: "All", value: "headlines" },
    { id: 2, name: "Business", value: "business" },
    {
      id: 3,
      name: "Entertainment",
      value: "entertainment",
    },
    { id: 4, name: "Science", value: "science" },
    { id: 5, name: "Sport", value: "sport" },
    { id: 6, name: "Technology", value: "technology" },
  ];

  useEffect(() => {
    const getMenu = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${category}&apiKey=969391ae87354b49b557af6a97477d2a`
      );
      setMenu(response.data.articles);
    };
    getMenu();
  }, [menu]);

  const [togle, setTogle] = React.useState(false);

  const getMenuStyle = (menuOpen) => {
    if (document.documentElement.clientWidth <= 930) {
      return { right: !menuOpen && "100%", opacity: !menuOpen && 0 };
    }
  };

  function menuClick() {
    setTogle((prevState) => !prevState);
  }

  const responseMenu = menu.splice(0, 12);

  return (
    <div>
      <div className="t-wrapper">
        <div className="t-container">
          <div className="t-head">
            <div className="t-hr">
              <span>Trending</span>
            </div>
            <ul className="tnav-links" style={getMenuStyle(togle)}>
              {navs.map((item) => {
                function handleClick() {
                  setActive(item.id);
                  setCategory(item.value);
                }
                return (
                  <li
                    className={active === item.id ? "active" : "inactive"}
                    key={item.id}
                    onClick={handleClick}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
            <div className="t-menu" onClick={menuClick}>
              <RiMenu4Fill />
            </div>
          </div>
          <div className="cy-container">
            {menu &&
              responseMenu.map((item, i) => {
                const Date = item.publishedAt;
                const formatDate = Date.replace("T", " ");
                const formatTime = formatDate.replace("Z", " ");

                return (
                  <div className="cy-con" key={i}>
                    <img src={item.urlToImage} alt="" />
                    <div className="cy-words">
                      <span>
                        <a href={item.url} className="ttype-one">
                          {item.title}
                        </a>
                      </span>
                      <span>{item.description}</span>
                      <span>Published at : {formatTime}</span>
                    </div>
                  </div>
                );
              })}
          </div>
          <button className="btn-view">Veiw More</button>
        </div>
      </div>
    </div>
  );
};

export default Trending;

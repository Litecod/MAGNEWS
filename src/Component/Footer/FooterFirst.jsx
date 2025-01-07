import React from "react";
import { MdFacebook } from "react-icons/md";
import {
  AiFillDribbbleCircle,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import "./Footer.css";
import logo from "/logo2.png"

const FooterFirst = () => {
  return (
    <div>
      <div className="f-wrapper">
        <div className="f-container">
          <div className="left">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="span">
              We make sure we gives you everything you want concerning what's
              happening in the world, we provides quality information about
              Politics, Science, Technology, Sports, Business, Crypto Currency,
              Trending stories and things happening in the universe. Dont miss
              out
            </div>
            <div className="links">
              <a href="">
                <MdFacebook size={25}/>
              </a>
              <a href="">
                <AiFillDribbbleCircle size={25}/>
              </a>
              <a href="">
                <AiFillTwitterCircle size={25} />
              </a>
              <a href="">
                <AiFillInstagram size={25} />
              </a>
            </div>
          </div>
          <div className="right">
            <span className="head-span">News Category</span>
            <div className="catergory">
                <div className="cat-one">
                    <p>Business</p>
                    <p>(100)</p>
                </div>
                <hr />
                <div className="cat-one">
                    <p>Entertainment</p>
                    <p>(100)</p>
                </div>
                <hr />
                <div className="cat-one">
                    <p>Science</p>
                    <p>(100)</p>
                </div>
                <hr />
                <div className="cat-one">
                    <p>Sport</p>
                    <p>(100)</p>
                </div>
                <hr />
                <div className="cat-one">
                    <p>Technology</p>
                    <p>(100)</p>
                </div>
                <hr />
            </div>
          </div>
          
        </div>
        <div className="fo-span"><span>Copyright ©2023 All rights reserved | designed by <span>Lyto</span></span></div>
      </div>
    </div>
  );
};

export default FooterFirst;

import React from "react";
import "./video.css";

const video = () => {
  return (
    <div>
      <div className="v-wrapper">
        <div className="v-container">
          <video autoPlay={true} src="./video.mp4" muted loop></video>
          <div className="v-words">
            <div className="v-spans">
              <span className="v-n-span">
                Welcome to <span className="m">MAGNEWS</span> <span className="v-upper">24</span>
              </span>
              <div className="v-cont">
                <div className="v-left">
                  <span>
                    We make sure we gives you everything you want concerning
                    what's happening in the world, we provides quality
                    information about Politics, Science, Technology, Sports,
                    Business, Crypto Currency, Trending stories and things
                    happening in the universe. Dont miss out
                  </span>
                </div>
                <div className="v-right">
                  <h3>Subscribe </h3>
                  <form mailto='lightsamuel10@gmail.com'>
                    <input className="email" type="email" name="email" placeholder="email" />
                    <button className="btn">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default video;

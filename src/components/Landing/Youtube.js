import React, { useState } from "react";
import "../Styles/Youtube.css";
import bgyoutube from "../../assets/bg-youtube.png";
import { FaRegPlayCircle } from "react-icons/fa";

const Youtube = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="youtube-section">
      <div className="video-container">
        {!isPlaying ? (
          <div className="thumbnail" onClick={() => setIsPlaying(true)}>
            <img
              src={bgyoutube}
              alt="How to Boost Your Business"
              className="thumbnail-image"
            />
            <div className="overlay">
              <FaRegPlayCircle className="youtube-icon" />
            </div>
          </div>
        ) : (
          <div className="video-wrapper">
            
            <iframe
              width="100%"
              height="100%" 
              src="https://www.youtube.com/embed/_JEHJ1RKvRs?autoplay=1" 
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Youtube;

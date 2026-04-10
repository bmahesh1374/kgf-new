import React from 'react'
import globalsummitimg from "../../assets/globalsummit1.png";
import globalsummitimg2 from "../../assets/globalsummit2.png";
import globalsummitimg3 from "../../assets/globalsummit3.png";
import sportsmeetimg from "../../assets/sportsmeet1.png";
import sportsmeetimg2 from "../../assets/sportsmeet2.png";
import sportsmeetimg3 from "../../assets/sportsmeet3.png";
import gettogetherimg1 from "../../assets/gettogether1.png";
import gettogetherimg2 from "../../assets/gettogether2.png";
import gettogetherimg3 from "../../assets/gettogether3.png";

import "../Styles/family.css";

function Gallery() {
  return (
   <>
   <div className='container'>

    <h3 className='gallery-title'>Gallery</h3>
    <div className='header'>
   <h4>GLOBAL SUMMIT</h4>
    <button className='view-btn'>View All</button>
    </div>
    
    <div className="gallery-grid">
    <figure className='gall-row'>
        <img src={globalsummitimg} className="img-fluid"/>
    </figure>
      <figure className='gall-row'>
        <img src={globalsummitimg2} className="img-fluid"/>
    </figure>
      <figure className='gall-row'>
        <img src={globalsummitimg3} className="img-fluid"/>
    </figure>
    </div>
       <br/>
       <br/>
     <div className='header'>
   <h4>SPORTS</h4>
    <button className='view-btn'>View All</button>
    </div>
    
    <div className="gallery-grid">
    <figure className='gall-row'>
        <img src={sportsmeetimg} className="img-fluid"/>
    </figure>
      <figure className='gall-row'>
        <img src={sportsmeetimg2} className="img-fluid"/>
    </figure>
      <figure className='gall-row'>
        <img src={sportsmeetimg3} className="img-fluid"/>
    </figure>
    </div>
  <br/>
<br/>
     <div className='header'>
   <h4>GET TO GATHER</h4>
    <button className='view-btn'>View All</button>
    </div>
    
    <div className="gallery-grid">
    <figure className='gall-row'>
        <img src={gettogetherimg1} className="img-fluid"/>
    </figure>
      <figure className='gall-row'>
        <img src={gettogetherimg2} className="img-fluid"/>
    </figure>
      <figure className='gall-row'>
        <img src={gettogetherimg3} className="img-fluid"/>
    </figure>
    <br/>
    </div>
   </div>
   </>
  )
}

export default Gallery
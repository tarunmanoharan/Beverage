import React from 'react';
import '../assets/css/card.css';

function Card() {
  return (
    <>
      <div id="scene">
        <div id="left-zone">
          <ul className="list">
            <li className="item">
              <input type="radio" id="first" name="basic_carousel" value="first" checked="checked" />
              <label className="label_one" htmlFor="first"><b>Gallery</b></label>
              <div className="content content_one">
                <span className="picto"></span>
                <p>fourth</p>
                <div className="container">
                  <div className="card">
                    <h3 className="title">Tea</h3>
                  </div>
                  <div className="card">
                    <h3 className="title">Coffee</h3>
                  </div>
                  <div className="card">
                    <h3 className="title">Soft Drinks</h3>
                  </div>
                  <div className="card">
                    <h3 className="title">Wine</h3>
                  </div>
                  <div className="card">
                    <h3 className="title">Whisky</h3>
                  </div>
                
                  
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div id="middle-border"></div>
        <div id="right-zone"></div>
      </div>
    </>
  );
}

export default Card;

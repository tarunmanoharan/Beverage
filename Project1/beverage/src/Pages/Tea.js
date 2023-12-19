import React from 'react';
import '../assets/css/tea.css';

const Tea = () => {
  return (
    <div>
      <h1>3D Carousel Slider</h1>

      <section id="carousel">
        <input type="radio" name="slider" id="s1" />
        <input type="radio" name="slider" id="s2" />
        <input type="radio" name="slider" id="s3" checked />
        <input type="radio" name="slider" id="s4" />
        <input type="radio" name="slider" id="s5" />

        <label htmlFor="s1" id="slider1">
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
            width="100%"
            height="100%"
          />
        </label>
        <label htmlFor="s2" id="slider2">
          {/* Add the image source for slider 2 */}
        </label>
        <label htmlFor="s3" id="slider3">
          {/* Add the image source for slider 3 */}
        </label>
        <label htmlFor="s4" id="slider4">
          {/* Add the image source for slider 4 */}
        </label>
        <label htmlFor="s5" id="slider5">
          {/* Add the image source for slider 5 */}
        </label>
      </section>
    </div>
  );
};

export default Tea;

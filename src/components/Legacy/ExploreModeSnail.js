import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SnailComponent from "./SnailComponent";
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from "swiper";
import myVideo_1 from "./music/music_1.mp4";
import myVideo_2 from "./music/music_2.mp4";
import myVideo_3 from "./music/music_3.mp4";

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

const ExploreMode = () => {
  let col = [myVideo_1, myVideo_2, myVideo_3];

  window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas__swiper");
    const ctx = canvas.getContext("2d");
    const snail = document.getElementById("snail");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Bar {
      constructor(x, y, width, height, color, index) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.index = index;
      }

      update(micInput) {
        this.height = micInput;
      }
      draw(context, volume) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
      }
    }

    const bar1 = new Bar(200, 200, 100, 300, 'orangered', 1);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bar1.draw(ctx, 1);
      bar1.x++;
      requestAnimationFrame(animate);
    };
    animate();
  });

  return (
    <Swiper
      id="main"
      tag="section"
      navigation
      // pagination
      spaceBetween={0}
      slidesPerView={1}
      onInit={() => console.log("Swiper initialized!")}
      onSlideChange={() => {
        console.log("onchange");
      }}
      onReachEnd={() => {
        console.log("Swiper end reached!");
      }}
    >
      {col.map((item) => (
        <SwiperSlide key={item}>
          <div id="container__swiper">
            <SnailComponent className="container__snail" />
            <canvas id="canvas__swiper"></canvas>
            <audio src={item} controls className="w-100 h-100" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

ExploreMode.propTypes = {};

ExploreMode.defaultProps = {};

export default ExploreMode;

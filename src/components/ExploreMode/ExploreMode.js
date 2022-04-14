import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from "swiper";
import myVideo_1 from "./music/music_1.mp4";
import myVideo_2 from "./music/music_2.mp4";
import myVideo_3 from "./music/music_3.mp4";

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

const ExploreMode = () => {
  let col = [myVideo_1, myVideo_2, myVideo_3];

  const stopPlayerFromPlaying = (id) => {
    const audio_music = document.getElementById(id);
    audio_music.pause();
  };

  const initVizualiser = () => {
    window.addEventListener("load", () => {
    const canvas = document.getElementById("canvas__swiper");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let audioSource;
      let analyser;

      const audio_music = document.getElementById("audio_music");
      audio_music.src = col[0];
      const audioContext = new AudioContext();
      audio_music.play();

      audioSource = audioContext.createMediaElementSource(audio_music);
      analyser = audioContext.createAnalyser();
      audioSource.connect(analyser);
      analyser.connect(audioContext.destination);
      analyser.fftSize = 1024;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      //   const barWidth = canvas.width / 2 / bufferLength;
      const barWidth = 2;
      let barHeight;
      let x;

      // CODE RESPONSIBLE FOR THE VIZUALIZATION: animate()
      function animate() {
        x = 0;
        ctx.clearRect(5, 0, canvas.width, canvas.height);
        analyser.getByteFrequencyData(dataArray);

        drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray);

        requestAnimationFrame(animate);
      }
      animate();

      function drawVisualiser(bufferLength, x, barWidth, barHeight, dataArray) {
        // second for loop to combine with the first - used in first example
        for (let i = 0; i < bufferLength; i++) {
          barHeight = dataArray[i] * 2.5;
          ctx.save();
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate((i * (Math.PI * 10)) / bufferLength);

          const hue = i * 2;

          ctx.fillStyle = "hsl(" + hue + ",70%, 70%)";
          ctx.fillRect(0, 0, barWidth, barHeight);
          x += barWidth;
          ctx.restore();
        }
      }
    });
  };

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      // pagination
      slidesPerView={1}
      onInit={() => {
        initVizualiser();
        console.log("Swiper initialized!");
      }}
      onSlideChange={() => {
        stopPlayerFromPlaying("audio_music");
      }}
      onSlideNextTransitionStart={() => {}}
      onSlideNextTransitionEnd={() => {}}
    >
        {col.map((item) => (
        <SwiperSlide key={item} id='main' >
          <div id="container__swiper">
            <canvas id="canvas__swiper"></canvas>
            <audio
              id="audio_music"
              src={item}
              controls
              className="w-100 h-100"
            />
          </div>
        </SwiperSlide>
      ))}
      
    </Swiper>
  );
};

ExploreMode.propTypes = {};

ExploreMode.defaultProps = {};

export default ExploreMode;

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from "swiper";
import ReactPlayer from "react-player";
import "swiper/swiper-bundle.css";
import axios from "axios";
import { TRENDING_SONGS } from "./constants";

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

const ExploreMode = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showArtist, setShowArtist] = useState(false);
  const [TrendingMusicData, setTrendingMusicData] = useState({});

  async function getTrendingSong() {
    try {
      const url = TRENDING_SONGS;
      const response = await axios.get(url);
      const data = response.data
      setTrendingMusicData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getTrendingSong();
  }, []);

  console.log(TrendingMusicData);

  const slides = [];
  const myMusicArray = ["xwj82WszDjg", "CpKSDUjksIA"];

  let MusicArrayLength = myMusicArray.length;

  for (let i = 0; i < MusicArrayLength; i++) {
    slides.push(
      <SwiperSlide key={`${i}`} tag="li">
        <ReactPlayer
          url={`https://discovery.grassfed.network/v1/tracks/D7KyD/stream?app_name=Artberry`}
          playing={true}
          volume={0.8}
          controls
        />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
        id="main"
        thumbs={{ swiper: thumbsSwiper }}
        // controller={{ control: controlledSwiper }}
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        spaceBetween={0}
        slidesPerView={1}
        onInit={() => console.log("Swiper initialized!")}
        onSlideChange={(swiper) => {
          setShowArtist(false);
        }}
        onReachEnd={() => {
          console.log("Swiper end reached!");
        }}
      >
        {slides}
      </Swiper>
      <button className="swiper-btn" onClick={() => setShowArtist(true)}>
        Unlock Me!
      </button>
      {showArtist ? <div>The artist is xxx</div> : ""}
    </>
  );
};

export default ExploreMode;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from "swiper";
import { getTrending } from "../Redux/reducer/explorer";
import ReactPlayer from "react-player";
import "swiper/swiper-bundle.css";
import {data} from './data';

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

const ExploreMode = () => {
  const dispatch = useDispatch();
  const [showArtist, setShowArtist] = useState(false);

  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);

  //REDUX WAY OF CAPTURING DATA PT1
  //taking the object data from the explorer reducer
  // const trendingSongsData = useSelector((state) => state.data.data);
  // console.log(trendingSongsData);

  //REDUX WAY OF CAPTURING DATA PT2
  // if (trendingSongsData !== undefined) {
  //   for (const key in trendingSongsData.data) {
  //     //pushing the IDs from the API to an arrays
  //     musicIds.push(trendingSongsData.data[key].id);
  //   }
  // }

  const slides = [];

  const getUrl = (data) => {
    return data.url
  }

  const musicURLs = data.map(getUrl);

  let MusicArrayLength = musicURLs.length;

  for (let i = 0; i < MusicArrayLength; i++) {
    slides.push(
      <SwiperSlide key={`${i}`} tag='li'>
        <ReactPlayer
          url={musicURLs}
          playing={false}
          volume={0.0}
          controls
        />
      </SwiperSlide>
    );
  }

  return (
    <>
      <Swiper
        id="main"
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

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from "swiper";
import { getTrending } from "../../Redux/reducer/explorer";
import ReactPlayer from "react-player";
import "swiper/swiper-bundle.css";
import {data} from './data';
import './ExploreMode.scss';
import myVideo_1 from './music/music_1.mp4'
import myVideo_2 from './music/music_2.mp4'
import myVideo_3 from './music/music_3.mp4'

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

  // for (let i = 0; i < MusicArrayLength; i++) {
  //   slides.push(
  //     <SwiperSlide key={`${i}`}>
  //         <ReactPlayer
  //           className='react-player'
  //           url={myVideo_1}
  //           playing={false}
  //           volume={0.4}
  //           controls={true}
  //           width='100%'
  //           height='100%'
  //         />

  //     </SwiperSlide>
  //   );
  // }

  return (
    <>
      <Swiper
        id="main"
        tag="section"
        navigation
        // pagination
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
       <SwiperSlide>
         <ReactPlayer
            className='react-player'
            url={myVideo_1}
            playing={false}
            volume={0.4}
            controls={true}
            width='100%'
            height='100%'
          />
        </SwiperSlide>
        <SwiperSlide>
         <ReactPlayer
            className='react-player'
            url={myVideo_2}
            playing={false}
            volume={0.4}
            controls={true}
            width='100%'
            height='100%'
          />
        </SwiperSlide>
        <SwiperSlide>
         <ReactPlayer
            className='react-player'
            url={myVideo_3}
            playing={false}
            volume={0.4}
            controls={true}
            width='100%'
            height='100%'
          />
        </SwiperSlide>
        {/* {slides} */}
      </Swiper>
      <button className='swiper-btn' onClick={() => setShowArtist(true)}>
        Unlock Me!
      </button>
      <button
          className="btn-default"
          // onClick={() => dispatch({ type: OPEN_MODEL })}
          onClick={() => setShowArtist(true)}
        >
          Get involved
        </button>
      {showArtist ? <div className='btn-text'>The artist is xxx</div> : ""}
    </>
  );
};

export default ExploreMode;

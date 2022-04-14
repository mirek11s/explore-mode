import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import ReactPlayer from "react-player";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from "swiper";

import { getTrending } from "../../Redux/reducer/explorer";

import "swiper/swiper-bundle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ArtistUnlockPopUp from "../PopUp/ArtistUnlockPopUp";
import { POP_UP_DATA } from "../PopUp/constants";

import { data } from "../ExploreMode/data";
import myVideo_1 from "./music/music_1.mp4";
import myVideo_2 from "./music/music_2.mp4";
import myVideo_3 from "./music/music_3.mp4";

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

const ExploreMode = () => {
  const dispatch = useDispatch();

  const [showArtist, setShowArtist] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    dispatch(getTrending());
  }, [dispatch]);

  //close the popup box when the user clicks outside of the popup box instead of on it.
  const closePopUp = (event) => {
    if (event.target.getAttribute("class") === "model") {
      setShowPopUp(false);
    }
  };

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

  // const slides = [];

  // const getUrl = (data) => {
  //   return data.url;
  // };

  // const musicURLs = data.map(getUrl);

  // let MusicArrayLength = musicURLs.length;

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

  let col = [myVideo_1, myVideo_2, myVideo_3]

  return (
    <Container className="h-100">
      {showPopUp && <ArtistUnlockPopUp closePopUp={closePopUp} />}

      <Row className="d-flex justify-content-end">
        <button
          className="col-2 my-3 unlock__artist__btn"
          onClick={() => setShowPopUp(true)}
        >
          Unlock & find me!
        </button>
      </Row>

      <Row className="">
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
              url={myVideo_1}
              playing={false}
              volume={0.4}
              controls={true}
              width="100%"
              height="100%"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReactPlayer
              url={myVideo_2}
              playing={false}
              volume={0.4}
              controls={true}
              width="100%"
              height="100%"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ReactPlayer
              url={myVideo_3}
              playing={false}
              volume={0.4}
              controls={true}
              width="100%"
              height="100%"
            />
          </SwiperSlide>
          {/* {slides} */}
        </Swiper>
      </Row>
    </Container>
  );
};

export default ExploreMode;

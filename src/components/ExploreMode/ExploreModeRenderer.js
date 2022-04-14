import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTrending } from "../../Redux/reducer/explorer";
import "swiper/swiper-bundle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ArtistUnlockPopUp from "../PopUp/ArtistUnlockPopUp";
import ExploreMode from "./ExploreMode";


const ExploreModeRenderer = () => {
  const dispatch = useDispatch();

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

  return (
    <Container className="">
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
        <ExploreMode />
      </Row>
    </Container>
  );
};

export default ExploreModeRenderer;

import React from "react";

const ArtistUnlockPopUp = ({closePopUp}) => {
  return (
    <div className="model" onClick={closePopUp}>
      <div className="model__body">
        <form>
          <div className="model__heading">
            <h3>TEST TITLE</h3>
          </div>
          <div className="model__heading__subscription">
            <label className="model__heading__subscription__question">
              <span>
                TEST DATA
              </span>
            </label>
          </div>
          <div className="group">
            <input type="submit" name="" className="btn-dark" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ArtistUnlockPopUp;

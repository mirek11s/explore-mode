import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetching = () => {
  const [trendingMusicData, setTrendingMusicData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://discovery.grassfed.network/v1/tracks/D7KyD/stream?app_name=Artberry"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div>DataFetching</div>;
};

export default DataFetching;

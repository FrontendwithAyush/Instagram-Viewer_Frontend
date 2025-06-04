import React, { useEffect, useState } from "react";
import Video from "./Video";
import Spinner from "./Spinner";

const Reel = ({ username }) => {
  const [AllReels, setAllReels] = useState([]);
  const [Loading, setLoading] = useState(true);

  const Reels = async () => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:5000/reels/${username}`);
      const data = await res.json();
      setAllReels(data.reels);
      setLoading(false);
    } catch (error) {
      alert("reels not found");
    }
  };

  useEffect(() => {
    Reels();
    // eslint-disable-next-line
  }, [username]);

  return (
    <>
      {Loading && <Spinner />}
      {AllReels && (
        <div className="container d-flex align-items-center justify-content-center flex-wrap ">
          {AllReels.map((reelsUrl, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "25%",
                  height: "45vh",
                  margin: "1rem",
                }}
              >
                <Video reelsUrl={reelsUrl} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Reel;

import React from "react";

const Video = (props) => {
  const { reelsUrl } = props;
  return (
    <>
      <video
        src={reelsUrl}
        height={"100%"}
        width={"100%"}
        controls
        type="video/mp4"
      />
    </>
  );
};

export default Video;

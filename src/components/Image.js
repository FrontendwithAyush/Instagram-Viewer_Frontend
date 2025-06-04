import React from "react";

const Image = (props) => {
  const { imgUrl } = props;

  return (
    <>
      <img
        src={`http://localhost:5000/proxy-image?url=${encodeURIComponent(
          imgUrl
        )}`}
        alt="..."
        style={{ height: "100%", width: "100%" }}
      />
    </>
  );
};

export default Image;

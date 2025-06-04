import React from "react";
import Image from "./Image";

const Posts = ({ AllImages }) => {
  return (
    <>
      {AllImages && (
        <div className="container d-flex align-items-center justify-content-center flex-wrap ">
          {AllImages.slice(1, -1).map((imgUrl, index) => {
            return (
              <div
                key={index}
                style={{
                  width: "25%",
                  height: "45vh",
                  margin: "1rem",
                }}
              >
                <Image imgUrl={imgUrl} />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Posts;

import React, { useState } from "react";
import Posts from "./Posts";
import Reel from "./Reel";
import logo1 from "../logos/reel.png";
import logo2 from "../logos/profile.png";

const Landing = (props) => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [AllImages, setAllImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError("");
    setProfile(null);

    try {
      props.setProgress(10);
      const res = await fetch(`http://localhost:5000/profile/${username}`);
      props.setProgress(50);
      const data = await res.json();

      if (data.error) {
        setError("Profile not found or private.");
      } else {
        setProfile(data);
        setAllImages(data.images);
        props.setProgress(100);
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="landing-container">
        <h1>Instagram Profile Viewer</h1>

        <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter Instagram username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "10px", width: "60%" }}
          />
          <button
            type="submit"
            style={{ padding: "10px 20px", marginLeft: "10px" }}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}

        {profile && (
          <>
            <div
              className="profile-card"
              style={{ marginTop: "20px", textAlign: "center" }}
            >
              <img
                src={`http://localhost:5000/proxy-image?url=${encodeURIComponent(
                  profile.imageUrl
                )}`}
                alt="Profile"
                style={{
                  borderRadius: "50%",
                  width: "120px",
                  marginBottom: "10px",
                }}
              />

              <h2>{profile.name || "No Name"}</h2>
              <p>{profile.mName || "No Name"}</p>
              <p>{profile.mBio}</p>
              <p>
                <strong>Posts:</strong> {profile.posts}
              </p>
              <p>
                <strong>Followers:</strong> {profile.followers}
              </p>
              <p>
                <strong>Following:</strong> {profile.following}
              </p>
            </div>
            <div className="container d-flex justify-content-evenly align-items-center">
              <p
                onClick={() => setActiveTab("posts")}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={logo2}
                  style={{
                    height: "2.3vh",
                    paddingBottom: "0.2rem",
                    marginRight: ".2rem",
                  }}
                  alt="posts"
                />
                POSTS
              </p>
              <p
                onClick={() => setActiveTab("reels")}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={logo1}
                  style={{
                    height: "3.5vh",
                    paddingBottom: "0.2rem",
                    marginRight: ".2rem",
                  }}
                  alt="reels"
                />
                REELS
              </p>
            </div>
            <div className="content-section">
              {activeTab === "posts" ? (
                <Posts AllImages={AllImages} />
              ) : (
                <Reel username={username} />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Landing;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dotenv from "dotenv";
const API_KEY =    import.meta.env.VITE_API_KEY
const SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";

// dotenv.config()


const Video = ({ category }) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      setLoading(true);
      try {
        const query = category === "All" ? "Bollywood songs" : category;

        const res = await fetch(
          `${SEARCH_URL}?part=snippet&type=video&maxResults=12&q=${encodeURIComponent(
            query
          )}&key=${API_KEY}`
        );
        const data = await res.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
      setLoading(false);
    };

    fetchVideos();
  }, [category]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gap: "20px",
        padding: "20px",
        marginTop: "6%",
      }}
    >
      {videos.map((video) => (
        <div
          key={video.id.videoId}
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            cursor: "pointer",
            background: "#181818",  
          }}
          onClick={() => navigate(`/watch/${video.id.videoId}`)}
        >
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <div style={{ padding: "10px" }}>
            <h4 style={{ margin: "0 0 5px", color: "#fff" }}>
              {video.snippet.title}
            </h4>
            <p style={{ margin: 0, color: "#aaa" }}>
              {video.snippet.channelTitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;


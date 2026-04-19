import React from "react";
import { useParams } from "react-router-dom";

const WatchPage = () => {
  const { videoId } = useParams();

  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        marginLeft: "17%",
        marginTop: "6%",
        flexWrap: "wrap", 
      }}
    >
  
      <div style={{ flex: 3, minWidth: "300px" }}>
        <iframe
          width="100%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
          style={{
            borderRadius: "10px",
            maxWidth: "100%",
          }}
        ></iframe>
        <h2 style={{ color: "#fff", marginTop: "10px", fontSize: "1.2rem" }}>
          Video Title Here
        </h2>
        <p style={{ color: "#aaa", fontSize: "0.9rem" }}>Views · Date</p>
      </div>

    
      <div
        style={{
          flex: 1,
          minWidth: "250px",
        }}
      >
        <h3 style={{ color: "#fff", fontSize: "1rem" }}>Related Videos</h3>
        <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
          Yaha related videos fetch karke dikhani hain...
        </p>
      </div>
    </div>
  );
};

export default WatchPage;

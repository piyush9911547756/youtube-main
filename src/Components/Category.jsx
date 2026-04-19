import React from "react";

const categories = [
  "All",
  "Disha Vakani",
  "Web series",
  "Music",
  "React routers",
  "Web Development",
  "Live",
  "Mixes",
  "Gaming",
  "Tamil Cinema",
  "Cricket",
  "Animated films",
  "Indian Music",
  "Recently uploaded",
  "Watched",
  "New to you",
];

const Category = ({ sidebarOpen, onCategorySelect, selectedCategory }) => {
  return (
    <div
      className="category-container"
      style={{
        display: "flex",
        overflowX: "auto",
        background: "#000",
        left: sidebarOpen ? "240px" : "0",
      }}
    >
      {categories.map((cat, idx) => (
        <button
          key={idx}
          className={`category-button ${cat === selectedCategory ? "active" : ""}`}
          style={{
            background: cat === selectedCategory ? "white" : "#333",
            color: cat === selectedCategory ? "black" : "white",
            cursor: "pointer",
            border: "none",
          }}
          onClick={() => onCategorySelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Category;

import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [genre, setGenre] = useState("Shonen");
  const anime = {
    Shonen: [
      {
        name: "One Piece",
        rating: "5/5"
      },
      {
        name: "Naruto Series",
        rating: "4.8/5"
      },
      {
        name: "Bleach",
        rating: "4.5/5"
      }
    ],

    Sports: [
      {
        name: "Haikyuu Series",
        rating: "5/5"
      },
      {
        name: "Kuroko's Basketball",
        rating: "4.6/5"
      },
      {
        name: "Re-main",
        rating: "4/5"
      }
    ],
    Comedy: [
      {
        name: "Love is war",
        rating: "5/5"
      },
      {
        name: "Konosuba",
        rating: "4.7/5"
      },
      {
        name: "Sleepy Princess",
        rating: "4.5/5"
      }
    ]
  };
  return (
    <div className="App">
      <h1>Anime Recommendation</h1>
      <p>Checkout my Anime Ratings</p>
      <div className="button">
        {Object.keys(anime).map((types) => (
          <button onClick={() => setGenre(types)} key={types}>
            {types}
          </button>
        ))}
      </div>
      <hr />
      <div className="list">
        {anime[genre].map((show) => (
          <div className="list-item" key={show}>
            <h2>{show.name}</h2>
            <p>{show.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

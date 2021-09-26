import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [genre, setGenre] = useState("Shonen");
  const anime = {
    Shonen: [
      {
        name: "One Piece",
        rating: "5/5",
        description: "It is about a boy who want to become Pirate King."
      },
      {
        name: "Naruto Series",
        rating: "4.8/5",
        description:
          "It is about a boy who want to be recognized by his village."
      },
      {
        name: "Bleach",
        rating: "4.5/5",
        description: "It is about a boy who unexpectedly became a god a death."
      }
    ],

    Sports: [
      {
        name: "Haikyuu Series",
        rating: "5/5",
        description: "It is about a team who want to play and win nationals."
      },
      {
        name: "Kuroko's Basketball",
        rating: "4.6/5",
        description:
          "It is about a boy who want to make his team members realize about team work."
      },
      {
        name: "Re-main",
        rating: "4/5",

        description:
          "It is about a boy who lost his memories when he was champion in water polo, and now he starts again from scratch."
      }
    ],
    Comedy: [
      {
        name: "Love is war",
        rating: "5/5",
        description:
          "It is about a couple who like each other but want the other person to admit it first."
      },
      {
        name: "Konosuba",
        rating: "4.7/5",
        description:
          "It is about a boy who was reincarnated into another world with a useless godess after his death."
      },
      {
        name: "Sleepy Princess",
        rating: "4.5/5",
        description:
          "It is about a princess who was kidnapped but she always finds diffrent ways to sleep peacefully."
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
            <p>{show.description}</p>
            <p>{show.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./GameDetail.scss";

export default function GameDetail(props) {
  const [favoriteData, setFavoriteData] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [
      {
        id: 327239,
        name: "The Legend of Zelda: Tears of the Kingdom",
        slug: "the-legend-of-zelda-breath-of-the-wild-sequel",
        background_image:
          "https://media.rawg.io/media/games/556/55684bfd048706f4266d331d70050b37.jpg",
        description_raw:
          "An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch™. The adventure is yours to create in a world fueled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?",
        genres: "Action, Adventure",
        released: "2023-05-12",
        publishers: "Nintendo",
        platforms: "Nintendo Switch",
        linkBuy:
          "https://www.nintendo.com/es-co/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/",
        isFavorite: true,
      },
    ]
  );

  const index = favoriteData.findIndex(
    (game) => game.id === props.gameDetail.id
  );

  // handle click add button
  const handelClickFavorite = () => {
    let favoriteState = JSON.parse(localStorage.getItem("favorites")) || [];

    // tìm xem trong list favorite có phim chưa
    const index = favoriteData.findIndex(
      (game) => game.id === props.gameDetail.id
    );

    if (index === -1) {
      favoriteState = [
        ...favoriteState,
        { ...props.gameDetail, isFavorite: true },
      ];

      setFavoriteData((prevSta) => [
        ...prevSta,
        { ...props.gameDetail, isFavorite: true },
      ]);
    } else {
      favoriteState[index].isFavorite = !favoriteState[index].isFavorite;
      setFavoriteData(favoriteState);
    }

    localStorage.setItem("favorites", JSON.stringify(favoriteState));
  };

  return (
    <section id="game_detail">
      <div className="game_detail_image">
        <img src={props.gameDetail.background_image} />
      </div>

      <div className="game_detail_content">
        <h1 className="game_detail_title">{props.gameDetail.name}</h1>
        <p className="game_detail_description">
          {props.gameDetail.description_raw}
        </p>
        <p className="game_detail_genre">Genres: {props.gameDetail.genres}</p>
        <p className="game_detail_released">
          Released: {props.gameDetail.released}
        </p>
        <p className="game_detail_publisher">
          Publisher: {props.gameDetail.publishers}
        </p>
        <p className="game_detail_platforms">
          Platforms: {props.gameDetail.platforms}
        </p>
        <div className="btn_func">
          <Link to={props.gameDetail.linkBuy} target="_blank">
            <button className="btn">BUY</button>
          </Link>
          <button onClick={handelClickFavorite} className="btn favorite">
            {index !== -1 && favoriteData[index].isFavorite
              ? "Remove favorites"
              : "Add to favorites"}
          </button>
        </div>
      </div>
    </section>
  );
}

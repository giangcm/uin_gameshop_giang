import React, { useState } from "react";
import "./MyFavoritesPage.scss";
import GameCard from "../../components/GameCard/GameCard";

export default function MyFavoritesPage() {
  const [favoriteList, setFavoriteList] = useState(
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
  const renderMyFavoritesList = () => {
    return favoriteList.map((item, index) => {
      if (item.isFavorite) {
        return <GameCard game={item} key={index} />;
      }
    });
  };
  return (
    <main id="my_favorites_page">
      <h1>My Favorites</h1>
      <section className="my_favorites_page_container">
        {renderMyFavoritesList()}
      </section>
    </main>
  );
}

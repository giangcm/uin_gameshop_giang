export const API_KEY = "fd33f074d26e4e52991793b21b2c3613";
export const GENRES_GAME = "action";
export const prevYear = "2022";

export const favoriteDummy = [
  {
    background_image:
      "https://media.rawg.io/media/screenshots/d77/d77e6134ecb5dc63db4481c6e53a4b67.jpg",
    description_raw:
      "'The Unfallens: Awakening' is a soul-like action-packed boss battle game where you play as a surviving member of the 'Unfallens' civilization using a ghost scythe to challenge the merciless guardians BOSS.Narrative BackgroundA shattered world awaits you as you return home from your exile in the underground. The once-thriving civilization of the Unfallens now lies in ruins, with only ruthless guardians left to attack you. Journey through the remains of this fallen civilization, using your skills to overcome intense boss battles and uncover the truth behind the devastation. Awaken your true power, and reclaim what was lost.Challenging Action CombatThe game's action combat is challenging, requiring you to master the distance of different attack movements, use dodges to correctly respond to the rich moves of the boss, and survive under the formidable enemy.Satisfying Combat FeelFeel the solid sense of the soul scythe hitting the enemy, and participate in intense combat through smooth animations, realistic sound effects, visual effects, screen shaking, and other methods.Full Support for Controllers and Keyboard and MouseYou can choose any control method suitable for you to play. Whether you prefer a keyboard and mouse or a controller, you can find your play style.Gorgeous Game GraphicsThe game uses high-quality graphics effects to create a unique atmosphere and characters full of details.Abuot the developersFloatonic Studio, a team of talented student developers, created 'The Unfallens: Awakening' over six months. Three students from the University of Utah led the development effort, while two students from the Berklee College of Music contributed to the game's immersive audio experience. Despite its compact content, the developers aimed to provide players with the best quality game featuring a unique and challenging boss battle experience. Through their hard work and collaboration, the team has brought this action-packed game to life for players to enjoy.",
    genres: "Action, Adventure, RPG, Indie",
    id: 960682,
    isFavorite: true,
    linkBuy: "https://store.steampowered.com/app/2379620/",
    name: "The Unfallens: Awakening",
    platforms: "PC",
    publishers: "Floatonic Studio",
    released: "2023-05-11",
    slug: "the-unfallens-awakening",
  },
  {
    background_image:
      "https://media.rawg.io/media/games/556/55684bfd048706f4266d331d70050b37.jpg",
    description_raw:
      "An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for Nintendo Switch™. The adventure is yours to create in a world fueled by your imagination. In this sequel to The Legend of Zelda: Breath of the Wild, you’ll decide your own path through the sprawling landscapes of Hyrule and the mysterious islands floating in the vast skies above. Can you harness the power of Link’s new abilities to fight back against the malevolent forces that threaten the kingdom?",
    genres: "Action, Adventure",
    id: 327239,
    isFavorite: true,
    linkBuy:
      "https://www.nintendo.com/es-co/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/",
    name: "The Legend of Zelda: Tears of the Kingdom",
    platforms: "Nintendo Switch",
    publishers: "Nintendo",
    released: "2023-05-12",
    slug: "the-legend-of-zelda-breath-of-the-wild-sequel",
  },
  {
    background_image:
      "https://media.rawg.io/media/screenshots/d82/d82b75cf0869e22fb09056ac50940848.jpg",
    description_raw:
      "Do you wanna be a baller?\nC.B.T (Crazy Ball Time) is a ball-rolling platformer, with crazy tough action, and even crazier Balls.60 stages of straight BALLIN\nTraverse 6 unique worlds, steadily introducing new hazards and obstacles.Crazy Speed\nWith infinite lives, but finite time, beating worlds will take both speed and precision. Every shaved second counts, and using physics to find creative shortcuts will give you the upper hand.Select ya balls\nUnlock several ballers to choose from by clearing worlds in record time.",
    genres: "Action, Indie",
    id: 960679,
    isFavorite: true,
    linkBuy: "https://store.steampowered.com/app/2407660/",
    name: "C.B.T",
    platforms: "PC",
    publishers: "chimp",
    released: "2023-05-11",
    slug: "cbt",
  },
  {
    background_image:
      "https://media.rawg.io/media/screenshots/725/725138717c2cc7425cf7375a2277841b.jpg",
    description_raw:
      "Joint Our Discord\nAbout the Game\nMechabellum is an epic auto-battler taking place on the newly colonized planet of Far-Away. You’re the Commander of an army of mechs fighting it out in massive PvP battles. Customize and level up your units before the fight, strategically place them on the battlefield and watch them destroy your enemies without mercy.\nFrom the nimble Wasp light aircraft to the massive Vulcan, learn the strengths and weaknesses of a large number of unique mechs. Customize them and their abilities before you go to war to maximize their destructive power.\nAnticipate your enemy and strategically place your mechs on the battlefield. Counter your opponent’s moves by choosing the perfect unit combination as the battle unfolds.\nTurn a losing battle into a winning one by calling down the perfectly placed airstrike, or spread chaos by calling in a horde of crawler bots in the midst of your enemy’s army.\nWatch shrapnel, incendiary bombs and huge lasers cut through the air as battles between massive armies of mechs unfold in front of your eyes.\nFight against advanced AI before you challenge players in PvP combat. Try different unit combinations and abilities without the pressure of facing real players.",
    genres: "Action, Strategy, Simulation, Massively Multiplayer",
    id: 960687,
    isFavorite: true,
    linkBuy: "https://store.steampowered.com/app/669330/",
    name: "Mechabellum",
    platforms: "PC",
    publishers: "Paradox Arc",
    released: "2023-05-11",
    slug: "mechabellum",
  },
];

// https://rawg.io/apidocs#use-cases

const ListAll =
  "https://api.rawg.io/api/games?key=fd33f074d26e4e52991793b21b2c3613";

const detailGame =
  "https://api.rawg.io/api/games/{idGame}?key=fd33f074d26e4e52991793b21b2c3613";

const buyGame =
  "https://api.rawg.io/api/games/{game_id}/stores?key=fd33f074d26e4e52991793b21b2c3613";

const tesstARR = {
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
};

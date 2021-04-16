import RockPaperScissors from "./plugins/rps/rps.png";
import RussianRoulette from "./plugins/rr/rr.png";

const plugins = [
  {
    name: "Rock, Paper, Scissors",
    image: RockPaperScissors,
    alt: "Rock, Paper, Scissors",
    path: "games/rps",
    activated: true,
  },
  {
    name: "Russian Roulette",
    image: RussianRoulette,
    alt: "Flip Coin",
    path: "games/rr",
    activated: true,
  },
];

export default plugins;

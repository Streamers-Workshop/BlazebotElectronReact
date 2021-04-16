import EightBallGif from "../../private-view/features/plugins/8ball/8ball.gif";
import FlipCoinGif from "../../private-view/features/plugins/flip/coin.gif";
import GiveawayGif from "../../private-view/features/plugins/giveaway/giveaway.gif";
import HugGif from "../../private-view/features/plugins/hug/hug.gif";
import HydrateGif from "../../private-view/features/plugins/hydrate/hydrate.gif";
import LeaderboardGif from "../../private-view/features/plugins/lb/leaderboard.gif";
import PollSystemGif from "../../private-view/features/plugins/poll/poll.gif";
import ShoutOutGif from "../../private-view/features/plugins/shout-out/shout-out.gif";
import TimeGif from "../../private-view/features/plugins/time/time.gif";
import TimedMessagesGif from "../../private-view/features/plugins/timed-messages/timedmessages.gif";
import RockPaperScissorsGif from "../../private-view/games/plugins/rps/rps.gif";

export const Features = [
  {
    name: "8Ball",
    description: "8Ball will tell your fortunes!",
    trigger: "!8ball Will I Win?",
    gif: EightBallGif,
  },

  {
    name: "Flip Coin",
    description: "Flip a Coin!",
    trigger: "!flip",
    gif: FlipCoinGif,
  },
  {
    name: "Giveaway",
    description: "A Giveaway System for Trovo!",
    trigger: "!join",
    gif: GiveawayGif,
  },
  {
    name: "Hug",
    description: "Give a Hug to Trovo User!",
    trigger: "!hug @username",
    gif: HugGif,
  },
  {
    name: "Hydrate",
    description: "Remind the Streamer to hydrate on Stream",
    trigger: "!hydrate start / !hydrate stop",
    gif: HydrateGif,
  },
  {
    name: "Leaderboard",
    description:
      "Displays the ranking of the 1st, 2nd & 3rd Trovo User's points/level.",
    trigger: "!lb points / !lb level",
    gif: LeaderboardGif,
  },
  {
    name: "Poll System",
    description:
      "A Real-Time Poll System to cast votes from Viewers on Trovo Chat",
    trigger: "!poll something something",
    gif: PollSystemGif,
  },
  {
    name: "Shout Out",
    description: "Shout out a Trovo User's Channel for promotion!",
    trigger: "!so @user",
    gif: ShoutOutGif,
  },
  {
    name: "Time",
    description: "Show your Local Time",
    trigger: "!time",
    gif: TimeGif,
  },
  {
    name: "Timed Messages",
    description: "Display Timed Randomised Messages on Trovo Chat.",
    trigger: "!tm start / !tm stop",
    gif: TimedMessagesGif,
  },
];

export const Games = [
  {
    name: "Rock Paper Scissors",
    description: "Go against Bot on Rock Paper Scissors and earn Points",
    trigger: "e.g. !rps rock",
    gif: RockPaperScissorsGif,
  },

  {
    name: "Russian Roulette",
    description: "Go against Bot Playing Russian Roulette",
    trigger: "!dontknow",
    gif: FlipCoinGif,
  },
];

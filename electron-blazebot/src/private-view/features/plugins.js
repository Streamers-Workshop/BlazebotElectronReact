import EightBallImg from "./plugins/8ball/8ball.png";
import FlipImg from "./plugins/flip/flip.png";
import GiveawayImg from "./plugins/giveaway/giveaway.png";
import HugImg from "./plugins/hug/hug.png";
import HydrateImg from "./plugins/hydrate/hydrate.png";
import LbImg from "./plugins/lb/lb.png";
import PollImg from "./plugins/poll/poll.png";
import ShoutOutImg from "./plugins/shout-out/shout-out.png";
import TimeImg from "./plugins/time/time.png";
import TimedMessageImg from "./plugins/timed-messages/timed-messages.png";

const plugins = [
  {
    name: "8Ball",
    image: EightBallImg,
    alt: "8ball",
    path: "features/8ball",
    activated: true,
  },
  {
    name: "Flip Coin",
    image: FlipImg,
    alt: "Flip Coin",
    path: "features/flipcoin",
    activated: true,
  },
  {
    name: "Giveaway",
    image: GiveawayImg,
    alt: "Giveaway",
    path: "features/giveaway",
    activated: true,
  },
  {
    name: "Hug",
    image: HugImg,
    alt: "Hug",
    path: "features/hug",
    activated: true,
  },
  {
    name: "Hydrate",
    image: HydrateImg,
    alt: "Hydrate",
    path: "features/hydrate",
    activated: true,
  },
  {
    name: "Leaderboard",
    image: LbImg,
    alt: "Leaderboard",
    path: "features/leaderboard",
    activated: true,
  },
  {
    name: "Poll System",
    image: PollImg,
    alt: "Poll",
    path: "features/poll",
    activated: false,
  },
  {
    name: "Shout Out",
    image: ShoutOutImg,
    alt: "Shout Out",
    path: "features/shoutout",
    activated: true,
  },
  {
    name: "Time",
    image: TimeImg,
    alt: "Time",
    path: "features/time",
    activated: true,
  },
  {
    name: "Timed Messages",
    image: TimedMessageImg,
    alt: "Timed Messages",
    path: "features/timedmessages",
    activated: true,
  },
];

export default plugins;

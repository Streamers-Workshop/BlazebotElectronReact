import Commands from "./bot-commands/cmds";
import Features from "./features/features.jsx";
import Games from "./games/games.jsx";
import AlertFollow from "./alert-message/follow";
import AlertJoined from "./alert-message/joined";
import AlertUnique from "./alert-message/unique";
import AlertSub from "./alert-message/sub";
import AlertSpell from "./alert-message/spell";
import AlertRaid from "./alert-message/raid";
import LevelSystem from "./level-system/user-data";
import AddPoints from "./level-system/plugins/add/add.jsx";
import GivePoints from "./level-system/plugins/give/give.jsx";
import ShowLevel from "./level-system/plugins/level/level.jsx";
import ShowPoints from "./level-system/plugins/points/points.jsx";
import Reset from "./level-system/reset/reset.jsx";
import Alerts from "./widgets/alerts/alerts.jsx";
import Labels from "./widgets/labels/labels.jsx";
import Chat from "./widgets/chat/chat.jsx";
import FollowWidget from "./widgets/follow-goal/follow";
import SubWidget from "./widgets/sub-goal/sub";
import ManaWidget from "./widgets/mana-goal/mana";
import ElixirWidget from "./widgets/elixir-goal/elixir";
import Spotify from "./spotify/spotify.jsx";
import Info from "./info/info.jsx";
import Connect from "./connect/connect.jsx";
import Account from "./account/account.jsx";

//features + games

import EightBall from "./features/plugins/8ball/8ball.jsx";
import FlipCoin from "./features/plugins/flip/flip.jsx";
import Giveaway from "./features/plugins/giveaway/giveaway.jsx";
import Hug from "./features/plugins/hug/hug.jsx";
import Hydrate from "./features/plugins/hydrate/hydrate.jsx";
import Leaderboard from "./features/plugins/lb/lb.jsx";
import Poll from "./features/plugins/poll/poll.jsx";
import ShoutOut from "./features/plugins/shout-out/shout-out.jsx";
import Time from "./features/plugins/time/time.jsx";
import TimedMessages from "./features/plugins/timed-messages/timed-messages.jsx";
import RockPaperScissors from "./games/plugins/rps/rps.jsx";
import RussianRoulette from "./games/plugins/rr/rr.jsx";

export const mainroutes = [
  {
    path: "/commands",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Commands</h2>
        </div>
        <Commands />
      </>
    ),
  },
  {
    path: "/features",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Bot Features</h2>
        </div>

        <Features />
      </>
    ),
  },
  {
    path: "/games",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Bot Games</h2>
        </div>
        <Games />
      </>
    ),
  },
  {
    path: "/alertmessage/follow",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Follow Alert Message</h2>
        </div>
        <AlertFollow />
      </>
    ),
  },
  {
    path: "/alertmessage/joined",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Joined Alert Message</h2>
        </div>
        <AlertJoined />
      </>
    ),
  },
  {
    path: "/alertmessage/unique",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Unique Alert Message</h2>
        </div>
        <AlertUnique />
      </>
    ),
  },
  {
    path: "/alertmessage/sub",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Sub Alert Message</h2>
        </div>
        <AlertSub />
      </>
    ),
  },
  {
    path: "/alertmessage/spell",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Spell Alert Message</h2>
        </div>
        <AlertSpell />
      </>
    ),
  },
  {
    path: "/alertmessage/raid",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Raid Alert Message</h2>
        </div>
        <AlertRaid />
      </>
    ),
  },
  {
    path: "/level/system",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Level and Points</h2>
        </div>
        <LevelSystem />
      </>
    ),
  },
  {
    path: "/level/addpoints",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Add Points</h2>
        </div>
        <AddPoints />
      </>
    ),
  },
  {
    path: "/level/givepoints",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Give Points</h2>
        </div>
        <GivePoints />
      </>
    ),
  },
  {
    path: "/level/showlevel",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Level</h2>
        </div>
        <ShowLevel />
      </>
    ),
  },
  {
    path: "/level/showpoints",
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Points</h2>
        </div>
        <ShowPoints />
      </>
    ),
  },
  {
    path: "/level/reset",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Reset System</h2>
        </div>
        <Reset />
      </>
    ),
  },
  {
    path: "/widgets/alerts",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Alerts</h2>
        </div>
        <Alerts />
      </>
    ),
  },

  {
    path: "/widgets/labels",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Labels</h2>
        </div>
        <Labels />
      </>
    ),
  },

  {
    path: "/widgets/chat",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Chat</h2>
        </div>
        <Chat />
      </>
    ),
  },
  {
    path: "/widgets/follow",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Follow Widget</h2>
        </div>
        <FollowWidget />
      </>
    ),
  },
  {
    path: "/widgets/sub",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Sub Widget</h2>
        </div>
        <SubWidget />
      </>
    ),
  },
  {
    path: "/widgets/mana",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Mana Widget</h2>
        </div>
        <ManaWidget />
      </>
    ),
  },
  {
    path: "/widgets/elixir",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Elixir Widget</h2>
        </div>
        <ElixirWidget />
      </>
    ),
  },
  {
    path: "/spotify",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Spotify</h2>
        </div>
        <Spotify />
      </>
    ),
  },
  {
    path: "/info",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Info</h2>
        </div>
        <Info />
      </>
    ),
  },
  {
    path: "/connect",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Connect Bot</h2>
        </div>
        <Connect />
      </>
    ),
  },
  {
    path: "/account",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Account</h2>
        </div>
        <Account />
      </>
    ),
  },
  {
    path: "/features/8ball",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <EightBall />
      </>
    ),
  },
  {
    path: "/features/flipcoin",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <FlipCoin />
      </>
    ),
  },
  {
    path: "/features/giveaway",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <Giveaway />
      </>
    ),
  },
  {
    path: "/features/hug",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <Hug />
      </>
    ),
  },
  {
    path: "/features/hydrate",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <Hydrate />
      </>
    ),
  },
  {
    path: "/features/leaderboard",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <Leaderboard />
      </>
    ),
  },
  {
    path: "/features/poll",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <Poll />
      </>
    ),
  },
  {
    path: "/features/shoutout",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <ShoutOut />
      </>
    ),
  },
  {
    path: "/features/time",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <Time />
      </>
    ),
  },
  {
    path: "/features/timedmessages",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <TimedMessages />
      </>
    ),
  },
  {
    path: "/games/rps",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <RockPaperScissors />
      </>
    ),
  },
  {
    path: "/games/rr",
    exact: true,
    main: () => (
      <>
        <div className="borderTitle">
          <h2>Features</h2>
        </div>
        <RussianRoulette />
      </>
    ),
  },
];

export default mainroutes;

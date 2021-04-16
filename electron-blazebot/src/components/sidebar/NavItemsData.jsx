export const NavItems = [
  {
    name: "Bot Commands",
    link: "/commands",
    open: false,
    withSubMenus: false,
  },
  {
    name: "Features",
    link: "/features",
    withSubMenus: false,
  },
  {
    name: "Games",
    link: "/games",
    withSubMenus: false,
  },
  {
    name: "Alert Messages",
    links: [
      { title: "Follow Message", to: "/alertmessage/follow" },
      { title: "Joined  Message", to: "/alertmessage/joined" },
      { title: "Unique Message", to: "/alertmessage/unique" },
      { title: "Sub Message", to: "/alertmessage/sub" },
      { title: "Spell Message", to: "/alertmessage/spell" },
      { title: "Raid Message", to: "/alertmessage/raid" },
    ],
    open: false,
    withSubMenus: true,
  },
  {
    name: "Level System",
    links: [
      { title: "Enable Level & Points", to: "/level/system" },
      { title: "Add Points", to: "/level/addpoints" },
      { title: "Give Points", to: "/level/givepoints" },
      { title: "Show Level", to: "/level/showlevel" },
      { title: "Show Points", to: "/level/showpoints" },
      { title: "Reset", to: "/level/reset" },
    ],
    open: false,
    withSubMenus: true,
  },
  {
    name: "Widgets",
    links: [
      { title: "Alerts", to: "/widgets/alerts" },
      { title: "Labels", to: "/widgets/labels" },
      { title: "Chat", to: "/widgets/chat" },
      { title: "Follow Widgets", to: "/widgets/follow" },
      { title: "Sub Widgets", to: "/widgets/sub" },
      { title: "Mana Widgets", to: "/widgets/mana" },
      { title: "Elixir Widgets", to: "/widgets/elixir" },
    ],
    open: false,
    withSubMenus: true,
  },
  {
    name: "Spotify",
    link: "/spotify",
    withSubMenus: false,
  },
  {
    name: "Info",
    link: "/info",
    withSubMenus: false,
  },
  {
    name: "Connect Bot",
    link: "/connect",
    withSubMenus: false,
  },
  {
    name: "Account",
    link: "/account",
    withSubMenus: false,
  },
];

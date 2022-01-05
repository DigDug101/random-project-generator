import {
  POSTGRES_LINK,
  MONGODB_LINK,
  PRISMA_LINK,
  MONGOOSE_LINK,
  AUTH_ZERO_LINK,
  NEXT_AUTH_LINK,
  HEROKU_LINK,
  NETLIFY_LINK,
  VERCEL_LINK,
  GRAPHQL_LINK,
  APOLLO_CLIENT,
  EXPRESS_LINK,
  STRIPE_LINK,
  CONTENTFUL_CMS_LINK,
  GRAPH_CMS_LINK,
  KEYSTONE_LINK,
  FIREBASE_LINK,
  CLOUDINARY_LINK,
  MDX_LINK,
  MDX_BUNDLER_LINK,
  MDSVEX_LINK,
  REMARK_LINK,
  GRAY_MATTER_LINK,
  UNSPLASH_LINK,
  PEXELS_LINK,
  TAILWIND_LINK,
  BOOTSTRAP_LINK,
  SASS_LINK,
  LESS_LINK,
  OPEN_WEATHER_LINK,
  CSS_GG_ICONS_LINK,
  ICONOIR_ICONS_LINK,
  ICONS8_ICONS_LINK,
  MOVIE_DATABASE_API_LINK,
  OMDB_API_LINK,
  JSON_PLACEHOLDER_LINK,
  FAKER_LINK,
  USA_DATA_API,
  RANDOM_USER_API,
  CHART_JS_LINK,
  RECHARTS_LINK,
  FRAPPE_CHARTS_LINK,
  VUE_CHART_JS_LINK,
  WIKIPEDIA_API_LINK,
  RICK_MORTY_API_LINK,
  BREAKING_BAD_API_LINK,
  LEAFLET_LINK,
  REACT_LEAFLET_LINK,
  VUE_LEAFLET_LINK,
  TWITTER_API_LINK,
  DISCORD_JS_LINK,
  SLATE_RICH_EDITOR_LINK,
  DRAFT_JS_RICH_EDITOR_LINK,
  REACT_DRAFT_RICH_EDITOR_LINK,
  TYPEWRITER_LINK,
  TIP_TAP_LINK,
  VUE_QUILL_EDITOR_LINK,
  VUE_HTML5_EDITOR_LINK,
  NPM_LINK,
  CREATE_REACT_LIBRARY_LINK,
  CHAKRA_UI_LINK,
  STYLED_COMPONENTS_LINK,
  SYSTEM_UI_LINK,
  STYLED_SYSTEM_LINK,
  REACT_DND_LINK,
  REACT_BEAUTIFUL_DND_LINK,
  VUE_EASY_DND_LINK,
  SVELTE_DND_ACTION_LINK,
} from "./links";

type Link = {
  src: string;
  text: string;
};

export type Project = {
  name: string;
  examples: Link[];
  links: Link[];
};

export const projectsList: Project[] = [
  {
    name: "Real-time Chat App",
    examples: [
      {
        src: "https://slack.com/",
        text: "Slack",
      },
      {
        src: "https://messenger.com/",
        text: "Messenger",
      },
      {
        src: "https://discord.com/",
        text: "Discord",
      },
    ],
    links: [
      {
        src: "https://socket.io/",
        text: "Socket.io",
      },
      FIREBASE_LINK,
      {
        src: "https://www.npmjs.com/package/emoji-mart",
        text: "emoji-mart - emoji picker",
      },
    ],
  },
  {
    name: "Social Media App",
    examples: [
      {
        src: "https://www.facebook.com/",
        text: "Facebook",
      },
      {
        src: "https://twitter.com/",
        text: "Twitter",
      },
      {
        src: "https://www.instagram.com/",
        text: "Instagram",
      },
    ],
    links: [
      POSTGRES_LINK,
      MONGODB_LINK,
      PRISMA_LINK,
      MONGOOSE_LINK,
      AUTH_ZERO_LINK,
      NEXT_AUTH_LINK,
      NETLIFY_LINK,
      HEROKU_LINK,
      VERCEL_LINK,
      GRAPHQL_LINK,
      APOLLO_CLIENT,
      EXPRESS_LINK,
    ],
  },
  {
    name: "E-commerce App",
    examples: [
      {
        src: "https://www.blissworld.com/",
        text: "Bliss",
      },
      {
        src: "https://shopdressup.com/",
        text: "Dress Up",
      },
      {
        src: "https://bohemiantraders.com/",
        text: "Bohemian",
      },
    ],
    links: [
      STRIPE_LINK,
      CONTENTFUL_CMS_LINK,
      GRAPH_CMS_LINK,
      KEYSTONE_LINK,
      FIREBASE_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
      CLOUDINARY_LINK,
    ],
  },
  {
    name: "Blog / Portfolio",
    examples: [
      {
        src: "https://medium.com/",
        text: "Medium",
      },
      {
        src: "https://gatsbystarterblogsource.gatsbyjs.io/",
        text: "Starter Blog",
      },
      {
        src: "https://www.jason.af/",
        text: "Jason Lengstorf",
      },
      {
        src: "https://dev.to/",
        text: "Dev.to",
      },
    ],
    links: [
      MDX_LINK,
      MDX_BUNDLER_LINK,
      MDSVEX_LINK,
      REMARK_LINK,
      GRAY_MATTER_LINK,
      CONTENTFUL_CMS_LINK,
      GRAPH_CMS_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
    ],
  },
  {
    name: "Forum App",
    examples: [
      {
        src: "https://www.reddit.com/",
        text: "Reddit",
      },
      {
        src: "https://stackoverflow.com/",
        text: "Stackoverflow",
      },
      {
        src: "https://forum.freecodecamp.org/",
        text: "FreeCodeCamp Forum",
      },
    ],
    links: [
      POSTGRES_LINK,
      MONGODB_LINK,
      PRISMA_LINK,
      MONGOOSE_LINK,
      AUTH_ZERO_LINK,
      NEXT_AUTH_LINK,
      NETLIFY_LINK,
      HEROKU_LINK,
      VERCEL_LINK,
      GRAPHQL_LINK,
      APOLLO_CLIENT,
      EXPRESS_LINK,
    ],
  },
  {
    name: "Music Streaming App",
    examples: [
      {
        src: "https://www.spotify.com/",
        text: "Spotify",
      },
      {
        src: "https://soundcloud.com/",
        text: "SoundCloud",
      },
      {
        src: "https://tidal.com/",
        text: "Tidal",
      },
    ],
    links: [
      POSTGRES_LINK,
      MONGODB_LINK,
      PRISMA_LINK,
      MONGOOSE_LINK,
      AUTH_ZERO_LINK,
      NEXT_AUTH_LINK,
      NETLIFY_LINK,
      HEROKU_LINK,
      VERCEL_LINK,
      GRAPHQL_LINK,
      APOLLO_CLIENT,
      EXPRESS_LINK,
    ],
  },
  {
    name: "Restaurant Landing Page",
    examples: [
      {
        src: "https://www.glowbalgroup.com/coast/",
        text: "Coast",
      },
      {
        src: "https://theflyingpigvan.com/",
        text: "The Flying Pig",
      },
      {
        src: "https://www.michiramen.com/",
        text: "Michi Ramen",
      },
    ],
    links: [
      UNSPLASH_LINK,
      PEXELS_LINK,
      TAILWIND_LINK,
      BOOTSTRAP_LINK,
      SASS_LINK,
      LESS_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
    ],
  },
  {
    name: "Weather App",
    examples: [
      {
        src: "https://reactjsexample.com/weather-application-built-using-reactjs-opencage-api-and-openweathermap-api/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/a-simple-weather-app-built-with-react/",
        text: "Example 2",
      },
      {
        src: "https://reactjsexample.com/build-a-weather-app-in-react-js-using-open-weather-api/",
        text: "Example 3",
      },
    ],
    links: [
      PEXELS_LINK,
      UNSPLASH_LINK,
      OPEN_WEATHER_LINK,
      CSS_GG_ICONS_LINK,
      ICONOIR_ICONS_LINK,
      ICONS8_ICONS_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
    ],
  },
  {
    name: "Productivity App",
    examples: [
      {
        src: "https://www.centered.app/",
        text: "Centered",
      },
      {
        src: "https://todoist.com/",
        text: "Todoist",
      },
      {
        src: "https://splode.github.io/pomotroid/",
        text: "Pomodoro App",
      },
    ],
    links: [
      KEYSTONE_LINK,
      FIREBASE_LINK,
      CONTENTFUL_CMS_LINK,
      CSS_GG_ICONS_LINK,
      ICONOIR_ICONS_LINK,
      ICONS8_ICONS_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
      {
        src: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
        text: "MDN - Window.localStorage",
      },
    ],
  },
  {
    name: "Movie Finder App",
    examples: [
      {
        src: "https://www.imdb.com/",
        text: "Imdb",
      },
      {
        src: "https://www.rottentomatoes.com/",
        text: "Rotten Tomatoes",
      },
      {
        src: "https://www.fandango.com/",
        text: "Fandango",
      },
    ],
    links: [MOVIE_DATABASE_API_LINK, OMDB_API_LINK, NETLIFY_LINK, VERCEL_LINK],
  },
  {
    name: "Admin Dashboard",
    examples: [
      {
        src: "https://dashboardpack.com/live-demo-preview/?livedemo=378772",
        text: "Cryptocurrency",
      },
      {
        src: "https://dashboardpack.com/live-demo-preview/?livedemo=353761",
        text: "Finance SaaS",
      },
      {
        src: "https://dashboardpack.com/live-demo-preview/?livedemo=378790",
        text: "Marketing",
      },
    ],
    links: [
      KEYSTONE_LINK,
      FIREBASE_LINK,
      CONTENTFUL_CMS_LINK,
      GRAPH_CMS_LINK,
      AUTH_ZERO_LINK,
      NEXT_AUTH_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
      JSON_PLACEHOLDER_LINK,
      FAKER_LINK,
      USA_DATA_API,
      RANDOM_USER_API,
      CHART_JS_LINK,
      RECHARTS_LINK,
      FRAPPE_CHARTS_LINK,
      VUE_CHART_JS_LINK,
    ],
  },
  {
    name: "Wiki App",
    examples: [
      {
        src: "https://en.wikipedia.org/wiki/Main_Page",
        text: "Wikipedia",
      },
      {
        src: "https://www.youtube.com/watch?v=YaioUnMw0mo",
        text: "Breaking Bad",
      },
      {
        src: "https://rickandmorty.fandom.com/wiki/Rickipedia",
        text: "Rick & Morty",
      },
    ],
    links: [
      WIKIPEDIA_API_LINK,
      RICK_MORTY_API_LINK,
      BREAKING_BAD_API_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
    ],
  },
  {
    name: "Plan Your Walk App",
    examples: [
      {
        src: "https://www.google.pl/maps/preview",
        text: "Google Maps",
      },
    ],
    links: [
      LEAFLET_LINK,
      REACT_LEAFLET_LINK,
      VUE_LEAFLET_LINK,
      CSS_GG_ICONS_LINK,
      ICONOIR_ICONS_LINK,
      ICONS8_ICONS_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
    ],
  },
  {
    name: "Chat Bot",
    examples: [
      {
        src: "https://www.youtube.com/watch?v=BmKXBVdEV0g",
        text: "Discord Bot",
      },
      {
        src: "https://www.youtube.com/watch?v=0gFzUYSbJwY",
        text: "Twitter Bot",
      },
    ],
    links: [TWITTER_API_LINK, DISCORD_JS_LINK, HEROKU_LINK],
  },
  {
    name: "Budget App",
    examples: [
      {
        src: "https://www.youtube.com/watch?v=XuFDcZABiDQ&t=168s",
        text: "Expense App",
      },
      {
        src: "https://dribbble.com/shots/4268847-Xpense",
        text: "Xpense",
      },
      {
        src: "https://dribbble.com/shots/4473274-Spend-Analysis",
        text: "Spend Analysis",
      },
    ],
    links: [
      FIREBASE_LINK,
      CONTENTFUL_CMS_LINK,
      GRAPH_CMS_LINK,
      AUTH_ZERO_LINK,
      NEXT_AUTH_LINK,
      STRIPE_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
    ],
  },
  {
    name: "Shopping List",
    examples: [
      {
        src: "https://www.goodhousekeeping.com/food-recipes/g26255008/best-grocery-shopping-list-apps/",
        text: "10 Grocery Shopping Apps",
      },
    ],
    links: [
      FIREBASE_LINK,
      CONTENTFUL_CMS_LINK,
      GRAPH_CMS_LINK,
      AUTH_ZERO_LINK,
      NEXT_AUTH_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
    ],
  },
  {
    name: "Notes App",
    examples: [
      {
        src: "https://todoist.com/",
        text: "Todoist",
      },
      {
        src: "https://evernote.com/",
        text: "Evernote",
      },
      {
        src: "https://obsidian.md/",
        text: "Obsidian",
      },
    ],
    links: [
      FIREBASE_LINK,
      CONTENTFUL_CMS_LINK,
      GRAPH_CMS_LINK,
      AUTH_ZERO_LINK,
      NEXT_AUTH_LINK,
      NETLIFY_LINK,
      VERCEL_LINK,
      SLATE_RICH_EDITOR_LINK,
      DRAFT_JS_RICH_EDITOR_LINK,
      REACT_DRAFT_RICH_EDITOR_LINK,
      TYPEWRITER_LINK,
      TIP_TAP_LINK,
      VUE_QUILL_EDITOR_LINK,
      VUE_HTML5_EDITOR_LINK,
    ],
  },
  {
    name: "Component Library",
    examples: [
      {
        src: "https://react-hot-toast.com/",
        text: "Toasts",
      },
      {
        src: "https://github.com/alexkatz/react-tiny-popover",
        text: "Popover",
      },
      {
        src: "https://github.com/reactjs/react-modal",
        text: "Modal",
      },
    ],
    links: [
      NPM_LINK,
      CREATE_REACT_LIBRARY_LINK,
      {
        src: "https://www.youtube.com/watch?v=N8d-CLmg3hw",
        text: "How To Make a React Component Lib",
      },
      {
        src: "https://www.youtube.com/watch?v=hf6Z8OZanec",
        text: "Build And Publish A React Component Lib",
      },
      {
        src: "https://www.youtube.com/watch?v=lWk5SntifCU",
        text: "React Components With Storybook",
      },
      {
        src: "https://www.youtube.com/watch?v=_TymiadmPrc",
        text: "How To Make and Publish a Svelte Library",
      },
      {
        src: "https://www.youtube.com/watch?v=0WqB6XwBCLc",
        text: "Create and Publish Vue Component Library",
      },
      {
        src: "https://www.freecodecamp.org/news/how-to-create-and-publish-a-vue-component-library/",
        text: "How to Create and Publish a Vue Component Library",
      },
    ],
  },
  {
    name: "Design System / Framework",
    examples: [CHAKRA_UI_LINK, TAILWIND_LINK, BOOTSTRAP_LINK],
    links: [
      NPM_LINK,
      STYLED_COMPONENTS_LINK,
      SASS_LINK,
      LESS_LINK,
      SYSTEM_UI_LINK,
      STYLED_SYSTEM_LINK,
      CREATE_REACT_LIBRARY_LINK,
    ],
  },
  {
    name: "Custom Hooks Library",
    examples: [
      {
        src: "https://usehooks.com/",
        text: "usehooks",
      },
      {
        src: "https://github.com/craig1123/react-recipes",
        text: "react-recipes",
      },
      {
        src: "https://github.com/stevenpersia/captain-hook",
        text: "captain-hook",
      },
      {
        src: "https://vueuse.org/",
        text: "VueUse",
      },
    ],
    links: [],
  },
  {
    name: "Trello Clone",
    examples: [
      {
        src: "https://trello.com/",
        text: "Trello",
      },
    ],
    links: [
      FIREBASE_LINK,
      POSTGRES_LINK,
      MONGODB_LINK,
      PRISMA_LINK,
      MONGOOSE_LINK,
      AUTH_ZERO_LINK,
      NEXT_AUTH_LINK,
      NETLIFY_LINK,
      HEROKU_LINK,
      VERCEL_LINK,
      GRAPHQL_LINK,
      APOLLO_CLIENT,
      EXPRESS_LINK,
      REACT_DND_LINK,
      REACT_BEAUTIFUL_DND_LINK,
      VUE_EASY_DND_LINK,
      SVELTE_DND_ACTION_LINK,
    ],
  },
  {
    name: "Calculator",
    examples: [
      {
        src: "https://codepen.io/mjijackson/pen/xOzyGX",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/calculator-app-challenge-built-with-react-js/",
        text: "Example 2",
      },
      {
        src: "https://reactjsexample.com/a-simple-calculator-app-built-using-tailwind-css-and-react-js/",
        text: "Example 3",
      },
    ],
    links: [NETLIFY_LINK, VERCEL_LINK],
  },
  {
    name: "Countdown Timer",
    examples: [
      {
        src: "https://reactjsexample.com/a-timer-counting-down-with-react-js/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/a-countdown-app-displaying-remaining-time-to-milestones-using-google-sheets-api/",
        text: "Example 2",
      },
      {
        src: "https://reactjsexample.com/dummy-event-countdown-made-with-gatsby-and-nes-css/",
        text: "Example 3",
      },
    ],
    links: [NETLIFY_LINK, VERCEL_LINK],
  },
  {
    name: "Quiz App",
    examples: [
      {
        src: "https://reactjsexample.com/a-simple-quiz-app-built-with-react-and-tailwind-css/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/us-citizenship-quiz-28-common-question-directly-from-uscis/",
        text: "Example 2",
      },
      {
        src: "https://reactjsexample.com/a-quiz-app-build-with-react-and-javascript/",
        text: "Example 3",
      },
    ],
    links: [
      {
        src: "https://opentdb.com/api_config.php",
        text: "OpenTrivia API",
      },
      NETLIFY_LINK,
      VERCEL_LINK,
    ],
  },
  {
    name: "Recipe App",
    examples: [
      {
        src: "https://reactjsexample.com/restaurant-menu-a-website-built-with-react-js-with-beautiful-ui/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/an-online-food-delivery-application-using-react-js-es6-bootstrap5-and-firebase/",
        text: "Example 2",
      },
      {
        src: "https://reactjsexample.com/a-catalog-of-recipes-built-in-react-and-redux/",
        text: "Example 3",
      },
    ],
    links: [
      {
        src: "https://www.themealdb.com/api.php",
        text: "TheMealDB API",
      },
      NETLIFY_LINK,
      VERCEL_LINK,
    ],
  },
  {
    name: "Memory Card Game",
    examples: [
      {
        src: "https://reactjsexample.com/memorygame-created-with-react-js-and-typescript/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/an-interactive-animated-card-memory-game-developed-with-react/",
        text: "Example 2",
      },
    ],
    links: [
      NETLIFY_LINK,
      VERCEL_LINK,
      {
        src: "https://www.youtube.com/watch?v=Txm71YeFY8g",
        text: "Build Memory Game with React Hooks",
      },
      {
        src: "https://www.youtube.com/watch?v=HxmJdlX5vmc",
        text: "Star Wars React Memory Game with Typescript",
      },
    ],
  },
  {
    name: "Drawing App",
    examples: [
      {
        src: "https://reactjsexample.com/a-simple-magic-paint-app-made-with-react/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/a-hooks-to-svg-drawing/",
        text: "Example 2",
      },
      {
        src: "https://reactjsexample.com/a-whiteboard-react-component-using-svg/",
        text: "Example 3",
      },
    ],
    links: [
      {
        src: "https://www.npmjs.com/package/react-canvas-draw",
        text: "React Canvas Draw",
      },
      {
        src: "https://www.npmjs.com/package/react-sketch-canvas",
        text: "React Sketch Canvas",
      },
      {
        src: "https://www.npmjs.com/package/vue-drawing-canvas",
        text: "Vue Drawing Canvas",
      },
      {
        src: "https://github.com/SharifClick/svelte-canvas-draw",
        text: "Svelte Canvas Draw",
      },
      NETLIFY_LINK,
      VERCEL_LINK,
    ],
  },
  {
    name: "Markdown Preview",
    examples: [
      {
        src: "https://reactjsexample.com/react-component-preview-markdown-text-in-web-browser/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/a-simple-react-js-markdown-editor-with-preview/",
        text: "Example 2",
      },
    ],
    links: [NETLIFY_LINK, VERCEL_LINK, REMARK_LINK, GRAY_MATTER_LINK],
  },
  {
    name: "Calendar",
    examples: [
      {
        src: "https://reactjsexample.com/react-calendar-component-with-support-for-multiple-views-and-events/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/family-bingo-a-ultra-lightweight-simple-christmas-themed-bingo-display-written-in-react/",
        text: "Example 2",
      },
      {
        src: "https://reactjsexample.com/beautiful-minimal-and-accessible-date-picker-for-react/",
        text: "Example 3",
      },
      {
        src: "https://reactjsexample.com/a-simple-react-datepicker-component-build-with-date-fns-and-chakra-ui/",
        text: "Example 4",
      },
    ],
    links: [NETLIFY_LINK, VERCEL_LINK],
  },
  {
    name: "Hangman Game",
    examples: [
      {
        src: "https://reactjsexample.com/a-hangman-game-made-using-react-js/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/a-hangman-game-built-with-react-and-typescript/",
        text: "Example 2",
      },
    ],
    links: [
      NETLIFY_LINK,
      VERCEL_LINK,
      {
        src: "https://www.youtube.com/watch?v=jj0W8tYX_q8",
        text: "Build Hangman With React",
      },
    ],
  },
  {
    name: "Tic-Tac-Toe Game",
    examples: [
      {
        src: "https://reactjsexample.com/the-classic-tic-tac-toe-game-built-with-react/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/tic-tac-toe-game-made-with-react/",
        text: "Example 2",
      },
      {
        src: "https://reactjsexample.com/react-tutorial-tic-tac-toe-game-with-typescript-and-hooks/",
        text: "Example 3",
      },
    ],
    links: [
      NETLIFY_LINK,
      VERCEL_LINK,
      {
        src: "https://www.youtube.com/watch?v=08r9mDQvXpU",
        text: "React.js | Complete Build | Tic Tac Toe Game with Hooks (2020)",
      },
      {
        src: "https://www.youtube.com/watch?v=it54tShOsuI",
        text: "React.js Tic Tac Toe Game in 30 Minutes",
      },
      {
        src: "https://www.youtube.com/watch?v=O7lLLMTeTVo",
        text: "Tic Tac Toe with React.js",
      },
    ],
  },
  {
    name: "Rock-Paper-Scissors Game",
    examples: [
      {
        src: "https://reactjsexample.com/rock-paper-scissors-game-built-using-react-js/",
        text: "Example 1",
      },
    ],
    links: [
      NETLIFY_LINK,
      VERCEL_LINK,
      {
        src: "https://www.youtube.com/watch?v=TIefmKAWMTo",
        text: "Rock Paper Scissors in React vs JavaScript",
      },
      {
        src: "https://www.youtube.com/watch?v=Fuml_CO6uvo",
        text: "Rock Paper Scissors With ReactJs",
      },
      {
        src: "https://www.youtube.com/watch?v=tCSaSDgz2Hw",
        text: "Build Rock, Paper and Scissors Game with React JS",
      },
    ],
  },
  {
    name: "Snake Game",
    examples: [
      {
        src: "https://reactjsexample.com/a-simple-snake-game-created-with-the-react/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/a-simple-snake-game-base-on-react/",
        text: "Example 2",
      },
    ],
    links: [
      NETLIFY_LINK,
      VERCEL_LINK,
      {
        src: "https://www.youtube.com/watch?v=OrpJdVP-hO4",
        text: "React JS | Snake Game with just 100 lines of code!",
      },
      {
        src: "https://www.youtube.com/watch?v=dFRiNUp-FT0",
        text: "let’s write a Snake game in plain JavaScript",
      },
      {
        src: "https://www.youtube.com/watch?v=QTcIXok9wNY",
        text: "How To Code The Snake Game In Javascript",
      },
    ],
  },
  {
    name: "Javascript Game using Phaser.js",
    examples: [
      {
        src: "https://flappybird.io/",
        text: "Flappy Bird",
      },
      {
        src: "https://en.wikipedia.org/wiki/Super_Mario",
        text: "Super Mario",
      },
      {
        src: "https://en.wikipedia.org/wiki/List_of_Space_Invaders_video_games",
        text: "Space Invaders",
      },
    ],
    links: [
      NETLIFY_LINK,
      VERCEL_LINK,
      {
        src: "https://www.youtube.com/c/Ourcadehq/featured",
        text: "Ourcade - youtube channel, all about Phaser.js",
      },
    ],
  },
  {
    name: "Typing Game",
    examples: [
      {
        src: "https://reactjsexample.com/a-typing-test-website-build-with-react/",
        text: "Example 1",
      },
      {
        src: "https://reactjsexample.com/practice-code-typing-with-top-1000-keywords-of-the-most-popular-programming-languages/",
        text: "Example 2",
      },
    ],
    links: [],
  },
];

- #frontend

  frontend project.

  this project use [webpack](https://webpack.js.org/) + [vue.js](https://jp.vuejs.org/) + [typescript](https://www.typescriptlang.org/)

  ## Getting Started

  ### Project setup

  npm installation required

  ```
  cd [project path]
  npm install
  ```

  ### Compiles and hot-reloads for development

  ```
  npm run serve // run project
  ```

  ### Compiles and minifies for production

  ```
  npm run build // build project
  ```

  ### Open blowser

  ```
  http://localhost:9000
  ```

  ## Functions

  - API connection
  - Language en jp
  - chart lib import

## Structure
frontend/
├── public/ # pure static assets (directly copied)
│ └── index.html # index.html template
│ └── _config.ts # config language
├── src/ # project root
│ ├── assets/ # module assets (processed by webpack)
│ │ └── json/ # store Constant, message...
│ │ │ └── Common.json # Store constants
│ │ │ └── Message.json # message, language constants
│ │ └── scss/ # user styles
│ ├── commons/ # Util
│ ├── components/ # ui components
│ ├── service/ # module Service, API service
│ ├── router/ # routing
│ ├── store/ # Vuex
│ ├── views/ # ui views
│ ├── App.vue # main app component
│ └── main.js # app entry file
│ └── shims-json.d.ts # declare module json file
│ └── shims-vue.d.ts # declare module vue file
│ └── shims-tsx.d.ts # declare module tsx file
├── test/
│ └── unit/ # unit tests
├── .eslintrc.js # eslint config
├── .gitignore # defaults for gitignore
├── .postcssrc.js # postcss config
├── README.md
├── tsconfig.md # type scipt config
├── babel.config.js # babel config
├── vue.config.js # vue-cli config
└── package.json # build scripts and dependencies

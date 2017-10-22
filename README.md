# Bluebyte Photo Stories


This README assumes you have either npm or yarn installed.

```
   $ npm install
   $ npm start

   # OR

   $ yarn install
   $ yarn start
```

All the required code for the application is in the src folder, follow the structure like so.
Containers are "views" that are smart components that load our data.
Components are "presenters" that are dumb components and only receive data from higher up (Smart components)

In terms of the API, it is found in the Services folder, and is basically a HTTP client that loads a json file from gist.github.

The package manager used is yarn, the bundler used is webpack and can be found in the config, however the config is a boilerplate from the scaffolding tool
[create-react-app](https://github.com/facebookincubator/create-react-app).

I changed the loaders in webpack to support scss as a preprocessor, however I run everything through postcss in the end just in case.


[Github URL](https://github.com/Stenkilde/test123).
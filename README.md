React Starter for frontend projects
(Typescript + Helmet + Redux + Axios + React Router + SASS)

# Getting Started

Clone this repository

```bash
git clone https://github.com/Startaideia/startaideia-react-starter.git
rm -rf .git
```

Install npm dependencies

```bash
yarn install // or npm install
```

Start development mode

```bash
yarn start // npm run start
```

# Folder structure

## app

Here is where you will find our master component. It initializates React Helmet + Redux + React Router.

## components

All application's components are inside this folder. By default, it has a navbar component, used in HomeLayout.

## config

By default, there are two configuration files, one for production and another one for development. The development file is used by default, and the production file is used when a production build is genereted using yarn production (npm run production);

## layouts

Application's layout components.

## pages

Application's pages components.

## services

Application's typescript services. It has a axios client created by default, identified as serverService.

## store

Redux setup. It has a appReducer and redux-thunk installed by default. The appReducer contains the application title, binded to react helmet.

<h1 align="center">Weather - Readme</h1>
<p align="center">
  <strong>
    Simple weather weather app with Pirate Weather API and Geonames API
  </strong>
</p>
<div align="center">
  <a href="https://www.frontendmentor.io/home">
    <img src="_for_readme/banner.png">
  </a>
</div>

<br>

# Overview :sparkles:

## About
Simple weather page in glassmorphism style that gives detailed data about current weather and next 7 days forecast.

Check out the [live version](https://pasek108.github.io/Weather/).

<br>

![preview](/_for_readme/preview.png)

## Technologies
Languages:
- JavaScript
- HTML
- CSS

Libraries and frameworks:
- [React](https://legacy.reactjs.org/blog/2020/10/20/react-v17.html) 19.1.10
- [Pirate Weather](https://pirateweather.net) 
- [Geonames API](https://www.geonames.org).
- [Erik Flowers Weather Icons](http://erikflowers.github.io/weather-icons/)
  
Programs:
- [VSCode](https://code.visualstudio.com)
- [ShareX](https://getsharex.com)

## Features
- Detailed weather for the chosen location  
- 7-day forecast  
- Clock  
- Search for location  
- Language selection  
- Glassmorphic style  
- Responsive design  

## Setup
- Use [live version](https://pasek108.github.io/Weather/).

- Download this repository and:
  - Open project in VSCode
  - Run `npm install` to install all the dependencies
  - Run  `npm run dev` to start development sever
  - Open generated address in the browser

- Deployment for GitHub:
  - Run `npm run build`
  - Rename generated `/dist` folder to `/docs`
  - In `/docs/index.html` change `/favicon.ico` to `/Weather/favicon.ico` and all `/assets/...` to `/Weather/assets/...`
  - In `/docs/index-***.css` replace all `/assets/` with `/Weather/assets/`

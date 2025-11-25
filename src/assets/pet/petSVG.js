export const littleChickSanta = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible"><style>
  @keyframes little-chick-move-head {
  0% {
  -webkit-transform:translate(6px, -2px) rotate(0deg);
  -ms-transform:translate(6px, -2px) rotate(0deg);
  -o-transform:translate(6px, -2px) rotate(0deg);
  -moz-transform:translate(6px, -2px) rotate(0deg);
  transform:translate(6px, -2px) rotate(0deg);
  }
  50% {
  -webkit-transform:translate(8px, -2.2px) rotate(21deg);
  -ms-transform:translate(8px, -2.2px) rotate(21deg);
  -o-transform:translate(8px, -2.2px) rotate(21deg);
  -moz-transform:translate(8px, -2.2px) rotate(21deg);
  transform:translate(8px, -2.2px) rotate(21deg);
  }
  100% {
  -webkit-transform:translate(6px, -2px) rotate(0deg);
  -ms-transform:translate(6px, -2px) rotate(0deg);
  -o-transform:translate(6px, -2px) rotate(0deg);
  -moz-transform:translate(6px, -2px) rotate(0deg);
  transform:translate(6px, -2px) rotate(0deg);
  }
  }

  @keyframes little-chick-move-leg {
  0% {
  -webkit-transform:translate(2px, 6px) rotate(0deg);
  -ms-transform:translate(2px, 6px) rotate(0deg);
  -o-transform:translate(2px, 6px) rotate(0deg);
  -moz-transform:translate(2px, 6px) rotate(0deg);
  transform:translate(2px, 6px) rotate(0deg);
  }
  50% {
  -webkit-transform:translate(2px, 6px) rotate(3deg);
  -ms-transform:translate(2px, 6px) rotate(3deg);
  -o-transform:translate(2px, 6px) rotate(3deg);
  -moz-transform:translate(2px, 6px) rotate(3deg);
  transform:translate(2px, 6px) rotate(3deg);
  }
  100% {
  -webkit-transform:translate(2px, 6px) rotate(0deg);
  -ms-transform:translate(2px, 6px) rotate(0deg);
  -o-transform:translate(2px, 6px) rotate(0deg);
  -moz-transform:translate(2px, 6px) rotate(0deg);
  transform:translate(2px, 6px) rotate(0deg);
  }
  }

  #little-chick-head {
  animation-name:little-chick-move-head;
  animation-duration:1s;
  animation-iteration-count:infinite;
  }

  #little-chick-leg {
  animation-name:little-chick-move-leg;
  animation-duration:0.5s;
  animation-iteration-count:360;
  animation-timing-function: ease-in;
  }
</style>

  <g id="little-chick-14" transform="translate(10, 10)">
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="300" viewBox="0 0 300 150" fill="none" overflow="visible">
      <g id="little-chick-shadow" transform="translate(-2, 2)">
        <rect width="12" height="3" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.41422 2.12132)" fill="#6F6F6F" fill-opacity="0.1"/>
        <rect width="10" height="1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.41422 3.53553)" fill="#6F6F6F" fill-opacity="0.1"/>
        <rect width="8" height="1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.41422 4.94975)" fill="#6F6F6F" fill-opacity="0.1"/>
      </g>

      <g id="little-chick-leg" transform="translate(2, 6)">
        <rect width="2" height="2" fill="#FF6F0F"/>
        <rect x="1" y="1" width="2" height="1" fill="#FF6F0F"/>
      </g>

      <g id="little-chick-body">
        <rect width="6" height="1" transform="matrix(-1 0 0 1 7 4)" fill="#FFD600"/>
        <rect x="3" y="5" width="5" height="2" fill="white"/>
        <rect x="3" y="5" width="5" height="2" fill="#FFD600"/>
        <rect width="9" height="3" transform="matrix(-1 0 0 1 12 4)" fill="#FFD600"/>
        <rect width="6" height="1" transform="matrix(-1 0 0 1 11 8)" fill="#FFD600"/>
        <rect width="7" height="1" transform="matrix(-1 0 0 1 11 7)" fill="#FFD600"/>
        <rect width="4" height="1" transform="matrix(-1 0 0 1 10 9)" fill="#FFD600"/>
        <rect width="6" height="1" transform="matrix(-1 0 0 1 7 1)" fill="#FFD600"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 3 5)" fill="#FFD600"/>
        <rect width="3" height="1" transform="matrix(-1 0 0 1 5 0)" fill="#FFD600"/>
        <rect width="7" height="2" transform="matrix(-1 0 0 1 7 2)" fill="#FFD600"/>
        <rect x="1" y="2" width="5" height="2" fill="white"/>
        <rect x="1" y="2" width="5" height="2" fill="#FFD600"/>
        <rect x="2" y="1" width="3" height="2" fill="white"/>
        <rect x="2" y="1" width="3" height="2" fill="#FFD600"/>
        <rect x="2" y="3" width="5" height="2" fill="white"/>
        <rect x="2" y="3" width="5" height="2" fill="#FFD600"/>
        <rect x="4" y="2" width="7" height="5" fill="white"/>
        <rect x="4" y="2" width="7" height="5" fill="#FFD600"/>
        <rect x="5" y="7" width="5" height="1" fill="white"/>
        <rect x="5" y="7" width="5" height="1" fill="#FFD600"/>
        <rect x="6" y="8" width="4" height="1" fill="white"/>
        <rect x="6" y="8" width="4" height="1" fill="#FFD600"/>
      </g>

      <g id="little-chick-head" transform="translate(6,-2)">
        <rect x="1" y="1" width="4" height="6" fill="#FFD600"/>
        <rect x="2" y="3" width="1" height="1" fill="black"/>
        <rect x="4" y="2" width="1" height="1" fill="black"/>
        <rect width="1" height="4" transform="matrix(-1 0 0 1 1 1)" fill="#FFD600"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 5 1)" fill="#FFD600"/>
        <rect width="1" height="4" transform="matrix(-1 0 0 1 6 2)" fill="#FFD600"/>
        <rect width="3" height="1" transform="matrix(-1 0 0 1 4 0)" fill="#FFD600"/>
        <rect x="4" y="4" width="2" height="2" fill="#FF6F0F"/>
        <rect x="5" y="5" width="2" height="1" fill="#FF6F0F"/>
        <g id="little-chick-santa-hat" transform="translate(-0.5, -3.7)">
          <rect y="2.5" width="2.66667" height="0.666667" fill="#E2141F"/>
          <rect x="0.666687" y="4.5" width="5.33333" height="1.33333" fill="#F5F5F7"/>
          <rect y="4.5" width="5.33333" height="0.666667" fill="#E2141F"/>
          <rect y="4.5" width="4.66667" height="0.666667" fill="#E2141F"/>
          <rect x="0.666687" y="3.83334" width="4.66667" height="0.666667" fill="#E2141F"/>
          <rect x="0.666687" y="3.61113" width="4" height="0.666667" fill="#E2141F"/>
          <rect x="0.666687" y="3.16667" width="4" height="1.33333" fill="#E2141F"/>
          <rect x="0.666687" y="1.83334" width="2.66667" height="1.33333" fill="#E2141F"/>
          <rect x="0.666687" y="1.16667" width="1.33333" height="1.33333" fill="#E2141F"/>
          <rect y="0.5" width="1.33333" height="1.33333" fill="#F5F5F7"/>
          <rect x="0.666687" y="2.5" width="3.33333" height="1.33333" fill="#E2141F"/>
          <rect x="0.666687" y="3.16667" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="1.33331" y="3.16667" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="0.666687" y="3.83333" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="1.33331" y="3.83333" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="0.666687" y="3.16667" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="1.33331" y="3.16667" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="2" y="3.16667" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="0.666687" y="1.16667" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="2.66669" y="3.16667" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
        </g>
      </g>
    </svg>
  </g>
</svg>`;

export const slothSunglasses = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible"><style>
  @keyframes sloth-14-head-move {
  0% {
  transform: translate(0px, 0px);
  }
  50% {
  transform: translate(-0.5px, 0px);
  }
  100% {
  transform: translate(0px, 0px);
  }
  }

  @keyframes sloth-14-leg-left-move {
  0% {
  transform: translate(3px, 11px);
  }
  50% {
  transform: translate(3px, 12px);
  }
  100% {
  transform: translate(3px, 11px);
  }
  }

  @keyframes sloth-14-leg-right-move {
  0% {
  transform: translate(7px, 11px);
  }
  50% {
  transform: translate(7px, 12px);
  }
  100% {
  transform: translate(7px, 11px);
  }
  }

  #sloth-14-head {
  animation-name: sloth-14-head-move;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  }

  #sloth-14-leg-left {
  animation-name: sloth-14-leg-left-move;
  animation-duration: 3s;
  animation-iteration-count:infinite;
  animation-timing-function: ease-in-out;
  }

  #sloth-14-leg-right {
  animation-name: sloth-14-leg-right-move;
  animation-duration: 3s;
  animation-delay: 0.5s;
  animation-iteration-count:infinite;
  animation-timing-function: ease-in-out;
  }

</style>
  <g id="sloth-14" transform="translate(0, 14)">
    <svg width="600" height="300" viewBox="0 0 200 100" fill="none" overflow="visible">
      <g id="sloth-14-shadow" transform="translate(0, 14.5)">
        <rect y="0.75" width="11" height="1.5" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="0.846191" y="0.375" width="9.30769" height="0.375" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="0.846191" y="2.25" width="9.30769" height="0.375" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="1.69238" width="7.61539" height="0.375" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="1.69238" y="2.625" width="7.61539" height="0.375" fill="#2B4447" fill-opacity="0.1"/>
      </g>
      <g id="sloth-14-leg-left" transform="translate(3, 11)">
        <rect width="2" height="5" transform="matrix(-1 0 0 1 2 0)" fill="#765D49"/>
        <rect width="1" height="5" transform="matrix(-1 0 0 1 1 0)" fill="black" fill-opacity="0.1"/>
        <rect y="4" width="2" height="1" fill="#FFE3C6"/>
      </g>
      <g id="sloth-14-leg-right" transform="translate(7, 11)">
        <rect width="2" height="5" transform="matrix(-1 0 0 1 2 0)" fill="#765D49"/>
        <rect width="1" height="5" transform="matrix(-1 0 0 1 1 0)" fill="black" fill-opacity="0.1"/>
        <rect y="4" width="2" height="1" fill="#FFE3C6"/>
      </g>
      <g id="sloth-14-body" transform="translate(0, 5)">
        <rect width="7" height="9" transform="matrix(-1 0 0 1 9 0)" fill="#765D49"/>
        <rect width="9" height="6" transform="matrix(-1 0 0 1 10 2)" fill="#765D49"/>
        <rect width="10" height="3" transform="matrix(-1 0 0 1 10 5)" fill="#765D49"/>
        <rect width="8" height="5" transform="matrix(-1 0 0 1 9 4)" fill="#765D49"/>
        <rect width="11" height="3" transform="matrix(-1 0 0 1 11 4)" fill="#765D49"/>
        <rect width="6" height="9" transform="matrix(-1 0 0 1 8 1)" fill="#765D49"/>
        <rect width="5" height="5" transform="matrix(-1 0 0 1 8 3)" fill="#FFE3C6"/>
        <rect width="3" height="5" transform="matrix(-1 0 0 1 7 2)" fill="#FFE3C6"/>
        <rect width="2" height="1" transform="matrix(-1 0 0 1 4 9)" fill="black" fill-opacity="0.1"/>
        <rect x="1" y="8" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect y="5" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect y="4" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="10" y="6" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="2" transform="matrix(-1 0 0 1 3 0)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="2" transform="matrix(-1 0 0 1 2 2)" fill="black" fill-opacity="0.1"/>
        <rect y="7" width="1" height="1" fill="#FFE3C6"/>
        <rect x="10" y="6" width="1" height="1" fill="#FFE3C6"/>
      </g>
      <g id="sloth-14-head">
        <rect x="3" width="5" height="7" fill="#765D49"/>
        <rect x="2" width="7" height="7" fill="#765D49"/>
        <rect x="1" y="1" width="9" height="6" fill="#765D49"/>
        <rect x="1" y="1" width="9" height="5" fill="#765D49"/>
        <rect y="2" width="11" height="4" fill="#765D49"/>
        <rect x="1" y="2" width="9" height="4" fill="#FFE3C6"/>
        <rect x="1" y="5" width="9" height="1" fill="#FFE3C6"/>
        <rect x="2" y="1" width="7" height="5" fill="#FFE3C6"/>
        <rect x="3" y="1" width="5" height="5" fill="#D9D9D9"/>
        <rect x="3" width="5" height="6" fill="#FFE3C6"/>
        <rect x="4" y="2" width="1" height="1" fill="black"/>
        <rect x="8" y="2" width="1" height="1" fill="black"/>
        <rect x="5" y="4" width="3" height="1" fill="black"/>
        <rect x="3" width="5" height="1" fill="#765D49"/>
        <rect x="1" y="1" width="2" height="1" fill="#765D49"/>
        <rect x="2" width="1" height="2" fill="#765D49"/>
        <rect y="5" width="3" height="1" fill="#765D49"/>
        <rect x="9" y="5" width="1" height="1" fill="#765D49"/>
        <rect y="3" width="2" height="3" fill="#765D49"/>
        <rect x="1" y="2" width="1" height="1" fill="#765D49"/>
        <rect x="5" width="3" height="2" fill="#765D49"/>
        <rect x="1" y="6" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect y="5" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect y="4" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="3" y="5" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="9" y="5" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="2" y="4" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="5" y="2" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="4" y="2" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="4" y="1" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="3" y="1" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="3" y="2" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="2" y="2" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="2" y="3" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="3" y="3" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="4" y="3" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="7" y="2" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="8" y="1" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 9 3)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 10 2)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 10 3)" fill="black" fill-opacity="0.1"/>
        <rect x="2.85718" y="1.85712" width="3.85714" height="0.428571" fill="black"/>
        <rect x="2.42871" y="1.42859" width="0.428571" height="0.428571" fill="black"/>
        <rect x="2" y="1" width="0.428571" height="0.428571" fill="black"/>
        <rect x="3.28589" y="2.28571" width="3" height="0.428571" fill="black"/>
        <rect x="3.71436" y="2.71429" width="2.14286" height="0.428571" fill="black"/>
        <rect x="6.71436" y="1.85712" width="3.85714" height="0.428571" fill="black"/>
        <rect x="7.14282" y="2.28571" width="3" height="0.428571" fill="black"/>
        <rect x="7.57153" y="2.71429" width="2.14286" height="0.428571" fill="black"/>
        <rect x="3.71436" y="2.28571" width="0.428571" height="0.428571" fill="white"/>
        <rect x="4.14282" y="2.71429" width="0.428571" height="0.428571" fill="white"/>
        <rect x="7.57153" y="2.28571" width="0.428571" height="0.428571" fill="white"/>
        <rect x="8" y="2.71429" width="0.428571" height="0.428571" fill="white"/>
      </g>
    </svg>
  </g>
</svg>`;
export const gooseSunglasses = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible"> <style>
  @keyframes move-head {
  0% {
  -webkit-transform:translate(7px, 0px);
  -ms-transform:translate(7px, 0px);
  -o-transform:translate(7px, 0px);
  -moz-transform:translate(7px, 0px);
  transform:translate(7px, 0px);
  }
  50% {
  -webkit-transform:translate(7px, -0.5px);
  -ms-transform:translate(7px, -0.5px);
  -o-transform:translate(7px, -0.5px);
  -moz-transform:translate(7px, -0.5px);
  transform:translate(7px, -0.5px);
  }
  100% {
  -webkit-transform:translate(7px, 0px);
  -ms-transform:translate(7px, 0px);
  -o-transform:translate(7px, 0px);
  -moz-transform:translate(7px, 0px);
  transform:translate(7px, 0px);
  }
  }

  @keyframes move-leg {
  0% {
  -webkit-transform:rotate(0deg);
  -ms-transform:rotate(0deg);
  -o-transform:rotate(0deg);
  -moz-transform:rotate(0deg);
  transform:rotate(0deg);
  }
  50% {
  -webkit-transform:rotate(1deg);
  -ms-transform:rotate(1deg);
  -o-transform:rotate(1deg);
  -moz-transform:rotate(1deg);
  transform:rotate(1deg);
  }
  100% {
  -webkit-transform:rotate(0deg);
  -ms-transform:rotate(0deg);
  -o-transform:rotate(0deg);
  -moz-transform:rotate(0deg);
  transform:rotate(0deg);
  }
  }

  #head {
  animation-name:move-head;
  animation-duration:1s;
  animation-iteration-count:infinite;
  }

  #leg {
  animation-name:move-leg;
  animation-duration:0.5s;
  animation-iteration-count:360;
  animation-timing-function: ease-in;
  }
</style>

  <g id="goose-14" transform="translate(10, 10)">
    <svg width="600" height="300" viewBox="0 0 200 100" fill="none" overflow="visible">
      <g id="shadow" transform="translate(-4, -1)">
        <rect width="7.55862" height="1" transform="matrix(0.679659 0.733528 0.733528 -0.679659 3.95308 10.8252)" fill="#6F6F6F" fill-opacity="0.1"/>
        <rect width="7.55862" height="1" transform="matrix(0.679659 0.733528 0.733528 -0.679659 10.5548 4.70828)" fill="#6F6F6F" fill-opacity="0.1"/>
        <rect width="17.6368" height="4" transform="matrix(0.679659 0.733528 0.733528 -0.679659 2.72881 5.08992)" fill="#6F6F6F" fill-opacity="0.1"/>
        <rect width="15.1172" height="1" transform="matrix(0.679659 0.733528 0.733528 -0.679659 2.85149 6.69365)" fill="#6F6F6F" fill-opacity="0.1"/>
        <rect width="12.5977" height="1" transform="matrix(0.679659 0.733528 0.733528 -0.679659 2.97418 8.29739)" fill="#6F6F6F" fill-opacity="0.1"/>
        <rect width="15.1172" height="1" transform="matrix(0.679659 0.733528 0.733528 -0.679659 6.51913 3.29536)" fill="#6F6F6F" fill-opacity="0.1"/>
        <rect width="12.5977" height="1" transform="matrix(0.679659 0.733528 0.733528 -0.679659 8.10888 3.53978)" fill="#6F6F6F" fill-opacity="0.1"/>
      </g>
      <g id="head" transform="translate(7)">
        <rect x="1" y="1" width="6" height="11" fill="white"/>
        <rect width="3" height="2" transform="matrix(-1 0 0 1 8 4)" fill="#FFA713"/>
        <rect width="3" height="2" transform="matrix(-1 0 0 1 9 5)" fill="#FFA713"/>
        <rect width="2" height="1" transform="matrix(-1 0 0 1 9 7)" fill="#FFA713"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 7 3)" fill="#FFA713"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 10 6)" fill="#FFA713"/>
        <rect x="3" y="3" width="1" height="1" fill="black"/>
        <rect x="6" y="2" width="1" height="1" fill="black"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 2 1)" fill="#D9D9D9"/>
        <rect width="1" height="10" transform="matrix(-1 0 0 1 1 2)" fill="#D9D9D9"/>
        <rect width="1" height="3" transform="matrix(-1 0 0 1 8 8)" fill="#D9D9D9"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 7 1)" fill="#D9D9D9"/>
        <rect width="1" height="2" transform="matrix(-1 0 0 1 8 2)" fill="#D9D9D9"/>
        <rect width="4" height="1" transform="matrix(-1 0 0 1 6 0)" fill="#D9D9D9"/>
      </g>
      <g id="leg">
        <g id="leg-in" transform="translate(5,8)">
          <rect width="2" height="4" transform="matrix(-1 0 0 1 2 0)" fill="#FFA713"/>
        </g>
      </g>
      <g id="body">
        <rect width="4" height="1" transform="matrix(-1 0 0 1 6 0)" fill="#D9D9D9"/>
        <rect width="6" height="1" transform="matrix(-1 0 0 1 7 1)" fill="#D9D9D9"/>
        <rect width="8" height="1" transform="matrix(-1 0 0 1 8 2)" fill="#D9D9D9"/>
        <rect width="8" height="1" transform="matrix(-1 0 0 1 8 3)" fill="#D9D9D9"/>
        <rect width="9" height="1" transform="matrix(-1 0 0 1 9 4)" fill="#D9D9D9"/>
        <rect width="8" height="1" transform="matrix(-1 0 0 1 9 5)" fill="#D9D9D9"/>
        <rect width="8" height="1" transform="matrix(-1 0 0 1 10 6)" fill="#D9D9D9"/>
        <rect width="9" height="1" transform="matrix(-1 0 0 1 12 7)" fill="#D9D9D9"/>
        <rect width="11" height="1" transform="matrix(-1 0 0 1 15 8)" fill="#D9D9D9"/>
        <rect width="10" height="1" transform="matrix(-1 0 0 1 15 9)" fill="#D9D9D9"/>
        <rect width="9" height="1" transform="matrix(-1 0 0 1 15 10)" fill="#D9D9D9"/>
        <rect width="7" height="1" transform="matrix(-1 0 0 1 14 11)" fill="#D9D9D9"/>
        <rect width="5" height="1" transform="matrix(-1 0 0 1 13 12)" fill="#D9D9D9"/>
        <rect width="2" height="1" transform="matrix(-1 0 0 1 12 13)" fill="#D9D9D9"/>
        <rect x="1" y="2" width="6" height="3" fill="white"/>
        <rect x="1" y="2" width="6" height="3" fill="white"/>
        <rect x="2" y="1" width="4" height="1" fill="white"/>
        <rect x="2" y="1" width="4" height="1" fill="white"/>
        <rect x="2" y="3" width="6" height="3" fill="white"/>
        <rect x="2" y="3" width="6" height="3" fill="white"/>
        <rect x="3" y="4" width="6" height="3" fill="white"/>
        <rect x="3" y="4" width="6" height="3" fill="white"/>
        <rect x="4" y="5" width="6" height="3" fill="white"/>
        <rect x="4" y="5" width="6" height="3" fill="white"/>
        <rect x="5" y="6" width="6" height="3" fill="white"/>
        <rect x="5" y="6" width="6" height="3" fill="white"/>
        <rect x="6" y="7" width="6" height="3" fill="white"/>
        <rect x="6" y="7" width="6" height="3" fill="white"/>
        <rect x="7" y="8" width="7" height="3" fill="white"/>
        <rect x="7" y="8" width="7" height="3" fill="white"/>
        <rect x="8" y="9" width="5" height="3" fill="white"/>
        <rect x="8" y="9" width="5" height="3" fill="white"/>
        <rect x="10" y="12" width="2" height="1" fill="white"/>
        <rect x="10" y="12" width="2" height="1" fill="white"/>
      </g>

      <g id="14-sunglasses" transform="translate(6, -1)">
        <rect x="2.85233" y="4.42468" width="3.85714" height="0.428571" transform="rotate(-13.8199 2.85233 4.42468)" fill="black"/>
        <rect x="2.33379" y="4.1109" width="0.428571" height="0.428571" transform="rotate(-13.8199 2.33379 4.1109)" fill="black"/>
        <rect x="1.81525" y="3.79712" width="0.428571" height="0.428571" transform="rotate(-13.8199 1.81525 3.79712)" fill="black"/>
        <rect x="1.29671" y="3.48331" width="0.428571" height="0.428571" transform="rotate(-13.8199 1.29671 3.48331)" fill="black"/>
        <rect x="0.778168" y="3.16953" width="0.428571" height="0.428571" transform="rotate(-13.8199 0.778168 3.16953)" fill="black"/>
        <rect x="3.37086" y="4.73849" width="3" height="0.428571" transform="rotate(-13.8199 3.37086 4.73849)" fill="black"/>
        <rect x="3.8894" y="5.05228" width="2.14286" height="0.428571" transform="rotate(-13.8199 3.8894 5.05228)" fill="black"/>
        <rect x="6.59781" y="3.50333" width="3.85714" height="0.428571" transform="rotate(-13.8199 6.59781 3.50333)" fill="black"/>
        <rect x="7.11635" y="3.81711" width="3" height="0.428571" transform="rotate(-13.8199 7.11635 3.81711)" fill="black"/>
        <rect x="7.63489" y="4.13092" width="2.14286" height="0.428571" transform="rotate(-13.8199 7.63489 4.13092)" fill="black"/>
        <rect x="3.78702" y="4.63611" width="0.428571" height="0.428571" transform="rotate(-13.8199 3.78702 4.63611)" fill="white"/>
        <rect x="4.30556" y="4.94989" width="0.428571" height="0.428571" transform="rotate(-13.8199 4.30556 4.94989)" fill="white"/>
        <rect x="7.5325" y="3.71475" width="0.428571" height="0.428571" transform="rotate(-13.8199 7.5325 3.71475)" fill="white"/>
        <rect x="8.05104" y="4.02853" width="0.428571" height="0.428571" transform="rotate(-13.8199 8.05104 4.02853)" fill="white"/>
      </g>
    </svg>
  </g>
</svg>`;
export const cheeseCat = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible"><style>
  @keyframes cat-14-head-move {
  0% {
  transform: translate(0px, -10px);
  }
  50% {
  transform: translate(-0.5px, -10px);
  }
  100% {
  transform: translate(0px, -10px);
  }
  }

  @keyframes cat-14-eyelid-left-move {
  0% {
  height: 1px;
  }
  10% {
  height: 3px;
  }
  20% {
  height: 1px;
  }
  100% {
  height: 1px;
  }
  }

  @keyframes cat-14-eyelid-right-move {
  0% {
  height: 1px;
  }
  10% {
  height: 3px;
  }
  20% {
  height: 1px;
  }
  100% {
  height: 1px;
  }
  }

  @keyframes cat-14-leg-left-move {
  0% {
  transform: translate(4px, 6px);
  }
  50% {
  transform: translate(4px, 7px);
  }
  100% {
  transform: translate(4px, 6px);
  }
  }

  @keyframes cat-14-leg-right-move {
  0% {
  transform: translate(8px, 6px);
  }
  50% {
  transform: translate(8px, 7px);
  }
  100% {
  transform: translate(8px, 6px);
  }
  }

  #cat-14-head {
  animation-name: cat-14-head-move;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  }

  #cat-14-eyelid-left {
  animation-name: cat-14-eyelid-left-move;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  }

  #cat-14-eyelid-right {
  animation-name: cat-14-eyelid-right-move;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  }

  #cat-14-leg-left {
  animation-name:cat-14-leg-left-move;
  animation-duration: 1s;
  animation-iteration-count:infinite;
  animation-timing-function: ease-in-out;
  }

  #cat-14-leg-right {
  animation-name:cat-14-leg-right-move;
  animation-duration:1s;
  animation-delay: 0.5s;
  animation-iteration-count:infinite;
  animation-timing-function: ease-in-out;
  }

</style>
  <g id="cat-14" transform="translate(6, 30)">
    <svg width="600" height="300" viewBox="0 0 200 100" fill="none" overflow="visible">

      <g id="cat-14-shadow" transform="translate(1, 10)">
        <rect y="0.75" width="11" height="1.5" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="0.846146" y="0.375" width="9.30769" height="0.375" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="0.846146" y="2.25" width="9.30769" height="0.375" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="1.69228" width="7.61539" height="0.375" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="1.69228" y="2.625" width="7.61539" height="0.375" fill="#2B4447" fill-opacity="0.1"/>
      </g>

      <g id="cat-14-leg-left" transform="translate(4, 6)">
        <rect width="2" height="5" transform="matrix(-1 0 0 1 2 0)" fill="#FFA917"/>
        <rect width="1" height="5" transform="matrix(-1 0 0 1 1 0)" fill="black" fill-opacity="0.1"/>
      </g>
      <g id="cat-14-leg-right" transform="translate(8, 6)">
        <rect width="2" height="5" transform="matrix(-1 0 0 1 2 0)" fill="#FFA917"/>
        <rect width="1" height="5" transform="matrix(-1 0 0 1 1 0)" fill="black" fill-opacity="0.1"/>
      </g>
      <g id="cat-14-head">
        <rect width="2" height="3" transform="matrix(-1 0 0 1 11 0)" fill="#FFA917"/>
        <rect width="2" height="4" transform="matrix(-1 0 0 1 3 0)" fill="#FFA917"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 10 0)" fill="#FFA917"/>
        <rect width="1" height="3" transform="matrix(-1 0 0 1 3 0)" fill="#FFA917"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 3 4)" fill="#FFA917"/>
        <rect width="10" height="6" transform="matrix(-1 0 0 1 12 5)" fill="#FFA917"/>
        <rect width="1" height="2" transform="matrix(-1 0 0 1 2 5)" fill="#FFA917"/>
        <rect width="12" height="2" transform="matrix(-1 0 0 1 13 5)" fill="#FFA917"/>
        <rect width="10" height="8" transform="matrix(-1 0 0 1 12 3)" fill="#FFA917"/>
        <rect width="12" height="3" transform="matrix(-1 0 0 1 13 7)" fill="#FFA917"/>
        <rect width="2" height="2" transform="matrix(-1 0 0 1 10 1)" fill="#FFA917"/>
        <rect width="3" height="2" transform="matrix(-1 0 0 1 4 1)" fill="#FFA917"/>
        <rect width="10" height="2" transform="matrix(-1 0 0 1 11 2)" fill="#FFA917"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 9 7)" fill="#FEC3CE"/>
        <rect width="2" height="1" transform="matrix(-1 0 0 1 11 8)" fill="#FEFF7D"/>
        <rect width="2" height="1" transform="matrix(-1 0 0 1 8 8)" fill="#FEFF7D"/>
        <rect width="1" height="4" transform="matrix(-1 0 0 1 2 0)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 3 4)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 9 3)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 7 3)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 9 1)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 10 0)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 3 1)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="2" transform="matrix(-1 0 0 1 2 5)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="3" transform="matrix(-1 0 0 1 2 7)" fill="black" fill-opacity="0.1"/>
        <rect width="2" height="1" transform="matrix(-1 0 0 1 4 10)" fill="black" fill-opacity="0.1"/>
        <rect width="3" height="1" transform="matrix(-1 0 0 1 9 2)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 14 7)" fill="#2d2d2d"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 14 9)" fill="#2d2d2d"/>
        <rect width="3" height="1" transform="matrix(-1 0 0 1 3 7)" fill="#2d2d2d"/>
        <rect width="3" height="1" transform="matrix(-1 0 0 1 3 9)" fill="#2d2d2d"/>
        <rect width="2.99997" height="4" transform="matrix(-1 0 0 1 12 4)" fill="white"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.27272 4)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.27274 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 12 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 12 7.42857)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 11.7273 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.54549 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.27274 7.42857)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.27274 4.28571)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 12 4.28571)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 12 4.57143)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 11.7273 4.28571)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 11.4546 4)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.54547 4)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.81821 4)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.54549 4.28571)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.27274 4.57143)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.27274 7.14285)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.54549 7.42857)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 9.81821 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 11.4546 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 11.7273 7.42857)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 12 7.14286)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 11.7273 4)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 12 4)" fill="#FFA917"/>
        <rect width="1.36362" height="1.14286" transform="matrix(-1 0 0 1 11.4546 5.42857)" fill="black"/>
        <rect width="0.818175" height="0.571428" transform="matrix(-1 0 0 1 11.1818 6.28571)" fill="black"/>
        <rect width="3" height="2" transform="matrix(-1 0 0 1 12 4)" fill="#FFA917"/>
        <rect width="0.272727" height="0.285714" transform="matrix(-1 0 0 1 9.27272 4.57143)" fill="black" fill-opacity="0.1"/>
        <rect width="0.272727" height="0.285714" transform="matrix(-1 0 0 1 9.54546 4.28571)" fill="black" fill-opacity="0.1"/>
        <rect width="1.90909" height="0.285714" transform="matrix(-1 0 0 1 11.4545 4)" fill="black" fill-opacity="0.1"/>
        <rect width="0.272727" height="0.285714" transform="matrix(-1 0 0 1 11.7273 4.28571)" fill="black" fill-opacity="0.1"/>
        <rect width="0.272727" height="0.285714" transform="matrix(-1 0 0 1 12 4.57143)" fill="black" fill-opacity="0.1"/>
        <rect width="2.99997" height="4" transform="matrix(-1 0 0 1 8 4)" fill="white"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.27272 4)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.27274 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 8 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 8 7.42857)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 7.72728 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.54549 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.27274 7.42857)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.27274 4.28571)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 8 4.28571)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 8 4.57143)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 7.72728 4.28571)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 7.45456 4)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.54547 4)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.81821 4)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.54549 4.28571)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.27274 4.57143)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.27274 7.14285)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.54549 7.42857)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 5.81821 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 7.45456 7.71429)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 7.72728 7.42857)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 8 7.14286)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 7.72726 4)" fill="#FFA917"/>
        <rect width="0.272725" height="0.285714" transform="matrix(-1 0 0 1 8 4)" fill="#FFA917"/>
        <rect width="1.36362" height="1.14286" transform="matrix(-1 0 0 1 7.45456 5.42857)" fill="black"/>
        <rect width="0.818175" height="0.571428" transform="matrix(-1 0 0 1 7.18181 6.28571)" fill="black"/>
        <rect width="3" height="2" transform="matrix(-1 0 0 1 8 4)" fill="#FFA917"/>
        <rect width="0.272727" height="0.285714" transform="matrix(-1 0 0 1 5.27272 4.57143)" fill="black" fill-opacity="0.1"/>
        <rect width="0.272727" height="0.285714" transform="matrix(-1 0 0 1 5.54546 4.28571)" fill="black" fill-opacity="0.1"/>
        <rect width="1.90909" height="0.285714" transform="matrix(-1 0 0 1 7.45454 4)" fill="black" fill-opacity="0.1"/>
        <rect width="0.272727" height="0.285714" transform="matrix(-1 0 0 1 7.72726 4.28571)" fill="black" fill-opacity="0.1"/>
        <rect width="0.272727" height="0.285714" transform="matrix(-1 0 0 1 8 4.57143)" fill="black" fill-opacity="0.1"/>
        <rect id="cat-14-eyelid-left" width="3" height="1" transform="translate(9, 5)" fill="#FFA917"/>
        <rect id="cat-14-eyelid-right" width="3" height="1" transform="translate(5, 5)" fill="#FFA917"/>
      </g>

      <g id="cat-14-body" transform="translate(1, 0)">
        <rect width="7" height="9" transform="matrix(-1 0 0 1 9 0)" fill="#FFA917"/>
        <rect width="9" height="6" transform="matrix(-1 0 0 1 10 2)" fill="#FFA917"/>
        <rect width="10" height="3" transform="matrix(-1 0 0 1 10 5)" fill="#FFA917"/>
        <rect width="8" height="5" transform="matrix(-1 0 0 1 9 4)" fill="#FFA917"/>
        <rect width="11" height="3" transform="matrix(-1 0 0 1 11 4)" fill="#FFA917"/>
        <rect width="6" height="9" transform="matrix(-1 0 0 1 8 1)" fill="#FFA917"/>
        <rect width="5" height="5" transform="matrix(-1 0 0 1 8 3)" fill="white"/>
        <rect width="3" height="5" transform="matrix(-1 0 0 1 7 2)" fill="white"/>
        <rect width="3" height="1" transform="matrix(-1 0 0 1 8 9)" fill="black" fill-opacity="0.1"/>
        <rect width="2" height="1" transform="matrix(-1 0 0 1 4 9)" fill="black" fill-opacity="0.1"/>
        <rect x="1" y="8" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect y="5" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect y="4" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="10" y="6" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="2" transform="matrix(-1 0 0 1 3 0)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="2" transform="matrix(-1 0 0 1 2 2)" fill="black" fill-opacity="0.1"/>
      </g>

      <g id="cat-14-tail" transform="translate(-6, -2)">
        <rect width="2" height="4" transform="matrix(0 1 1 0 6 8)" fill="#FFA917"/>
        <rect width="1" height="3" transform="matrix(0 1 1 0 4 8)" fill="#FFA917"/>
        <rect width="2" height="1" transform="matrix(0 1 1 0 4 7)" fill="#FFA917"/>
        <rect width="1" height="3" transform="matrix(0 1 1 0 2 7)" fill="#FFA917"/>
        <rect width="2" height="1" transform="matrix(0 1 1 0 2 6)" fill="#FFA917"/>
        <rect width="1" height="2" transform="matrix(0 1 1 0 1 6)" fill="#FFA917"/>
        <rect width="3" height="1" transform="matrix(0 1 1 0 1 4)" fill="#FFA917"/>
        <rect width="1" height="2" transform="matrix(0 1 1 0 0 4)" fill="#FFA917"/>
        <rect width="4" height="1" transform="matrix(0 1 1 0 0 1)" fill="#FFA917"/>
        <rect width="1" height="2" transform="matrix(0 1 1 0 0 1)" fill="#FFA917"/>
        <rect width="2" height="1" transform="matrix(0 1 1 0 1 0)" fill="#FFA917"/>
        <rect x="6" y="9" width="2" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="1" width="1" height="2" fill="black" fill-opacity="0.1"/>
        <rect y="1" width="1" height="2" fill="black" fill-opacity="0.1"/>
        <rect x="1" y="4" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="2" y="6" width="1" height="2" fill="black" fill-opacity="0.1"/>
      </g>

      <g id="cat-14-notebook" transform="translate(9, 0)">
        <rect width="7" height="5" transform="matrix(-1 0 0 1 10 0)" fill="#E4E4E4"/>
        <rect width="9" height="5" transform="matrix(-1 0 0 1 11 1)" fill="#E4E4E4"/>
        <rect width="9" height="2" transform="matrix(-1 0 0 1 10 4)" fill="#E4E4E4"/>
        <rect width="9" height="1" transform="matrix(-1 0 0 1 9 5)" fill="#E4E4E4"/>
        <rect width="1" height="2" transform="matrix(-1 0 0 1 2 4)" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(-1 0 0 1 1 5)" fill="black" fill-opacity="0.1"/>
        <rect width="9" height="1" transform="matrix(-1 0 0 1 11 5)" fill="black" fill-opacity="0.1"/>
        <rect x="8" y="3.5" width="1" height="0.5" transform="rotate(180 8 3.5)" fill="#242427"/>
        <rect width="1" height="0.5" transform="matrix(-1 0 0 1 7.50024 2.50012)" fill="#242427"/>
        <rect width="0.5" height="2" transform="matrix(-1 0 0 1 8 2)" fill="#242427"/>
        <rect width="1.5" height="0.5" transform="matrix(-1 0 0 1 8 3.5)" fill="#242427"/>
      </g>
    </svg>
  </g>
</svg>`;
export const pigSunglasses = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible"><style>
  @keyframes fig-14-move-head {
  0% {
  -webkit-transform:translate(11.16px, 4px);
  -ms-transform:translate(11.16px, 4px);
  -o-transform:translate(11.16px, 4px);
  -moz-transform:translate(11.16px, 4px);
  transform:translate(11.16px, 4px);
  }
  50% {
  -webkit-transform:translate(11.16px, 4px) rotate(2deg);
  -ms-transform:translate(11.16px, 4px) rotate(2deg);
  -o-transform:translate(11.16px, 4px) rotate(2deg);
  -moz-transform:translate(11.16px, 4px) rotate(2deg);
  transform:translate(11.16px, 4px) rotate(2deg);
  }
  100% {
  -webkit-transform:translate(11.16px, 4px);
  -ms-transform:translate(11.16px, 4px);
  -o-transform:translate(11.16px, 4px);
  -moz-transform:translate(11.16px, 4px);
  transform:translate(11.16px, 4px);
  }
  }

  @keyframes fig-14-move-leg {
  0% {
  -webkit-transform:rotate(0deg);
  -ms-transform:rotate(0deg);
  -o-transform:rotate(0deg);
  -moz-transform:rotate(0deg);
  transform:rotate(0deg);
  }
  50% {
  -webkit-transform:rotate(2deg);
  -ms-transform:rotate(2deg);
  -o-transform:rotate(2deg);
  -moz-transform:rotate(2deg);
  transform:rotate(2deg);
  }
  100% {
  -webkit-transform:rotate(0deg);
  -ms-transform:rotate(0deg);
  -o-transform:rotate(0deg);
  -moz-transform:rotate(0deg);
  transform:rotate(0deg);
  }
  }

  #fig-14-head {
  animation-name:fig-14-move-head;
  animation-duration:1s;
  animation-iteration-count:infinite;
  }

  #fig-14-leg {
  animation-name:fig-14-move-leg;
  animation-duration:0.5s;
  animation-iteration-count:360;
  animation-timing-function: ease-in;
  }
</style>

  <g id="fig-14" transform="translate(10, 10)">
    <svg width="600" height="300" viewBox="0 0 200 100" fill="none" overflow="visible">
      <g id="shadow" transform="translate(-2, 3)">
        <rect width="22.4393" height="5.84859" transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.75706 6.96593)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="18.6994" height="1.94953" transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.70079 9.66671)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="18.6994" height="1.94953" transform="matrix(0.707107 0.707107 0.707107 -0.707107 8.286 4.15115)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="14.9596" height="1.94953" transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.64451 12.3675)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="14.9596" height="1.94953" transform="matrix(0.707107 0.707107 0.707107 -0.707107 11.0579 4.09338)" fill="#2B4447" fill-opacity="0.1"/>
      </g>
      
      <g id="fig-14-body">
        <rect x="6.50179" width="7.50178" height="3.00071" fill="#FBB3BE"/>
        <rect x="6.50179" width="6.00143" height="3.00071" fill="#FBB3BE"/>
        <rect x="5.00143" y="6.00143" width="10.5025" height="3.00071" fill="#FBB3BE"/>
        <rect x="5.00143" y="4.50107" width="1.50036" height="4.50107" fill="#FBB3BE"/>
        <rect x="3.50107" y="3.00071" width="13.5032" height="4.50107" fill="#FBB3BE"/>
        <rect x="9.5025" y="9.00214" width="7.50178" height="4.50107" fill="#FBB3BE"/>
        <rect x="5.00143" y="6.00143" width="13.5032" height="4.50107" fill="#FBB3BE"/>
        <rect x="6.50179" y="7.50179" width="13.5032" height="4.50107" fill="#FBB3BE"/>
        <rect x="8.00214" y="9.00214" width="13.5032" height="4.50107" fill="#FBB3BE"/>
        <rect x="11.0029" y="13.5032" width="7.50178" height="4.50107" fill="#FBB3BE"/>
        <rect x="11.0029" y="13.5032" width="7.50178" height="4.50107" fill="#FBB3BE"/>
        <rect x="12.5032" y="15.0036" width="7.50178" height="4.50107" fill="#FBB3BE"/>
        <rect x="9.5025" y="10.5025" width="13.5032" height="4.50107" fill="#FBB3BE"/>
        <rect x="12.5032" y="18.0043" width="6.00143" height="1.50036" fill="#D897A1"/>
        <rect x="11.0029" y="16.5039" width="1.50036" height="1.50036" fill="#D897A1"/>
        <rect x="9.5025" y="15.0036" width="1.50036" height="1.50036" fill="#D897A1"/>
        <rect x="8.00214" y="13.5032" width="1.50036" height="1.50036" fill="#D897A1"/>
        <rect x="6.50179" y="12.0029" width="1.50036" height="1.50036" fill="#D897A1"/>
        <rect x="5.00143" y="10.5025" width="1.50036" height="1.50036" fill="#D897A1"/>
        <rect x="3.50107" y="6.00143" width="1.50036" height="4.50107" fill="#D897A1"/>
        <rect x="0.500359" y="4.50107" width="3.00071" height="1.50036" fill="#FBB3BE"/>
        <rect x="3.50107" y="3.00071" width="1.50036" height="3.00071" fill="#FBB3BE"/>
        <rect x="0.500359" y="1.50036" width="3.00071" height="1.50036" fill="#FBB3BE"/>
        <rect x="0.500359" y="3.00071" width="1.50036" height="1.50036" fill="#FBB3BE"/>
        <rect x="5.00143" y="1.50036" width="10.5025" height="3.00071" fill="#FBB3BE"/>
      </g>

      <g id="fig-14-leg-out" transform="translate(5.1, 10)">
        <g id="fig-14-leg">
          <rect x="6.00286" y="5.00357" width="1.50036" height="6.00143" fill="#FBB3BE"/>
          <rect x="4.5025" y="5.00357" width="1.50036" height="6.00143" fill="#D897A1"/>
          <rect x="1.50179" y="0.502499" width="1.50036" height="7.50178" fill="#FBB3BE"/>
          <rect x="0.0014267" y="0.502499" width="1.50036" height="7.50178" fill="#D897A1"/>
        </g>
      </g>

      <g id="fig-14-head" transform="translate(2, -6.5)">
        <rect x="1.36364" y="2.66666" width="12.2727" height="12" fill="#FBB3BE"/>
        <rect x="2.72727" y="5.33333" width="12.2727" height="8" fill="#FBB3BE"/>
        <rect y="1.33334" width="15" height="1.33333" fill="#FBB3BE"/>
        <rect x="1.36364" width="2.72727" height="1.33333" fill="#FBB3BE"/>
        <rect x="12.2727" width="1.36364" height="1.33333" fill="#FBB3BE"/>
        <rect x="2.72727" y="14.6667" width="10.9091" height="1.33333" fill="#D897A1"/>
        <rect width="1.36364" height="1.33333" transform="matrix(-1 0 0 1 2.72727 13.3333)" fill="#D897A1"/>
        <rect x="5.45454" y="8" width="6.81818" height="4" fill="#FC899A"/>
        <rect x="4.0909" y="9.33334" width="9.54545" height="1.33333" fill="#FC899A"/>
        <rect x="10.9091" y="5.33333" width="1.36364" height="1.33333" fill="black"/>
        <rect x="5.45454" y="5.33333" width="1.36364" height="1.33333" fill="black"/>
        <rect x="9.54546" y="9.33333" width="1.36364" height="1.33333" fill="black"/>
        <rect x="6.81818" y="9.33333" width="1.36364" height="1.33333" fill="black"/>
      </g>

      <g id="14-sunglasses" transform="translate(11, 6.5)">
        <rect x="2.85714" y="2.85715" width="6.42857" height="0.714286" fill="black"/>
        <rect x="2.14286" y="2.14285" width="0.714286" height="0.714286" fill="black"/>
        <rect x="1.42857" y="1.42856" width="0.714286" height="0.714286" fill="black"/>
        <rect x="0.714287" y="0.714294" width="0.714286" height="0.714286" fill="black"/>
        <rect width="0.714286" height="0.714286" fill="black"/>
        <rect x="3.57143" y="3.57144" width="5" height="0.714286" fill="black"/>
        <rect x="4.28571" y="4.28571" width="3.57143" height="0.714286" fill="black"/>
        <rect x="9.28571" y="2.85715" width="6.42857" height="0.714286" fill="black"/>
        <rect x="10" y="3.57144" width="5" height="0.714286" fill="black"/>
        <rect x="10.7143" y="4.28571" width="3.57143" height="0.714286" fill="black"/>
        <rect x="4.28571" y="3.57144" width="0.714286" height="0.714286" fill="white"/>
        <rect x="5" y="4.28571" width="0.714286" height="0.714286" fill="white"/>
        <rect x="10.7143" y="3.57144" width="0.714286" height="0.714286" fill="white"/>
        <rect x="11.4286" y="4.28571" width="0.714286" height="0.714286" fill="white"/>
      </g>
    </svg>
  </g>
</svg>`;
export const quokkaSunglasses = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible"><svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible">
  <style>
    @keyframes quokka-14-head-move {
    0% {
    transform: translate(-0.5px, -6px);
    }
    50% {
    transform: translate(0px, -6px);
    }
    100% {
    transform: translate(-0.5px, -6px);
    }
    }

    @keyframes quokka-14-leg-left-move {
    0% {
    transform: translate(0.5px, 3px);
    }
    50% {
    transform: translate(0.5px, 4px);
    }
    100% {
    transform: translate(0.5px, 3px);
    }
    }

    @keyframes quokka-14-leg-right-move {
    0% {
    transform: translate(3.5px, 3px);
    }
    50% {
    transform: translate(3.5px, 4px);
    }
    100% {
    transform: translate(3.5px, 3px);
    }
    }

    #quokka-14-head {
    animation-name: quokka-14-head-move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    }

    #quokka-14-leg-left {
    animation-name:quokka-14-leg-left-move;
    animation-duration:1s;
    animation-iteration-count:infinite;
    animation-timing-function: ease-in-out;
    }

    #quokka-14-leg-right {
    animation-name:quokka-14-leg-right-move;
    animation-duration:1s;
    animation-delay: 0.5s;
    animation-iteration-count:infinite;
    animation-timing-function: ease-in-out;
    }
  </style>


  <g id="quokka-14" transform="translate(1.5, 18)">
    <svg width="600" height="300" viewBox="0 0 200 100" fill="none" overflow="visible">
      <g id="quokka-14-shadow" transform="translate(-0.5, 6)">
        <rect y="0.5" width="7" height="1" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="0.538574" y="0.25" width="5.92308" height="0.25" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="0.538574" y="1.5" width="5.92308" height="0.25" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="1.0769" width="4.84615" height="0.25" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="1.0769" y="1.75" width="4.84615" height="0.25" fill="#2B4447" fill-opacity="0.1"/>
      </g>
      <g id="quokka-14-leg-left" transform="translate(0.5, 3)">
        <rect width="2" height="4" fill="#C7A684"/>
      </g>
      <g id="quokka-14-leg-right" transform="translate(3.5, 3)">
        <rect width="2" height="4" fill="#C7A684"/>
      </g>
      <g id="quokka-14-body" transform="translate(-0.5, 0)">
        <rect x="1" width="5" height="6" fill="#C7A684"/>
        <rect x="1" y="1" width="5" height="5" fill="#C7A684"/>
        <rect x="1" y="1" width="6" height="4" fill="#C7A684"/>
        <rect y="1" width="6" height="4" fill="#C7A684"/>
        <rect x="3" y="2" width="3" height="2" fill="#EBC49C"/>
        <rect x="4" y="3" width="2" height="2" fill="#EBC49C"/>
        <rect x="2" y="3" width="4" height="3" fill="#EBC49C"/>
        <rect y="3" width="1" height="2" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(1 0 0 -1 1 6)" fill="black" fill-opacity="0.1"/>
      </g>
      <g id="quokka-14-head" transform="translate(-0.5, -6)">
        <rect y="3" width="7" height="3.5" fill="#C7A684"/>
        <rect x="1" y="3" width="5" height="4" fill="#C7A684"/>
        <rect x="1" y="1" width="5" height="3" fill="#C7A684"/>
        <rect width="2" height="2" fill="#C7A684"/>
        <rect x="5" width="2" height="2" fill="#C7A684"/>
        <rect x="5" y="3" width="1" height="1" fill="black"/>
        <rect x="2" y="3" width="1" height="1" fill="black"/>
        <rect width="1" height="0.5" transform="matrix(1 0 0 -1 1 5)" fill="#FBB3BE"/>
        <rect width="1" height="0.5" transform="matrix(1 0 0 -1 6 5)" fill="#FBB3BE"/>
        <rect x="3" y="6" width="2" height="0.5" fill="black"/>
        <rect x="3" y="6" width="0.5" height="0.5" transform="rotate(-180 3 6)" fill="black"/>
        <rect x="4" y="4" width="1" height="1" fill="black" fill-opacity="0.3"/>
        <rect x="1" y="1" width="1" height="1" fill="#EBC49C"/>
        <rect x="5" y="1" width="1" height="1" fill="#EBC49C"/>
        <rect x="0.727051" y="2.85718" width="3.27273" height="0.428571" fill="black"/>
        <rect x="0.36377" y="2.42859" width="0.363636" height="0.428571" fill="black"/>
        <rect y="2" width="0.363636" height="0.428571" fill="black"/>
        <rect x="1.09082" y="3.28577" width="2.54545" height="0.428571" fill="black"/>
        <rect x="1.45459" y="3.71423" width="1.81818" height="0.428571" fill="black"/>
        <rect x="4" y="2.85718" width="3.27273" height="0.428571" fill="black"/>
        <rect x="4.36377" y="3.28577" width="2.54545" height="0.428571" fill="black"/>
        <rect x="4.72705" y="3.71423" width="1.81818" height="0.428571" fill="black"/>
        <rect x="1.45459" y="3.28577" width="0.363636" height="0.428571" fill="white"/>
        <rect x="1.81836" y="3.71423" width="0.363636" height="0.428571" fill="white"/>
        <rect x="4.72705" y="3.28577" width="0.363636" height="0.428571" fill="white"/>
        <rect x="5.09082" y="3.71423" width="0.363636" height="0.428571" fill="white"/>
      </g>
    </svg>
  </g>
</svg>
</svg>`;
export const hamsterSanta = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible"><style>
  @keyframes hamster-14-hand-left-move {
  0% {
  transform: translate(9px, 2px);
  }
  50% {
  transform: translate(9px, 2.5px);
  }
  100% {
  transform: translate(9px, 2px);
  }
  }

  @keyframes hamster-14-hand-right-move {
  0% {
  transform: translate(11px, 2px);
  }
  50% {
  transform: translate(11px, 1.5px);
  }
  100% {
  transform: translate(11px, 2px);
  }
  }

  #hamster-14-hand-left {
  animation-name:hamster-14-hand-left-move;
  animation-duration:0.3s;
  animation-iteration-count: infinite;
  }

  #hamster-14-hand-right {
  animation-name:hamster-14-hand-right-move;
  animation-duration:0.3s;
  animation-iteration-count: infinite;
  }

</style>
  <g id="hamster-14" transform="translate(5, 25)">
    <svg width="600" height="300" viewBox="0 0 200 100" fill="none" overflow="visible">
      <g id="hamster-14-shadow" transform="translate(0, 6.5)">
        <rect y="1.54541" width="14" height="1.90909" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="1.07693" y="1.06818" width="11.8462" height="0.477273" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="1.07693" y="3.45453" width="11.8462" height="0.477273" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="2.15378" y="0.590881" width="9.69231" height="0.477273" fill="#2B4447" fill-opacity="0.1"/>
        <rect x="2.15378" y="3.93182" width="9.69231" height="0.477273" fill="#2B4447" fill-opacity="0.1"/>
      </g>
      <g id="hamster-14-body" transform="translate(0, 0)">
        <rect x="7" y="8" width="3" height="1" fill="#FBB3BE"/>
        <rect x="11" y="7" width="3" height="1" fill="#FBB3BE"/>
        <rect x="1" y="3" width="2" height="4" fill="#FFE1BF"/>
        <rect x="2" y="3" width="10" height="5" fill="#FFE1BF"/>
        <rect x="4" width="4" height="9" fill="#FFE1BF"/>
        <rect x="8" width="4" height="8" fill="#FFE1BF"/>
        <rect x="4" y="8" width="4" height="1" fill="#F8D196"/>
        <rect x="2" y="7" width="4" height="1" fill="#F8D196"/>
        <rect x="1" y="3" width="1" height="3" fill="#F8D196"/>
        <rect x="2" y="2" width="1" height="3" fill="#F8D196"/>
        <rect x="1" y="3" width="3" height="2" fill="#F8D196"/>
        <rect x="2" y="3" width="1" height="3" fill="#F8D196"/>
        <rect x="4" y="1" width="1" height="3" fill="#F8D196"/>
        <rect y="6" width="2" height="1" fill="#F8D196"/>
        <rect y="6" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="1" y="6" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect y="6" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="2" y="7" width="2" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="4" y="8" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="9" y="7" width="3" height="1" fill="#FFE9D0"/>
        <rect x="10" y="6" width="2" height="1" fill="#FFE9D0"/>
        <rect x="11" y="5" width="1" height="1" fill="#FFE9D0"/>
      </g>
      <g id="hamster-14-head" transform="translate(2, -5)">
        <rect x="2" width="2" height="1" fill="#F8D196"/>
        <rect x="2" width="2" height="4" fill="#F8D196"/>
        <rect x="6" y="1" width="3" height="3" fill="#F8D196"/>
        <rect x="6" width="2" height="3" fill="#F8D196"/>
        <rect x="2" y="1" width="7" height="5" fill="#F8D196"/>
        <rect x="4" y="2" width="7" height="5" fill="#F8D196"/>
        <rect x="5" y="3" width="7" height="4" fill="#F8D196"/>
        <rect x="1" y="3" width="7" height="4" fill="#F8D196"/>
        <rect x="1" y="4" width="5" height="4" fill="#F8D196"/>
        <rect y="4" width="6" height="3" fill="#F8D196"/>
        <rect x="6" y="3" width="1" height="1" fill="black"/>
        <rect x="9" y="3" width="1" height="1" fill="black"/>
        <rect x="6" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect x="1" y="7" width="2" height="1" fill="black" fill-opacity="0.1"/>
        <rect y="5" width="1" height="1" fill="black" fill-opacity="0.1"/>
        <rect width="1" height="1" transform="matrix(1 0 0 -1 0 7)" fill="black" fill-opacity="0.1"/>
        <rect x="5" y="6" width="6" height="2" fill="#FED9AF"/>
        <rect x="4" y="7" width="6" height="1" fill="#FED9AF"/>
        <rect x="10" y="5" width="2" height="2" fill="#FED9AF"/>
        <rect x="3" width="1" height="1" fill="#FBB3BE"/>
        <rect x="7" width="1" height="1" fill="#FBB3BE"/>
        <rect x="8" y="5" width="1" height="1" fill="#765D49"/>
        <g id="hamster-14-santa-hat" transform="translate(2, -4)">
          <rect y="2" width="2.66667" height="0.666667" fill="#E2141F"/>
          <rect x="0.666626" y="4" width="5.33333" height="1.33333" fill="#F5F5F7"/>
          <rect y="4" width="5.33333" height="0.666667" fill="#E2141F"/>
          <rect y="4" width="4.66667" height="0.666667" fill="#E2141F"/>
          <rect x="0.666626" y="3.33325" width="4.66667" height="0.666667" fill="#E2141F"/>
          <rect x="0.666626" y="3.11108" width="4" height="0.666667" fill="#E2141F"/>
          <rect x="0.666626" y="2.66675" width="4" height="1.33333" fill="#E2141F"/>
          <rect x="0.666626" y="1.33325" width="2.66667" height="1.33333" fill="#E2141F"/>
          <rect x="0.666626" y="0.666748" width="1.33333" height="1.33333" fill="#E2141F"/>
          <rect width="1.33333" height="1.33333" fill="#F5F5F7"/>
          <rect x="0.666626" y="2" width="3.33333" height="1.33333" fill="#E2141F"/>
          <rect x="0.666626" y="2.66675" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="1.33337" y="2.66675" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="0.666626" y="3.33325" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="1.33337" y="3.33325" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="0.666626" y="2.66675" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="1.33337" y="2.66675" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="2" y="2.66675" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="0.666626" y="0.666748" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
          <rect x="2.66663" y="2.66675" width="0.666667" height="0.666667" fill="black" fill-opacity="0.1"/>
        </g>
      </g>
      <g id="hamster-14-hand-right" transform="translate(11, 2)">
        <rect y="0.333313" width="2" height="1.33333" fill="#FBB3BE"/>
        <rect x="0.333344" width="1.33333" height="2" fill="#FBB3BE"/>
      </g>

      <g id="hamster-14-amond" transform="translate(10, 1)">
        <rect x="0.75" width="0.5" height="3.75" fill="#846560"/>
        <rect x="0.499969" y="0.25" width="1" height="3.25" fill="#846560"/>
        <rect width="1.5" height="0.25" transform="matrix(1 0 0 -1 0.250031 3.5)" fill="#846560"/>
        <rect width="1" height="0.25" transform="matrix(1 0 0 -1 0.499969 3.75)" fill="#846560"/>
        <rect x="0.250031" y="0.75" width="1.5" height="2.5" fill="#846560"/>
        <rect y="2.75" width="2" height="0.5" fill="#846560"/>
        <rect y="1.5" width="2" height="1.5" fill="#846560"/>
        <rect x="0.499969" y="0.75" width="0.25" height="0.75" fill="#C09890"/>
        <rect x="0.999939" y="0.75" width="0.25" height="0.75" fill="#C09890"/>
        <rect x="1.50003" y="0.75" width="0.25" height="0.75" fill="#C09890"/>
        <rect width="0.25" height="0.25" transform="matrix(1 0 0 -1 0.499969 3.5)" fill="#C09890"/>
        <rect width="0.25" height="0.25" transform="matrix(1 0 0 -1 0.999939 3.5)" fill="#C09890"/>
        <rect width="0.25" height="0.25" transform="matrix(1 0 0 -1 1.50003 3.5)" fill="#C09890"/>
        <rect x="0.250031" y="1.5" width="0.25" height="1.75" fill="#C09890"/>
        <rect x="0.75" y="1.5" width="0.25" height="1.75" fill="#C09890"/>
        <rect x="1.25" y="1.5" width="0.25" height="1.75" fill="#C09890"/>
        <rect x="1.74997" y="1.5" width="0.25" height="1.75" fill="#C09890"/>
        <rect x="1.25" y="1.5" width="0.25" height="1.75" fill="#FFF9F0"/>
        <rect x="0.999939" y="0.75" width="0.25" height="0.75" fill="#FFF9F0"/>
        <rect x="0.999939" y="0.25" width="0.25" height="0.5" fill="#FFF9F0"/>
        <rect x="0.75" width="0.25" height="0.25" fill="#FFF9F0"/>
        <rect x="0.499969" y="0.25" width="0.25" height="1.25" fill="#FFF9F0"/>
        <rect x="0.75" y="1.5" width="0.25" height="1.75" fill="#FFF9F0"/>
        <rect x="0.250031" y="1.5" width="0.25" height="1.75" fill="#FFF9F0"/>
        <rect x="1.74997" y="1.5" width="0.25" height="1.75" fill="#FFF9F0"/>
        <rect x="1.50003" y="0.75" width="0.25" height="0.75" fill="#FFF9F0"/>
        <rect x="1.50003" y="3.25" width="0.25" height="0.25" fill="#FFF9F0"/>
        <rect x="0.999939" y="3.25" width="0.25" height="0.25" fill="#FFF9F0"/>
        <rect x="0.499969" y="3.25" width="0.25" height="0.25" fill="#FFF9F0"/>
      </g>

      <g id="hamster-14-hand-left" transform="translate(9, 2.5)">
        <rect y="0.833313" width="2" height="1.33333" fill="#FBB3BE"/>
        <rect x="0.333344" y="0.5" width="1.33333" height="2" fill="#FBB3BE"/>
      </g>
    </svg>
  </g>
</svg>`;
export const rabbitBrownRudolph = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible"><svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible">
  <style>
    @keyframes rabbit-head-14-move {
    0% {
    transform: translate(0, -1px);
    }
    50% {
    transform: translate(0, -2px);
    }
    100% {
    transform: translate(0, -1px);
    }
    }

    @keyframes rabbit-obj-14-move {
    0% {
    transform: translate(0, 0px);
    }
    15% {
    transform: translate(0, -5px);
    }
    30% {
    transform: translate(0, 0px);
    }
    100% {
    transform: translate(0, 0px);
    }
    }

    @keyframes rabbit-14-shadow-move {
    0% {
    transform: translate(-2px, 9px) scaleX(1);
    }
    15% {
    transform: translate(-2px, 9px) scaleX(1.2);
    }
    30% {
    transform: translate(-2px, 9px) scaleX(1);
    }
    100% {
    transform: translate(-2px, 9px) scaleX(1);
    }
    }

    #rabbit-head-14 {
    animation-name: rabbit-head-14-move;
    animation-duration:1s;
    animation-iteration-count:infinite;
    animation-timing-function: ease-in-out;
    }

    #rabbit-shadow-14 {
    animation-name: rabbit-14-shadow-move;
    animation-duration:2s;
    animation-iteration-count:infinite;
    animation-timing-function: ease-in-out;
    }

    #rabbit-obj-14 {
    animation-name: rabbit-obj-14-move;
    animation-duration:2s;
    animation-iteration-count:infinite;
    animation-timing-function: ease-in-out;
    }
  </style>

  <g id="rabbit-14" transform="translate(25, 25)">
    <svg width="600" height="300" viewBox="0 0 200 100" fill="none" overflow="visible">
      <g id="rabbit-shadow-14" transform="translate(-2, 9)">
        <rect width="8" height="1" transform="matrix(-1 0 0 1 8 0.5)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="6.76923" height="0.25" transform="matrix(-1 0 0 1 7.38452 0.25)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="6.76923" height="0.25" transform="matrix(-1 0 0 1 7.38452 1.5)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="5.53846" height="0.25" transform="matrix(-1 0 0 1 6.76929 0)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="5.53846" height="0.25" transform="matrix(-1 0 0 1 6.76929 1.75)" fill="#2B4447" fill-opacity="0.1"/>
      </g>
      <g id="rabbit-obj-14">
        <g id="rabbit-body-14" transform="translate(-4, 5)">
          <rect x="4" width="6" height="4" fill="#CBA07D"/>
          <rect x="2" y="1" width="8" height="3" fill="#CBA07D"/>
          <rect x="1" y="2" width="8" height="2" fill="#CBA07D"/>
          <rect x="2" y="3" width="8" height="2" fill="#CBA07D"/>
          <rect y="2" width="8" height="1" fill="#CBA07D"/>
          <rect x="1" y="3" width="1" height="1" fill="black" fill-opacity="0.1"/>
          <rect x="2" y="4" width="2" height="1" fill="black" fill-opacity="0.1"/>
          <rect x="6" y="3" width="1" height="2" fill="black" fill-opacity="0.1"/>
          <rect x="8" y="3" width="1" height="2" fill="black" fill-opacity="0.1"/>
        </g>
        <g id="rabbit-head-14" transform="translate(0, -10)">
          <rect x="1" y="3" width="5" height="4" fill="#CBA07D"/>
          <rect y="4" width="7" height="3" fill="#CBA07D"/>
          <rect x="1" y="4" width="5" height="4" fill="#CBA07D"/>
          <rect y="2" width="3" height="5" fill="#CBA07D"/>
          <rect x="4" y="2" width="3" height="5" fill="#CBA07D"/>
          <rect width="2" height="3" fill="#CBA07D"/>
          <rect x="5" width="2" height="3" fill="#CBA07D"/>
          <rect x="1" y="1" width="1" height="2" fill="#FFDDE3"/>
          <rect x="5" y="1" width="1" height="2" fill="#FFDDE3"/>
          <rect x="2" y="4" width="1" height="1" fill="black"/>
          <rect x="5" y="4" width="1" height="1" fill="black"/>
          <rect width="2" height="1" transform="matrix(-1 0 0 1 2 5)" fill="#FFB0BF"/>
          <rect width="2" height="1" transform="matrix(-1 0 0 1 8 5)" fill="#FFB0BF"/>
          <rect x="3" y="6" width="2" height="1" fill="black"/>
          <rect y="6" width="1" height="1" fill="black" fill-opacity="0.1"/>
          <rect x="1" y="7" width="1" height="1" fill="black" fill-opacity="0.1"/>
          <g id="rabbit-14-rudolph" transform="translate(-7, -4)">
            <rect x="7" y="6" width="2" height="1" fill="#E9B38F"/>
            <rect x="8" y="6" width="1" height="2" fill="#C3845B"/>
            <rect x="6" y="5" width="2" height="2" fill="#793528"/>
            <rect x="1" y="6" width="6" height="1" fill="#793528"/>
            <rect x="6" y="3" width="1" height="4" fill="#793528"/>
            <rect x="4" y="4" width="1" height="3" fill="#793528"/>
            <rect x="4" y="4" width="1" height="1" fill="#793528"/>
            <rect x="3" y="4" width="2" height="1" fill="#793528"/>
            <rect x="3" y="1" width="1" height="4" fill="#793528"/>
            <rect x="2" y="3" width="2" height="1" fill="#793528"/>
            <rect x="1" y="5" width="1" height="2" fill="#793528"/>
            <rect x="1" y="5" width="1" height="1" fill="#793528"/>
            <rect y="5" width="2" height="1" fill="#793528"/>
            <rect x="3" y="2" width="2" height="1" fill="#793528"/>
            <rect x="4" y="2" width="1" height="1" fill="#793528"/>
            <rect x="2" y="1" width="2" height="1" fill="#793528"/>
            <rect x="2" y="1" width="1" height="1" fill="#793528"/>
            <rect x="2" width="1" height="2" fill="#793528"/>
            <rect x="7" y="6" width="2" height="1" fill="#E9B38F"/>
            <rect x="7" y="7" width="2" height="1" fill="#C3845B"/>
            <rect width="2" height="1" transform="matrix(-1 0 0 1 14 6)" fill="#E9B38F"/>
            <rect width="1" height="2" transform="matrix(-1 0 0 1 13 6)" fill="#C3845B"/>
            <rect width="2" height="2" transform="matrix(-1 0 0 1 15 5)" fill="#793528"/>
            <rect width="6" height="1" transform="matrix(-1 0 0 1 20 6)" fill="#793528"/>
            <rect width="1" height="4" transform="matrix(-1 0 0 1 15 3)" fill="#793528"/>
            <rect width="1" height="3" transform="matrix(-1 0 0 1 17 4)" fill="#793528"/>
            <rect width="1" height="1" transform="matrix(-1 0 0 1 17 4)" fill="#793528"/>
            <rect width="2" height="1" transform="matrix(-1 0 0 1 18 4)" fill="#793528"/>
            <rect width="1" height="4" transform="matrix(-1 0 0 1 18 1)" fill="#793528"/>
            <rect width="2" height="1" transform="matrix(-1 0 0 1 19 3)" fill="#793528"/>
            <rect width="1" height="2" transform="matrix(-1 0 0 1 20 5)" fill="#793528"/>
            <rect width="1" height="1" transform="matrix(-1 0 0 1 20 5)" fill="#793528"/>
            <rect width="2" height="1" transform="matrix(-1 0 0 1 21 5)" fill="#793528"/>
            <rect width="2" height="1" transform="matrix(-1 0 0 1 18 2)" fill="#793528"/>
            <rect width="1" height="1" transform="matrix(-1 0 0 1 17 2)" fill="#793528"/>
            <rect width="2" height="1" transform="matrix(-1 0 0 1 19 1)" fill="#793528"/>
            <rect width="1" height="1" transform="matrix(-1 0 0 1 19 1)" fill="#793528"/>
            <rect width="1" height="2" transform="matrix(-1 0 0 1 19 0)" fill="#793528"/>
            <rect width="2" height="1" transform="matrix(-1 0 0 1 14 6)" fill="#E9B38F"/>
            <rect width="2" height="1" transform="matrix(-1 0 0 1 14 7)" fill="#C3845B"/>
            <rect x="11" y="9" width="1" height="1" fill="#E52D37"/>
            <rect x="11" y="9.66675" width="1" height="0.333333" fill="white" fill-opacity="0.1"/>
            <rect x="11" y="9.33325" width="0.666667" height="0.333333" fill="white" fill-opacity="0.1"/>
          </g>
        </g>
      </g>
    </svg>
  </g>
</svg>
</svg>`;
export const shibaKing = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible"><style>
  @keyframes shiba-0-head-move {
  0% {
  transform: translate(0px, 0px) rotate(0deg);
  }
  50% {
  transform: translate(2px, -1px) rotate(10deg);
  }
  100% {
  transform: translate(0px, -0px) rotate(0deg);
  }
  }

  @keyframes shiba-0-obj-move {
  0% {
  transform: translate(0, 0px);
  }
  15% {
  transform: translate(0, -2.5px);
  }
  30% {
  transform: translate(0, 0px);
  }
  100% {
  transform: translate(0, 0px);
  }
  }

  @keyframes shiba-0-shadow-move {
  0% {
  transform: translate(-3px, 11px) scaleX(1);
  }
  15% {
  transform: translate(-3px, 11px) scaleX(1.2);
  }
  30% {
  transform: translate(-3px, 11px) scaleX(1);
  }
  100% {
  transform: translate(-3px, 11px) scaleX(1);
  }
  }

  #shiba-0-shadow {
  animation-name: shiba-0-shadow-move;
  animation-duration:2s;
  animation-iteration-count:infinite;
  animation-timing-function: ease-in-out;
  }

  #shiba-0-obj {
  animation-name: shiba-0-obj-move;
  animation-duration:2s;
  animation-iteration-count:infinite;
  animation-timing-function: ease-in-out;
  }

  #shiba-0-head {
  animation-name: shiba-0-head-move;
  animation-duration:1s;
  animation-iteration-count:infinite;
  animation-timing-function: ease-in-out;
  }
</style>

  <g id="shiba-0" transform="translate(15, 15)">
    <svg width="600" height="300" viewBox="0 0 200 100" fill="none" overflow="visible">
      <g id="shiba-0-shadow" transform="translate(-3, 11)">
        <rect width="13" height="1" transform="matrix(-1 0 0 1 13 0.5)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="11" height="0.25" transform="matrix(-1 0 0 1 11.9999 0.25)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="11" height="0.25" transform="matrix(-1 0 0 1 11.9999 1.5)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="9" height="0.25" transform="matrix(-1 0 0 1 11.0002 0)" fill="#2B4447" fill-opacity="0.1"/>
        <rect width="9" height="0.25" transform="matrix(-1 0 0 1 11.0002 1.75)" fill="#2B4447" fill-opacity="0.1"/>
      </g>
      <g id="shiba-0-obj">
        <g id="shiba-0-body" transform="translate(-4, 7)">
          <rect x="5" width="6" height="4" fill="#FFCF9E"/>
          <rect x="3" y="1" width="8" height="3" fill="#FFCF9E"/>
          <rect x="3" y="2" width="7" height="2" fill="#FFCF9E"/>
          <rect x="3" y="3" width="8" height="1" fill="#FFCF9E"/>
          <rect x="4" y="3" width="8" height="2" fill="#FFCF9E"/>
          <rect x="2" y="2" width="7" height="2" fill="#FFCF9E"/>
          <rect y="1" width="2" height="1" fill="#FFCF9E"/>
          <rect width="1" height="2" transform="matrix(-1 0 0 1 2 1)" fill="#FFCF9E"/>
          <rect x="4" y="4" width="1" height="1" fill="#FFF2E4"/>
          <rect x="8" y="4" width="1" height="1" fill="#FFF2E4"/>
          <rect x="10" y="4" width="1" height="1" fill="#FFF2E4"/>
          <rect x="2" y="3" width="1" height="1" fill="#FFF2E4"/>
          <rect y="1" width="1" height="1" fill="#FFF2E4"/>
          <rect x="8" y="4.5" width="1" height="0.5" fill="black" fill-opacity="0.1"/>
          <rect x="10" y="4.5" width="1" height="0.5" fill="black" fill-opacity="0.1"/>
        </g>
        <g id="shiba-0-head" transform="translate(0, 0)">
          <rect x="4" width="0.8" height="2.25" fill="#FFD600"/>
          <rect x="4.79999" y="0.75" width="0.8" height="1.5" fill="#FFD600"/>
          <rect x="5.60001" width="0.8" height="2.25" fill="#FFD600"/>
          <rect x="6.39999" y="0.75" width="0.8" height="1.5" fill="#FFD600"/>
          <rect x="7.20001" width="0.8" height="2.25" fill="#FFD600"/>
          <rect x="3" y="2" width="5" height="8" fill="#FFCF9E"/>
          <rect x="1" y="3" width="8" height="6" fill="#FFCF9E"/>
          <rect x="1" y="7" width="9" height="2" fill="#FFCF9E"/>
          <rect y="5" width="10" height="3" fill="#FFCF9E"/>
          <rect x="2" y="5" width="1" height="2" transform="rotate(180 2 5)" fill="#FFCF9E"/>
          <rect x="10" y="5" width="2" height="2" transform="rotate(180 10 5)" fill="#FFCF9E"/>
          <rect x="3" y="5" width="2" height="4" transform="rotate(180 3 5)" fill="#FFCF9E"/>
          <rect x="10" y="4" width="2" height="2" transform="rotate(180 10 4)" fill="#FFCF9E"/>
          <rect x="11" y="3" width="3" height="2" transform="rotate(180 11 3)" fill="#FFCF9E"/>
          <rect x="10" y="4" width="1" height="4" transform="rotate(180 10 4)" fill="#FFCF9E"/>
          <rect x="1" y="5" width="10" height="3" fill="#FFCF9E"/>
          <rect x="1" y="3" width="1" height="2" fill="black" fill-opacity="0.1"/>
          <rect y="5" width="1" height="1" fill="black" fill-opacity="0.1"/>
          <rect x="8" y="2" width="1" height="1" fill="black" fill-opacity="0.1"/>
          <rect x="8" y="1" width="1" height="1" fill="black" fill-opacity="0.1"/>
          <rect x="3" y="2" width="2" height="1" fill="black"/>
          <rect y="7" width="10" height="1" fill="#FFF2E4"/>
          <rect x="1" y="7" width="9" height="2" fill="#FFF2E4"/>
          <rect y="6" width="4" height="2" fill="#FFF2E4"/>
          <rect x="4.60001" y="6" width="3.75" height="2" fill="#FFF2E4"/>
          <rect x="5.75" y="5" width="1.5" height="3" fill="#FFF2E4"/>
          <rect x="3" y="3" width="3" height="2" transform="rotate(180 3 3)" fill="#FFCF9E"/>
          <rect x="2" y="3" width="1" height="3" transform="rotate(180 2 3)" fill="#FFCF9E"/>
          <rect y="1" width="1" height="2" fill="black" fill-opacity="0.1"/>
          <rect x="3" y="3" width="2" height="2" transform="rotate(180 3 3)" fill="#FFCF9E"/>
          <rect x="1" width="1" height="1" fill="black" fill-opacity="0.1"/>
          <rect x="1" y="2" width="1" height="1" fill="#FFF2E4"/>
          <rect x="9" y="1" width="1" height="2" fill="#FFF2E4"/>
          <rect x="9" y="6" width="2" height="2" fill="#FFF2E4"/>
          <rect x="3" y="7" width="6" height="3" fill="#FFF2E4"/>
          <rect x="1" y="8" width="2" height="1" fill="black" fill-opacity="0.1"/>
          <rect y="6" width="1" height="2" fill="black" fill-opacity="0.1"/>
          <rect x="3" y="9" width="3" height="1" fill="black" fill-opacity="0.1"/>
          <rect x="4" y="4" width="1" height="1" fill="black"/>
          <rect x="8" y="4" width="1" height="1" fill="black"/>
          <rect x="6" y="6" width="1" height="1" fill="black"/>
          <rect x="5" y="7" width="1" height="1" fill="black"/>
          <rect x="7" y="7" width="1" height="1" fill="black"/>
          <rect width="2" height="1" transform="matrix(-1 0 0 1 4 6)" fill="#FF778F"/>
          <rect width="2" height="1" transform="matrix(-1 0 0 1 11 6)" fill="#FF778F"/>
          <rect width="1" height="1.5" transform="matrix(-1 0 0 1 7 7)" fill="#FF778F"/>
          <rect x="8" y="2" width="2" height="1" fill="black"/>
        </g>
      </g>
    </svg>
  </g>
</svg>`;
export const capybaraCarrot = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" overflow="visible">
  <script xmlns=""/>
  <style>
    @keyframes capybara-0-carrot-move {
    0% {
    transform: translate(5.2px, -3.8px);
    }
    50% {
    transform: translate(5.7px, -3.8px);
    }
    100% {
    transform: translate(5.2px, -3.8px);
    }
    }

    @keyframes capybara-0-head-move {
    0% {
    transform: translate(0px, 0px);
    }
    50% {
    transform: translate(0.5px, 0px);
    }
    100% {
    transform: translate(0px, 0px);
    }
    }

    @keyframes capybara-0-leg-front-move {
    0% {
    transform: translate(3.8px, 15px);
    }
    50% {
    transform: translate(3.8px, 15.5px);
    }
    100% {
    transform: translate(3.8px, 15px);
    }
    }

    @keyframes capybara-0-leg-back-move {
    0% {
    transform: translate(-2px, 14px);
    }
    50% {
    transform: translate(-2px, 14.5px);
    }
    100% {
    transform: translate(-2px, 14px);
    }
    }

    #capybara-0-head {
    animation-name: capybara-0-head-move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    }

    #capybara-0-carrot {
    animation-name: capybara-0-carrot-move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    }

    #capybara-0-leg-front {
    animation-name:capybara-0-leg-front-move;
    animation-duration:1s;
    animation-iteration-count:infinite;
    animation-timing-function: ease-in-out;
    }

    #capybara-0-leg-back {
    animation-name:capybara-0-leg-back-move;
    animation-duration:1s;
    animation-delay: 0.5s;
    animation-iteration-count:infinite;
    animation-timing-function: ease-in-out;
    }

  </style>
  <g id="capybara-0" transform="translate(20, 10)">
    <g id="id">0</g>
    
    <svg width="600" height="300" viewBox="0 0 200 100" fill="none" overflow="visible">
      <g id="capybara-0-shadow" transform="translate(-4.2, 14.5)">
        <rect width="20" height="2.5" transform="matrix(-1 0 0 1 20 1.83252)" fill="#2B4447"
          fill-opacity="0.1"/>
        <rect width="16.9231" height="0.625" transform="matrix(-1 0 0 1 18.4614 1.20752)"
          fill="#2B4447" fill-opacity="0.1"/>
        <rect width="16.9231" height="0.625" transform="matrix(-1 0 0 1 18.4614 4.33252)"
          fill="#2B4447" fill-opacity="0.1"/>
        <rect width="13.8462" height="0.625" transform="matrix(-1 0 0 1 16.9233 0.58252)"
          fill="#2B4447" fill-opacity="0.1"/>
        <rect width="13.8462" height="0.625" transform="matrix(-1 0 0 1 16.9233 4.95752)"
          fill="#2B4447" fill-opacity="0.1"/>
      </g>
      <g id="capybara-0-leg-front" transform="translate(3.8, 15)">
        <path d="M8.08245 0.0825195H6.12369V2.62891H8.08245V0.0825195Z" fill="#C17B46"/>
        <path d="M2.20617 0.0825195H0.247406V2.62891H2.20617V0.0825195Z" fill="#C17B46"/>
      </g>
      <g id="capybara-0-leg-back" transform="translate(-2, 14)">
        <path d="M4.28865 0.886719H0.371124V3.62898H4.28865V0.886719Z" fill="#C17B46"/>
      </g>
      <g id="capybara-0-body" transform="translate(-3.2, 6.1)">
        <path d="M9.98971 0.876343H3.32993V4.59799H9.98971V0.876343Z" fill="#C17B46"/>
        <path d="M15.0825 2.83508H0V10.6701H15.0825V2.83508Z" fill="#C17B46"/>
        <path d="M15.0824 6.75256H7.24741V8.71132H15.0824V6.75256Z" fill="#A56235"/>
        <path d="M13.1237 8.5155H9.20615V10.6701H13.1237V8.5155Z" fill="#A56235"/>
        <path d="M7.24743 4.79382H5.28867V6.75258H7.24743V4.79382Z" fill="#A56235"/>
      </g>
      <g id="capybara-0-carrot" transform="translate(5.8, -3.8)">
        <path d="M4.12371 0H2.16495V2.15464H4.12371V0Z" fill="#4AFF79"/>
        <path d="M6.08243 1.95874H0.206146V6.07214H6.08243V1.95874Z" fill="#FF8948"/>
      </g>
      <g id="capybara-0-head" transform="translate(0, 0)">
        <path d="M14.0412 0H11.299V2.54639H14.0412V0Z" fill="#8E654A"/>
        <path d="M16 1.95886H2.28867V9.79391H16V1.95886Z" fill="#C17B46"/>
        <path d="M16 9.01038H4.24741V11.7526H16V9.01038Z" fill="#C17B46"/>
        <path d="M16 7.83508H8.16495V11.7526H16V7.83508Z" fill="#7C4B32"/>
        <path d="M16 5.87634H10.1237V8.22686H16V5.87634Z" fill="#7C4B32"/>
        <path d="M4.24745 0H0.329926V3.91752H4.24745V0Z" fill="#8E654A"/>
        <path d="M7.38144 4.70105H4.4433V5.87631H7.38144V4.70105Z" fill="black"/>
      </g>
    </svg>
  </g>
</svg>`;

export const PET_LIST = [
  littleChickSanta,
  rabbitBrownRudolph,
  shibaKing,
  hamsterSanta,
  capybaraCarrot,
  slothSunglasses,
  gooseSunglasses,
  cheeseCat,
  quokkaSunglasses,
  pigSunglasses,
];
import { createGlobalStyle } from 'styled-components';
import ScreenSizes from './screenSizes';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Agenda-Semibold";
  src: url("/fonts/Agenda-Semibold.ttf");
}

:root {
  /* screen sizes */
--xsm: 480px;
--sm: 640px;
--med: 768px;
--lg:1024px;
--xl: 1280px;
--xxl: 1536px;
--xxxl: 2000px;


--olive: #564E1F; 
--beige: #E4E6C3;
--blue: #6F73D2;
--blue-ltr: #ACB2F9;
--blue-lt: #a1a3e;
--ltgrey:#F7F7F2;
--hotpink: #EE4266;
--yellow: #ece425;
--ltyellow: #fffa84;

--darkYellow: #817c0b;
--pinkBrown: #d37f79;
--orange: #ff6d1b;
--ltpink: #ffd0ef;
--aqua: #aaf4dd;


--green: #13a492;



--curl: "Playwrite NG Modern", cursive;
--cursive: "Playwrite DE Grund", cursive;
font-family: "Darker Grotesque", sans-serif;

--particleSize: 20vmin;
--animationDuration: 6s;
--amount: 20;


scroll-behavior: smooth;
/* font-family: Agenda, sans-serif; */
font-size: 26px;
word-break: break-word;
/* hyphens: auto; */
/* hidden elements for screen reader accessibility */
.hidden{
  position: absolute;
  height: 1px; width: 1px; /* Nearly collapsed */
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE 7+ only support clip without commas */
    clip: rect(1px, 1px, 1px, 1px); /* All other browsers */
}



* {
  box-sizing: border-box;

    scrollbar-color: var(--vvLtGrey);
    scrollbar-track-color: var(--vvLtGrey);


  ::-webkit-scrollbar {
    width: 10px;
    background-color: var(--vvLtGrey);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--green);
    border-radius: 10px;
  }

}


.test {

  @media only screen and (min-width: 480px) {
    background-color: red;
  }
  @media only screen and (min-width:640px) {
    background-color: orange;
  }
  @media only screen and (min-width:768px) {
    background-color: yellow;
  }
  @media only screen and (min-width: 1024px) {
    background-color: lime;
  }
  @media only screen and (min-width: 1280px) {
    background-color: blue;
  }
  @media only screen and (min-width: 1536px) {
    background-color: purple;
  }

  @media only screen and (min-width: 2000px) {
    background-color: black;
  }


}


}

/* prettier-ignore */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: subpixel-antialiased;

}
/* HTML5 display-role reset for older browsers */
/* prettier-ignore */
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

button {
  font-family: inherit;
  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: default;

  }
}


`;

export default GlobalStyles;

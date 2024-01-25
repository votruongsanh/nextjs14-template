'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

 @font-face {
    font-family: 'SUITv1Bold';
    src: url('/fonts/SUITv1-Bold.otf') format('opentype');
  }
  @font-face {
    font-family: 'SUITv1ExtraBold';
    src: url('/fonts/SUITv1-ExtraBold.otf') format('opentype');
  }
   @font-face {
    font-family: 'SUITv1ExtraLight';
    src: url('/fonts/SUITv1-ExtraLight.otf') format('opentype');
  }
   @font-face {
    font-family: 'SUITv1Heavy';
    src: url('/fonts/SUITv1-Heavy.otf') format('opentype');
  }
   @font-face {
    font-family: 'SUITv1Light';
    src: url('/fonts/SUITv1-Light.otf') format('opentype');
  }
   @font-face {
    font-family: 'SUITv1Medium';
    src: url('/fonts/SUITv1-Medium.otf') format('opentype');
  }
   @font-face {
    font-family: 'SUITv1Regular';
    src: url('/fonts/SUITv1-Regular.otf') format('opentype');
  }
   @font-face {
    font-family: 'SUITv1SemiBold';
    src: url('/fonts/SUITv1-SemiBold.otf') format('opentype');
  }
   @font-face {
    font-family: 'SUITv1Thin';
    src: url('/fonts/SUITv1-Thin.otf') format('opentype');
  } 
 
  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    /* carrega a fonte padrão por sistema operacional */
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    font-family:'SUITv1Regular';
  }

  a, button {
    text-decoration: none;
    cursor: pointer;
    border: none;
    outline: none;
  }

  html, body,
  h1, h2, h3, h4, h5, h6,
  a, p, span,
  em, small, strong,
  sub, sup,
  mark, del, ins, strike,
  abbr, dfn,
  blockquote, q, cite,
  code, pre,
  ol, ul, li, dl, dt, dd,
  div, section, article,
  main, aside, nav,
  header, hgroup, footer,
  img, figure, figcaption,
  address, time,
  audio, video,
  canvas, iframe,
  details, summary,
  fieldset, form, label, legend,
  table, caption,
  tbody, tfoot, thead,
  tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
  }
  
  img, video, picture, canvas {
  max-width: 100%;
  }

  overflow-x: hidden;
  overflow-y: auto;
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyles;

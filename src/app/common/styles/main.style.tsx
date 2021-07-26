import { createGlobalStyle } from 'styled-components';

const css = createGlobalStyle;

export default css<any>`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 0;
   }

   input:-webkit-autofill,
   input:-webkit-autofill:hover,
   input:-webkit-autofill:focus,
   input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
   }

   html,
   body,
   #root {
      height: 100%;
      font-family: 'Montserrat', sans-serif;
      color: #222;
      font-size: 16px;
   }

   body {
      -webkit-font-smoothing: antialiased;
   }

   .material-icons-outlined {
      font-family: 'Material Icons';
      font-weight: normal;
      font-style: normal;
      font-size: 24px; /* Preferred icon size */
      display: inline-block;
      line-height: 1;
      text-transform: none;
      letter-spacing: normal;
      word-wrap: normal;
      white-space: nowrap;
      direction: ltr;
      vertical-align: middle;

      /* Support for all WebKit browsers. */
      -webkit-font-smoothing: antialiased;
      /* Support for Safari and Chrome. */
      text-rendering: optimizeLegibility;

      /* Support for Firefox. */
      -moz-osx-font-smoothing: grayscale;

      /* Support for IE. */
      font-feature-settings: 'liga';
   }

   .input-title {
      font-size: 14px !important;
      text-transform: none !important;
      font-weight: 500 !important;
      color: #5f6c79 !important;
      height: 24px;

      &.focus {
         color: ${(p) => p.theme.primary} !important;
      }
   }

   .input-border {
      display: flex;
      align-content: center;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      background: white;
      border-radius: 3px;
      color: rgb(68, 68, 68);
      font-size: 15px;
      font-weight: 600;
      min-height: 40px !important;
      border-radius: 3px !important;
      border-top: none !important;
      border-right: none !important;
      border-left: none !important;
      border-image: initial !important;
      padding: 0px 10px;
      border: 1px solid #c3cdda !important;

      input {
         font-size: 15px !important;
         font-weight: 400 !important;
         padding: 0px !important;
      }

      textarea {
         padding: 10px 0px;
         font-weight: 400 !important;
      }

      &.focus {
         border-color: ${(p) => p.theme.primary} !important;
      }
   }

   a {
      color: ${(p) => p.theme.primary};
   }

   select {
      display: flex;
      align-content: center;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;
      background: white;
      border: 2px solid rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      color: rgb(68, 68, 68);
      font-size: 15px;
      font-weight: 400 !important;
      height: 40px !important;
      min-height: 40px !important;
      border-radius: 3px !important;
      border-top: none !important;
      border-right: none !important;
      border-left: none !important;
      border-image: initial !important;
      padding: 0px 10px;
      border: 1px solid #c3cdda !important;
   }

   .container {
      width: 100%;
      max-width: 1200px;
   }

   b {
      font-weight: 500 !important;
   }

   .btn {
      height: 35px;
      font-size: 15px;
      padding-top: 0px !important;
      padding-bottom: 0px !important;

      &.sm {
         height: 30px;
         font-size: 13px;
      }
   }

   .header-title {
      padding: 20px 0px;
      color: #000;

      h4 {
         font-size: 28px;
         margin: 0px;
         padding: 0px;
         font-weight: 600;
      }
   }

   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      color: #2e3e7f;
   }

   label {
      margin: 0px;
   }

   h4 {
      font-size: 20px;
      font-weight: 500;
   }

   .card {
      box-shadow: 0 2px 1px 1px rgb(91 124 253 / 5%);
      border: 0;
      border-radius: 10px;
   }

   .form-container2 {
      margin: auto;
      width: 100%;
      max-width: 725px;

      .form-title {
         display: block;
         margin-bottom: 0.375em;
         font-size: 18px;
         font-weight: 600;
         line-height: 1.25;
         letter-spacing: 0px;
         padding: 2em 2em 1em 2em;
         color: rgba(0, 0, 0, 0.8);
      }

      .form-body {
         padding: 1em 2em 2em 2em;
      }

      hr {
         margin: 0px;
      }
   }

   .width-max {
      max-width: 1200px !important;
      margin: auto;
   }

   .page-container {
      margin: auto;
      pading: 20px;
   }
`;

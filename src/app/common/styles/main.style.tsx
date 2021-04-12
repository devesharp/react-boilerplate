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
      font-family: 'Inter', sans-serif;
      color: #222;
      font-size: 16px;
   }
   body {
      -webkit-font-smoothing: antialiased;
   }

   .input-title {
      font-size: 14px !important;
      text-transform: none !important;
      font-weight: 400 !important;
      color: rgba(0, 0, 0, 0.45) !important;
      padding-bottom: 0px;
      height: 20px;

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
      border: 2px solid rgba(0, 0, 0, 0.25);
      border-radius: 3px;
      color: rgb(68, 68, 68);
      font-size: 15px;
      font-weight: 600;
      height: 35px !important;
      min-height: 35px !important;
      border-radius: 0px !important;
      border-top: none !important;
      border-right: none !important;
      border-left: none !important;
      border-image: initial !important;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25) !important;

      input {
         font-size: 15px !important;
         font-weight: 400 !important;
         padding: 0px !important;
      }

      &.focus {
         border-color: ${(p) => p.theme.primary} !important;
      }
   }

   .container {
      width: 100%;
      max-width: 1380px;
   }

   b {
      font-weight: 500 !important;
   }

   .btn {
      height: 35px;
      font-size: 15px;
      padding-top: 0px !important;
      padding-bottom: 0px !important;
   }

   .header-title {
      background: ${(p) => p.theme.primary};
      padding: 15px 20px;
      color: white;

      h4 {
         font-size: 22px;
         margin: 0px;
         padding: 0px;
      }
   }

   .card {
      box-shadow: 0 0 30px 0 rgb(82 63 105 / 5%);
      border: 0;
   }

   .form-container {
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
`;

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
      font-size: 16px !important;
      text-transform: none !important;
      font-weight: 400 !important;
   }

   .input-border {
      outline: none;
      border: 1px solid rgb(210, 210, 210) !important;
      border-radius: 4px !important;
      width: 100% !important;
      min-height: 48px !important;
      font-weight: 500 !important;
      //padding-top: 11px !important;
      //padding-bottom: 12px !important;
      //padding-left: 16px !important;
      color: rgb(74, 74, 74) !important;
      box-sizing: border-box !important;

      input {
         font-size: 16px !important;
         font-weight: 400 !important;
      }

      &.focus {
         border-color: ${(p) => p.theme.primary} !important;
      }
   }

   b {
      font-weight: 500 !important;
   }

   .btn {
      height: 43px;
      font-size: 16px;
   }
`;

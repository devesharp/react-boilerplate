import { createGlobalStyle } from 'styled-components';

const css = createGlobalStyle;

export default css<any>`
   .form-container {
      margin: auto;
      width: 100%;
      max-width: 1024px;
      padding: 0px;

      .form-title {
         font-size: 22px;
         font-weight: 600;
         margin-bottom: 30px;
      }

      &.lg {
         max-width: 1050px;
      }

      .form-section {
         padding: 2em 3em 2em 3em;
         background: white;
         margin-bottom: 2px;

         @media (max-width: 992px) {
            padding: 2em 1.5em 2em 1.5em;
         }
      }

      .form-sub-title {
         display: block;
         margin: 20px 0px 9px 0px;
         font-size: 15px;
         font-weight: 600;
         -webkit-letter-spacing: 0px;
         -moz-letter-spacing: 0px;
         -ms-letter-spacing: 0px;
         letter-spacing: 0px;
         color: rgba(0, 0, 0, 0.8);
         margin-left: -10px;
      }

      .form-body {
         padding: 1em 2em 2em 2em;
      }

      hr {
         margin: 0px;
      }

      .btn-group {
         .btn {
            background: #f5f5f5;
            line-height: 35px;

            &:hover,
            &.active {
               color: ${(p) => p.theme.primary};
               background: ${(p) => p.theme.primaryTextInside};
            }
         }
      }

      .form-item-container {
         padding: 8px 0;
         width: 100%;
      }

      .form-items-group {
         display: flex;
      }

      .btn-actions {
         text-align: center;
         padding: 50px 0px;
         bottom: 0px;
      }

      .checkbox {
         & + .title {
            color: #888 !important;
         }
      }

      .checkbox-container {
         .title {
            font-size: 14px !important;
            font-weight: 500;
         }
      }

      input:checked + .checkbox {
         border-color: ${(p) => p.theme.primary} !important;
         background: ${(p) => p.theme.primary} !important;

         svg {
            color: ${(p) => p.theme.primaryTextInside} !important;
         }

         & + .title {
            color: ${(p) => p.theme.primary} !important;
         }
      }

      .row {
         margin-right: -10px;
         margin-left: -10px;
      }

      .col-1,
      .col-2,
      .col-3,
      .col-4,
      .col-5,
      .col-6,
      .col-7,
      .col-8,
      .col-9,
      .col-10,
      .col-11,
      .col-12,
      .col,
      .col-auto,
      .col-sm-1,
      .col-sm-2,
      .col-sm-3,
      .col-sm-4,
      .col-sm-5,
      .col-sm-6,
      .col-sm-7,
      .col-sm-8,
      .col-sm-9,
      .col-sm-10,
      .col-sm-11,
      .col-sm-12,
      .col-sm,
      .col-sm-auto,
      .col-md-1,
      .col-md-2,
      .col-md-3,
      .col-md-4,
      .col-md-5,
      .col-md-6,
      .col-md-7,
      .col-md-8,
      .col-md-9,
      .col-md-10,
      .col-md-11,
      .col-md-12,
      .col-md,
      .col-md-auto,
      .col-lg-1,
      .col-lg-2,
      .col-lg-3,
      .col-lg-4,
      .col-lg-5,
      .col-lg-6,
      .col-lg-7,
      .col-lg-8,
      .col-lg-9,
      .col-lg-10,
      .col-lg-11,
      .col-lg-12,
      .col-lg,
      .col-lg-auto,
      .col-xl-1,
      .col-xl-2,
      .col-xl-3,
      .col-xl-4,
      .col-xl-5,
      .col-xl-6,
      .col-xl-7,
      .col-xl-8,
      .col-xl-9,
      .col-xl-10,
      .col-xl-11,
      .col-xl-12,
      .col-xl,
      .col-xl-auto {
         padding-right: 10px;
         padding-left: 10px;
      }

      .error-input {
         color: #dc3545;
         text-align: left;
         font-weight: 600;
         margin: 0px;
         padding: 0px;
         font-size: 13px;
         margin-top: 4px;
         margin-bottom: 10px;
      }
   }

   .page-container {
      overflow: auto;
      height: 100%;
      position: relative;

      .page-container-child {
         height: 100%;
      }
   }

   .page-form-container {
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
   }

   .page-actions-buttons {
      text-align: center;
      padding: 10px;
   }
`;

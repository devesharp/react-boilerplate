import styled from 'styled-components';

const css = styled.div;

export const Container = css<any>`
   display: flex;
   min-width: 100%;
   min-height: 100%;
   align-items: center;
   justify-content: center;
   background: ${(p) => p.theme.login.background};
   color: ${(p) => p.theme.login.textColor};

   .login-container {
      width: 100%;
      max-width: 400px;
      padding: 80px 30px;

      .input-title {
         color: ${(p) => p.theme.login.textColor} !important;
      }

      .logo {
         display: table;
         margin: auto;
         margin-bottom: 50px;
         max-width: 190px;
         max-height: 140px;
      }

      .loading-icon {
         display: table;
         margin: auto;
      }
   }
`;

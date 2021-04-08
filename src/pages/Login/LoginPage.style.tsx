import styled from 'styled-components';

const css = styled.div;

export const Container = css`
   display: flex;
   min-width: 100%;
   min-height: 100%;
   align-items: center;
   justify-content: center;
   
   .login-container {
      width: 100%;
      max-width: 400px;
      padding: 80px 30px;
      
      .logo {
         display: table;
         margin: auto;
         margin-bottom: 50px;
         max-width: 130px;
      }

      .loading-icon {
         display: table;
         margin: auto;
      }
   }
       
`;

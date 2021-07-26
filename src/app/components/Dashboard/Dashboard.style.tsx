import styled from 'styled-components';

const css = styled.div;

export const Container = css`
   background: #e7eef7;
   background: white;
   height: 100%;
   display: flex;
   flex-direction: row;

   .header-container {
      flex: 0;
   }

   .ds-logo {
      text-align: center;
      padding: 10px 0px;

      img {
         height: 40px;
      }
   }

   .username-container {
      padding: 15px 20px;
   }

   .page-body {
      flex: 1;
      overflow-y: auto;
   }

   @media (max-width: 992px) {
      .ds-logo {
         padding: 0px;
         
         img {
            max-height: 30px;
         }
      }
   }
`;

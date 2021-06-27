import styled from 'styled-components';

const css = styled.div;

export const Container = css`
   background: #e7eef7;
   height: 100%;
   display: flex;
   flex-direction: row;

   .header-container {
      flex: 0;
   }

   .ds-logo {
      text-align: center;
      padding-top: 20px;

      img {
         height: 40px;
      }
   }

   .username-container {
      padding: 20px 0px;
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

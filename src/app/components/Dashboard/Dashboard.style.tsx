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

   .page-body {
      flex: 1;
      overflow-y: auto;
   }
`;

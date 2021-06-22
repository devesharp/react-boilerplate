import styled from 'styled-components';

const css = styled.div;

export const Container = css`
   background: #f8f8f8;
   height: 100%;
   display: flex;
   flex-direction: row;

   .header-container {
      flex: 0;
   }

   .ds-logo {
      img {
         height: 30px;
      }
   }

   .page-body {
      flex: 1;
      overflow-y: auto;
   }
`;

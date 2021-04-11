import styled from 'styled-components';

const css = styled.div;

export const Container = css`
   background: #eef0f8;
   height: 100%;
   display: flex;
   flex-direction: column;

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
      overflow-y: scroll;
   }
`;

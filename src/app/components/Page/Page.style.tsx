import styled from 'styled-components';

const css = styled.div;

export const Container = css`
   height: 100%;
   flex: 1;
   display: flex;
   flex-direction: column;

   .header-title {
      flex: 0;
   }

   .page-container {
      flex: 1;
      overflow-y: auto;
   }
`;

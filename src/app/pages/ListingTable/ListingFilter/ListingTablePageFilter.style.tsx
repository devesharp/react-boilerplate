import styled from 'styled-components';

const css = styled.div;

export const Container = css`
   padding: 20px;

   .filter-item {
      //width: 33%;
      //display: inline-block;
      padding: 10px 0px;
   }

   @media (max-width: 1000px) {
      padding: 0px;

      .filter-action,
      .filter-title {
         display: none;
      }

      .filter-item {
         width: 100%;
      }
   }
`;

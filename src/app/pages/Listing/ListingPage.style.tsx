import styled from 'styled-components';

const css = styled.div;

export const Container = css`
   .searching-container {
      display: flex;
   }

   .col-filters {
      margin-right: 20px;
      flex: 0 0 320px;
   }

   .results-count {
      padding: 10px 0px;
      padding-bottom: 20px;
      font-size: 14px;
      font-weight: 500;
   }

   .cards-listing {
      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
   }

   @media (max-width: 1000px) {
      .col-filters {
         display: none;
      }
   }
`;

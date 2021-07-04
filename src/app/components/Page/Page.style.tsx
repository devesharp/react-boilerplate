import styled from 'styled-components';

const css = styled.div;

export const Container = css<any>`
   height: 100%;
   flex: 1;
   display: flex;
   flex-direction: column;

   .header-title {
      flex: 0;
      ${(p: any) => p.pageForm && 'max-width: 1024px;'}
      margin-left: auto;
      margin-right: auto;

      h4 {
         font-size: 30px;
         font-weight: 400;
         color: #434e6c;
         line-height: 36px;
         padding: 20px 30px 20px 30px;
      }
   }

   .page-container {
      flex: 1;
      padding: 0px 30px;
      overflow-y: scroll;
      position: relative;
      width: 100%;

      @media (max-width: 992px) {
         padding: 0px 10px;
      }
   }
`;

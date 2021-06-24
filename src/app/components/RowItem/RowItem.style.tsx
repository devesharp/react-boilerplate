import styled from 'styled-components';

const css = styled.div;

export const Container = css`
   width: 100%;
   .card-container {
      padding: 10px;
      display: flex;
      width: 100%;
      align-items: center;

      &.selected,
      &:hover {
         background: #007bff17;
      }

      .badge {
         color: #00ab00;
         background: #00ab001c;
         padding: 5px 15px;
         font-size: 12px;
         margin: 0px 10px;
      }

      .avatar {
         width: 20px;
         height: 20px;
         border-radius: 100px;
         display: table;
         margin: auto;
      }

      .col-name {
         font-size: 14px;
         font-weight: 500;
      }

      .icon-action {
         display: inline-block;
         width: 26px;
         height: 26px;
         border-radius: 100px;
         line-height: 24px;
         margin: 0px 4px;
         background: #eee;
         text-align: center;
         background: #5b7cfd17;
         color: #222;

         .material-icons-outlined {
            font-size: 18px;
         }
      }
   }
`;

import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
   display: flex;
   align-items: center;
   align-content: center;
   justify-content: center;
   justify-items: center;
   flex-direction: column;
   width: 100%;
   height: 100%;
   position: absolute;
   transform: translate3d(0, 0, 0);
   z-index: 100;
   background: rgba(255, 255, 255, 0.4);

   .login-page--container {
      max-width: 600px;
      width: 100%;
      padding: 20px;

      .icon-loading {
         display: table;
         margin: auto;
      }
   }
`;

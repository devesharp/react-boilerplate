import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
   display: flex;
   align-items: center;
   align-content: center;
   justify-content: center;
   justify-items: center;
   flex-direction: column;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   position: fixed;
   transform: translate3d(0, 0, 0);
   z-index: 1000;
   background: ${(p) => p.theme?.header?.backgroundColor};

   .login-page--container {
      max-width: 600px;
      width: 100%;
      padding: 20px;

      .logos {
         position: relative;
         padding-bottom: 30px;
      }

      .logo {
         margin: auto;
         display: table;
         width: 200px;
         margin-bottom: 30px;
      }

      .logo-black {
         height: 111px;
         position: absolute;
         left: 50%;
         top: 0px;
         transform: translateX(-50%);
      }

      .icon-loading {
         display: table;
         margin: auto;
      }
   }
`;

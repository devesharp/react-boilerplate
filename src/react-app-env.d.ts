/// <reference types="react-scripts" />
// import original module declarations
import 'styled-components';
import { ITheme } from '@devesharp/react-web';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface Console {
   tron: any;
}

// and extend them!
declare module 'styled-components' {
   export type DefaultTheme = ITheme;
}

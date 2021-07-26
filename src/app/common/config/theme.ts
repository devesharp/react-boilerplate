import { ITheme, ThemeDefault } from '@devesharp/react-web';

export const ThemeVariables: ITheme & {
   login: {
      background: string;
      textColor: string;
      dark: boolean;
   };
} = {
   ...ThemeDefault,
   login: {
      background: '#1c171a',
      textColor: 'white',
      dark: true,
   },
   primary: '#951bb9',
   header: {
      backgroundColor: '#1c171a',
      textColor: 'white',
      textColorMenu: 'white',
      textColorActiveMenu: '#951bb9',
   },
};

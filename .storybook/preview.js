import React from 'react';
import { addDecorator } from '@storybook/react';
import {ThemeProvider} from "styled-components";
import {ThemeVariables} from "../src/app/common/config/theme";
import {GlobalStyles} from "../src/app/common/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator((storyFn) => {
   return <>
   <ThemeProvider theme={ThemeVariables}>
      <GlobalStyles/>
      {storyFn()}
   </ThemeProvider>
   </>
});
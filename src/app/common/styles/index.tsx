import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import MainStyle from './main.style';
import FormStyle from './form.style';

export function GlobalStyles(): any {
   return (
      <>
         <MainStyle />
         <FormStyle />
      </>
   );
}

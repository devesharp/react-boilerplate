import React, { FunctionComponent, useState, useRef } from 'react';
import { Button } from '@devesharp/react-web';
import { IPageProps } from './Page.interface';
import * as S from './Page.style';

export const Page: FunctionComponent<IPageProps> = function Page(props) {
   const { formPage, title, addResource } = props;

   return (
      <S.Container pageForm={formPage}>
         <div className="page-container">
            <div className="header-title">
               <div className="container">
                  <div className="row">
                     <div className="col">
                        <h4>{title}</h4>
                     </div>
                     {!!addResource && (
                        <div className="col text-right">
                           <Button>Add Resource</Button>
                        </div>
                     )}
                  </div>
               </div>
            </div>

            {props.children}
         </div>
      </S.Container>
   );
};

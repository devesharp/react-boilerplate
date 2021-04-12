import React, { FunctionComponent, useState, useRef } from 'react';
import { IPageProps } from './Page.interface';
import * as S from './Page.style';

export const Page: FunctionComponent<IPageProps> = function Page(props) {
   return (
      <S.Container>
         <div className="header-title">
            <div className="container ">
               <h4>{props.title}</h4>
            </div>
         </div>

         <div className="page-container">{props.children}</div>
      </S.Container>
   );
};

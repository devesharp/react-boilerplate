import React, { FunctionComponent, useState, useRef } from 'react';
import { ICardItemProps } from './CardItem.interface';
import * as S from './CardItem.style';

export const CardItem: FunctionComponent<any> = function CardItem({ resource }) {
   if (!resource) {
      return null;
   }

   return (
      <S.Container className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
         <div className="card">
            <img src={resource.image} alt="" className="avatar" />

            <br />
            <h6>{resource.name}</h6>
         </div>
         {/**/}
      </S.Container>
   );
};

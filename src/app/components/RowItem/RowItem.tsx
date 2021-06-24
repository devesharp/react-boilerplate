import React, { FunctionComponent, useState, useRef } from 'react';
import { Checkbox } from '@devesharp/react-web';
import classNames from 'classnames';
import { ICardItemProps } from './RowItem.interface';
import * as S from './RowItem.style';

export const RowItem: FunctionComponent<any> = function CardItem({ resource, selected, onSelect }) {
   if (!resource) {
      return null;
   }

   return (
      <S.Container>
         <div className={classNames('card-container', selected && 'selected')}>
            <div className="col-checkbox">
               <Checkbox checked={selected} onChange={(c: boolean) => onSelect(resource.id, c)} />
            </div>
            <div className="col-logo">
               <img src={resource.image} alt="" className="avatar" />
            </div>
            <div className="col-name">{resource.name}</div>
            <div className="col-name text-right">
               <div className="badge">Ativo</div>
            </div>
            <div className="col-action">
               <div className="icon-action">
                  <span className="material-icons-outlined">edit</span>
               </div>
               <div className="icon-action">
                  <span className="material-icons-outlined">delete</span>
               </div>
            </div>
         </div>
      </S.Container>
   );
};

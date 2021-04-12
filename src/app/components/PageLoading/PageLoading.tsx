import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import { Button, LoaderIcon } from '@devesharp/react-web';
import { useTheme } from 'styled-components';
import { useTransition } from 'react-spring';
import { IPageLoadingProps } from './PageLoading.interface';
import * as S from './PageLoading.style';
import { LogoImage } from '~/assets/images';

export const PageLoading: FunctionComponent<IPageLoadingProps> = function PageLoading(props) {
   const { primary } = useTheme();

   const transitions = useTransition(props.show, null, {
      from: { opacity: 1 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
   });

   return (
      <>
         {transitions.map(
            ({ item, key, props: propsAnim }: any) =>
               item && (
                  <S.Container key={key} style={propsAnim}>
                     <div className="login-page--container">
                        <div className="login-page--container--inner">
                           <div className="icon-loading">
                              <LoaderIcon color={primary} size={48} />
                           </div>
                        </div>
                     </div>
                  </S.Container>
               ),
         )}
      </>
   );
};

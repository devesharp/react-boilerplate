import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import { Button, LoaderIcon } from '@devesharp/react-web';
import { useTheme } from 'styled-components';
import { useTransition } from 'react-spring';
import { ILoadingScreenProps } from './LoadingScreen.interface';
import * as S from './LoadingScreen.style';
import { LogoImage } from '~/assets/images';

export const LoadingScreen: FunctionComponent<ILoadingScreenProps> = function LoadingScreen(props) {
   const { primary } = useTheme();
   const { retry, error, show } = props;

   const transitions = useTransition(show, null, {
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
                           <div className="logos">
                              <div>
                                 <img src={LogoImage} className="logo" />
                              </div>
                           </div>
                           <div>
                              {!!error && (
                                 <div className="text-center">
                                    <h4>Erro ao conectar com o servidor, verifique sua internet e tente novamente!</h4>
                                    <small>Se o problema persistir entre em contato o suporte.</small>
                                    <br />
                                    <br />
                                    <Button onClick={retry}>Tentar novamente</Button>
                                 </div>
                              )}
                              {!error && (
                                 <div className="icon-loading">
                                    <LoaderIcon color={primary} size={48} />
                                 </div>
                              )}
                           </div>
                        </div>
                     </div>
                  </S.Container>
               ),
         )}
      </>
   );
};

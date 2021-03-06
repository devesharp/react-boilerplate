import React, { FunctionComponent, useState, useRef } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { Button, Input, AnimationInOut, LoaderIcon } from '@devesharp/react-web';
import { useTheme } from 'styled-components';
import { ILoginProps } from './LoginPage.interface';
import { LoginPageController } from './LoginPage.controller';
import * as S from './LoginPage.style';
import { LogoVerticalImage } from '~/assets/images';

export const LoginPage: FunctionComponent<ILoginProps> = function Login(props) {
   const c = LoginPageController();
   const { primary } = useTheme();

   return (
      <S.Container data-testid="login-page">
         <div className="login-container">
            <img src={LogoVerticalImage} className="logo" />

            {c.loading && (
               <div className="loading-icon">
                  <LoaderIcon size={48} color={primary} />
               </div>
            )}

            <div className={c.loading && 'd-none'}>
               <Form ref={c.formRef} onSubmit={c.onSubmitForm}>
                  {!!c.error && (
                     <div className="text-danger text-center">
                        <b>{c.error}</b>
                     </div>
                  )}

                  <div className="form-group">
                     <Input title="Usuário" name="login" />
                  </div>

                  <div className="form-group">
                     <Input
                        title={
                           <>
                              Senha{' '}
                              <Link to="/forget-password" className="float-right">
                                 <b>Esqueceu a senha?</b>
                              </Link>
                           </>
                        }
                        name="password"
                        password
                     />
                  </div>

                  <div className="form-group">
                     <Button onClick={() => {}} w100 type="submit">
                        Entrar
                     </Button>
                  </div>

                  <div className="new-account text-center">
                     Não tem uma conta?
                     <b>
                        <Link to="/register">Cadastre-se</Link>
                     </b>
                  </div>
               </Form>
            </div>
         </div>
      </S.Container>
   );
};

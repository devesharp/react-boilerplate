import React, { FunctionComponent, useState, useRef } from 'react';
import { Form } from '@unform/web';
import { Button, Input } from '@devesharp/react-web';
import { ICreateResourceProps } from './CreateResourcePage.interface';
import { CreateResourcePageController } from './CreateResourcePage.controller';
import * as S from './CreateResourcePage.style';
import { Page } from '~/app/components/Page/Page';
import { PageLoading } from '~/app/components/PageLoading/PageLoading';

export const CreateResourcePage: FunctionComponent<ICreateResourceProps> = function CreateResource(props) {
   const ctrl = CreateResourcePageController();

   return (
      <Page title="Create Resource">
         <PageLoading show={ctrl.loading || ctrl.saving} />
         <S.Container>
            <div className="container pt-3">
               <Form onSubmit={ctrl.onSubmitForm} ref={ctrl.formRef}>
                  <div className="form-container">
                     <div className="card form-card">
                        <div className="form-title">Dados da venda</div>
                        <div className="form-body">
                           <div className="form-group">
                              <Input title="Valor da venda" name="price" prefix="R$" textRight />
                           </div>
                        </div>

                        <hr />

                        <div className="form-title">Dados do Boleto</div>
                        <div className="form-body">
                           <div className="form-group">
                              <Input title="Valor da venda" name="price" prefix="R$" textRight />
                           </div>
                        </div>
                     </div>

                     <div className="text-right pt-3">
                        <Button onClick={ctrl.forceSubmit}>Salvar</Button>
                     </div>
                  </div>
               </Form>
            </div>
         </S.Container>
      </Page>
   );
};

import React, { FunctionComponent, useState, useRef } from 'react';
import { Form } from '@unform/web';
import { Button, ButtonsGroup, Checkbox, Input, InputCounter, Select, Textarea } from '@devesharp/react-web';
import { ICreateResourceProps } from './CreateResourcePage.interface';
import { CreateResourcePageController } from './CreateResourcePage.controller';
import * as S from './CreateResourcePage.style';
import { Page } from '~/app/components/Page/Page';
import { PageLoading } from '~/app/components/PageLoading/PageLoading';
import { FormSection } from '~/app/components/Forms/FormSection';
import { FormTitle } from '~/app/components/Forms/FormTitle';
import { FormItem } from '~/app/components/Forms/FormItem';
import { FormSubTitle } from '~/app/components/Forms/FormSubTitle';
import { FormInputTitle } from '~/app/components/Forms/FormInputTitle';
import { FormContainer } from '~/app/components/Forms/FormContainer';

export const CreateResourcePage: FunctionComponent<ICreateResourceProps> = function CreateResource(props) {
   const ctrl = CreateResourcePageController();

   return (
      <Page title="Create Resource" formPage>
         <PageLoading show={ctrl.loading || ctrl.saving} />

         <FormContainer>
            <Form onSubmit={() => {}}>
               <FormSection>
                  <FormTitle>First Title</FormTitle>
                  <FormItem>
                     <Input name="text" title="Input" />
                  </FormItem>

                  <div className="row">
                     <div className="col-md-4">
                        <FormItem>
                           <Input name="text" title="Input" />
                        </FormItem>
                     </div>
                     <div className="col-md-4">
                        <FormItem>
                           <Input name="text" title="Input" />
                        </FormItem>
                     </div>
                     <div className="col-md-4">
                        <FormItem>
                           <InputCounter name="text" title="Input" />
                        </FormItem>
                     </div>
                  </div>
                  <FormItem>
                     <Textarea name="textarea" title="Input" minRows={8} />
                  </FormItem>
                  <FormItem>
                     <Select
                        options={[
                           { name: 'Eren', value: 'Eren' },
                           { name: 'Levi', value: 'Levi' },
                           { name: 'Rainer', value: 'Rainer' },
                           { name: 'Falco', value: 'Falco' },
                        ]}
                        name="select"
                        title="Select"
                     />
                  </FormItem>
                  <FormItem>
                     <ButtonsGroup
                        options={[
                           { name: 'Eren', value: 'Eren' },
                           { name: 'Levi', value: 'Levi' },
                           { name: 'Rainer', value: 'Rainer' },
                           { name: 'Falco', value: 'Falco' },
                        ]}
                        name="buttons-group"
                        title="Buttons Groups"
                     />
                  </FormItem>

                  <FormSubTitle>Sub Title</FormSubTitle>
                  <FormItem>
                     <FormInputTitle>Checkbox Group</FormInputTitle>
                     <Checkbox checked title="Select" />
                     <Checkbox name="checkbox" title="Select" />
                     <Checkbox name="checkbox" title="Select" />
                     <Checkbox name="checkbox" title="Select" />
                  </FormItem>
               </FormSection>

               <FormSection>
                  <FormTitle>Second Title</FormTitle>
                  <FormItem>
                     <Input name="text" title="Input" />
                  </FormItem>
                  <FormItem>
                     <Select
                        options={[
                           { name: 'Eren', value: 'Eren' },
                           { name: 'Levi', value: 'Levi' },
                           { name: 'Rainer', value: 'Rainer' },
                           { name: 'Falco', value: 'Falco' },
                        ]}
                        name="select"
                        title="Select"
                     />
                  </FormItem>
                  <FormItem>
                     <ButtonsGroup
                        options={[
                           { name: 'Eren', value: 'Eren' },
                           { name: 'Levi', value: 'Levi' },
                           { name: 'Rainer', value: 'Rainer' },
                           { name: 'Falco', value: 'Falco' },
                        ]}
                        name="buttons-group"
                        title="Buttons Groups"
                     />
                  </FormItem>
               </FormSection>

               <div className="btn-actions">
                  <Button>Salvar</Button>
               </div>
            </Form>
         </FormContainer>

      </Page>
   );
};

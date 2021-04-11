import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import { Input, Button } from '@devesharp/react-web';
import { FormHandles } from '@unform/core';
import { DeleteEmpty } from '@devesharp/react-utils';
import { IListingFilterProps } from './ListingFilter.interface';
import * as S from './ListingFilter.style';

export const ListingFilter: FunctionComponent<any> = function ListingFilter({ filters, handleFilters }) {
   const formRef = useRef<any>();
   const [initialData, setInitialData] = useState(configureForm(filters));

   function configureForm(_filters: any): any {
      const filtersAux = { ..._filters };
      return filtersAux;
   }

   useEffect(() => {
      formRef.current?.reset();
      formRef.current?.setData(configureForm(filters));
   }, [filters]);

   const forceSubmit = (filter?: string): any => {
      formRef.current?.submitForm();
   };

   function onSubmit(_filters: any): void {
      const filtersAux = { ..._filters };

      handleFilters(DeleteEmpty(filtersAux));
   }

   return (
      <S.Container>
         <div className="filter-title">
            <h4 className="pb-2">Filtrar</h4>
         </div>

         <Form ref={formRef} onSubmit={onSubmit} initialData={initialData}>
            <div className="filters">
               <div className="filter-item">
                  <Input name="name" title="Name" onEnter={forceSubmit} onBlur={forceSubmit} />
               </div>

               <div className="filter-item">
                  <Input name="status" title="Status" onEnter={forceSubmit} onBlur={forceSubmit} />
               </div>

               <div className="filter-item">
                  <Input name="members" title="Members" onEnter={forceSubmit} onBlur={forceSubmit} />
               </div>

               <div className="filter-action">
                  <div className="text-right">
                     <div className="input-title" />
                     <Button onClick={forceSubmit} w100>
                        Search
                     </Button>
                  </div>
               </div>
            </div>
         </Form>
      </S.Container>
   );
};

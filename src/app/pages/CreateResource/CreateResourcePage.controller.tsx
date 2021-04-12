import React, { FunctionComponent, useState, useRef } from 'react';
import { useViewForm } from '@devesharp/react-hooks';

export function CreateResourcePageController(props?: any): any {
   const { formRef, onSubmitForm, forceSubmit, loading, started, saving } = useViewForm({});

   return {
      loading,
      started,
      saving,
      formRef,
      onSubmitForm,
      forceSubmit,
   };
}

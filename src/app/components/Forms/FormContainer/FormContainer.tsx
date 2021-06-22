import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { IFormContainerProps } from './FormContainer.interface';

export const FormContainer: FunctionComponent<IFormContainerProps> = function FormContainer({ children, size = 'md' }) {
   const className = classNames('form-container', size);

   return <div className={className}>{children}</div>;
};

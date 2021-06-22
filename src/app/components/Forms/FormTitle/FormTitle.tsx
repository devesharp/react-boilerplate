import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { IFormTitleProps } from './FormTitle.interface';

export const FormTitle: FunctionComponent<IFormTitleProps> = function FormTitle({ children }) {
   const className = classNames('form-title');

   return <h2 className={className}>{children}</h2>;
};

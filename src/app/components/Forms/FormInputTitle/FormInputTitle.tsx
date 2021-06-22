import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { IFormInputTitleProps } from './FormInputTitle.interface';

export const FormInputTitle: FunctionComponent<IFormInputTitleProps> = function FormSection({ children }) {
   const className = classNames('input-title');

   return <div className={className}>{children}</div>;
};

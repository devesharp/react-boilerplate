import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { IFormSubTitleProps } from './FormSubTitle.interface';

export const FormSubTitle: FunctionComponent<IFormSubTitleProps> = function FormTitle({ children }) {
   const className = classNames('form-sub-title');

   return <h3 className={className}>{children}</h3>;
};

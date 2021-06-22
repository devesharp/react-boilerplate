import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { IFormSectionProps } from './FormSection.interface';

export const FormSection: FunctionComponent<IFormSectionProps> = function FormSection({ children }) {
   const className = classNames('form-section');

   return <div className={className}>{children}</div>;
};

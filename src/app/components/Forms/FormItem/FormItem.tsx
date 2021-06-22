import React, { FunctionComponent, useRef, useEffect, useContext, useLayoutEffect } from 'react';
import classNames from 'classnames';
import { IFormItemProps } from './FormItem.interface';

export const FormItem: FunctionComponent<IFormItemProps> = function FormItem({ children }) {
   const className = classNames('form-item-container');

   return <div className={className}>{children}</div>;
};

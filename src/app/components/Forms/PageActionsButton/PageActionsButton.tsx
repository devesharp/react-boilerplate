import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import {PageLoading} from "~/app/components/PageLoading/PageLoading";
import { IPageContainerProps } from './PageActionsButton.interface';

export const PageActionsButton: FunctionComponent<IPageContainerProps> = function FormContainer({
   children
}) {
   const className = classNames('page-actions-buttons');

   return <div className={className}>{children}</div>;
};

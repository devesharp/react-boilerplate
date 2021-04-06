import React, { FunctionComponent, useState, useRef } from 'react';
import { ITemplateNameProps } from './TemplateName.interface';
import { TemplateNameController } from './TemplateName.controller';
import * as S from './TemplateName.style';

export const TemplateName: FunctionComponent<ITemplateNameProps> = function TemplateName(props) {
   const ctrl = TemplateNameController();

   return <S.Container>{/**/}</S.Container>;
};

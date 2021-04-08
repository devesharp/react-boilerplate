import React, { FunctionComponent, useState, useRef } from 'react';
import { ITemplateNameProps } from './TemplateNamePage.interface';
import { TemplateNamePageController } from './TemplateNamePage.controller';
import * as S from './TemplateNamePage.style';

export const TemplateName: FunctionComponent<ITemplateNameProps> = function TemplateName(props) {
   const ctrl = TemplateNamePageController();

   return <S.Container>{/**/}</S.Container>;
};

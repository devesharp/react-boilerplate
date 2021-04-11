import React, { FunctionComponent, useState, useRef } from 'react';
import { Header } from '@devesharp/react-web/dist/components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faLayerGroup, faTable, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { IDashboardProps } from './Dashboard.interface';
import * as S from './Dashboard.style';
import { LogoImage } from '~/assets/images';

export const Dashboard: FunctionComponent<IDashboardProps> = function Dashboard(props) {
   return (
      <S.Container>
         <div className="header-container">
            <Header logo={LogoImage} menu={menu} user={user} />
         </div>
         <div className="page-body">{props.children}</div>
      </S.Container>
   );
};

const user = { name: 'John' };

const menu = [
   {
      title: (
         <>
            <FontAwesomeIcon icon={faUserCircle} /> Home
         </>
      ),
      route: '/',
   },
   {
      title: (
         <>
            <FontAwesomeIcon icon={faLayerGroup} /> Components
         </>
      ),
      route: '/components',
      subMenu: [
         { title: 'Base', route: '/components/base' },
         { title: 'Commons', route: '/components/commons' },
         { title: 'Customs', route: '/components/customs' },
      ],
   },
   {
      title: (
         <>
            <FontAwesomeIcon icon={faTable} /> CRUD
         </>
      ),
      route: '/CRUD',
      subMenu: [
         { title: 'Base', route: '/CRUD/base' },
         { title: 'Commons', route: '/CRUD/commons' },
         { title: 'Customs', route: '/CRUD/customs' },
      ],
   },
   {
      title: (
         <>
            <FontAwesomeIcon icon={faCogs} /> Settings
         </>
      ),
      route: '/settings',
   },
];

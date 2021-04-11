import React, { FunctionComponent, useState, useRef } from 'react';
import { useViewList } from '@devesharp/react-hooks';
import { ResolveSync } from '@devesharp/react-utils';
import history from '~/app/common/config/history';
import {
   LogoProject1,
   LogoProject2,
   LogoProject3,
   LogoProject4,
   LogoProject5,
   LogoProject6,
   LogoProject7,
} from '~/assets/images';

export function ListingPageController(props?: any): any {
   const viewList = useViewList({
      resolves: {
         resources: ResolveSync(() => ({
            results: [
               { id: 1, image: LogoProject1, name: 'Air B - Real Estate' },
               { id: 2, image: LogoProject2, name: 'Ad Brand - Fashion Footwear' },
               { id: 3, image: LogoProject3, name: 'Nexa - Next generation SAAS' },
               { id: 4, image: LogoProject4, name: 'Citrix - Technology' },
               { id: 5, image: LogoProject5, name: 'GAP - Fashion Trends' },
               { id: 6, image: LogoProject6, name: 'Nokia - Mobile Innovator' },
               { id: 7, image: LogoProject7, name: 'Ad Brand - Fashion Footwear' },
               { id: 1, image: LogoProject1, name: 'Air B - Real Estate' },
               { id: 2, image: LogoProject2, name: 'Ad Brand - Fashion Footwear' },
               { id: 3, image: LogoProject3, name: 'Nexa - Next generation SAAS' },
               { id: 4, image: LogoProject4, name: 'Citrix - Technology' },
               { id: 5, image: LogoProject5, name: 'GAP - Fashion Trends' },
               { id: 6, image: LogoProject6, name: 'Nokia - Mobile Innovator' },
               { id: 7, image: LogoProject7, name: 'Ad Brand - Fashion Footwear' },
               { id: 1, image: LogoProject1, name: 'Air B - Real Estate' },
            ],
            count: 100,
         })),
      },
      history,
   });

   console.log(viewList.history);
   
   return { viewList };
}

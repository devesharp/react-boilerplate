import React, { FunctionComponent, useState, useRef, useCallback, useEffect } from 'react';
import { useSelectGroup, useViewList } from '@devesharp/react-hooks';
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
import { RowItem } from '~/app/components/RowItem/RowItem';

export function ListingTablePageController(props?: any): any {
   const [onSelect, onUnselectAll, selected, checkSelected] = useSelectGroup();
   const showActions = selected.size;

   const viewList = useViewList({
      resolves: {
         resources: ResolveSync<any>(() => ({
            results: [
               { id: 1, image: LogoProject1, name: 'Air B - Real Estate' },
               { id: 2, image: LogoProject2, name: 'Ad Brand - Fashion Footwear' },
               { id: 3, image: LogoProject3, name: 'Nexa - Next generation SAAS' },
               { id: 4, image: LogoProject4, name: 'Citrix - Technology' },
               { id: 5, image: LogoProject5, name: 'GAP - Fashion Trends' },
               { id: 6, image: LogoProject6, name: 'Nokia - Mobile Innovator' },
               { id: 7, image: LogoProject7, name: 'Ad Brand - Fashion Footwear' },
               { id: 11, image: LogoProject1, name: 'Air B - Real Estate' },
               { id: 12, image: LogoProject2, name: 'Ad Brand - Fashion Footwear' },
               { id: 13, image: LogoProject3, name: 'Nexa - Next generation SAAS' },
               { id: 14, image: LogoProject4, name: 'Citrix - Technology' },
               { id: 15, image: LogoProject5, name: 'GAP - Fashion Trends' },
               { id: 16, image: LogoProject6, name: 'Nokia - Mobile Innovator' },
               { id: 17, image: LogoProject7, name: 'Ad Brand - Fashion Footwear' },
               { id: 21, image: LogoProject1, name: 'Air B - Real Estate' },
            ],
            count: 100,
         })),
      },
      history,
   });

   useEffect(() => {
      viewList.registerOnSearch(() => {
         onUnselectAll();
      });
   }, []);

   function onSelectResource(id: any, select: boolean): void {
      onSelect(id, select);
   }

   const renderResource = useCallback(
      (resource: any, i: any) => (
         <RowItem resource={resource} selected={checkSelected(resource.id)} onSelect={onSelectResource} />
      ),
      [],
   );

   return { viewList, showActions, renderResource };
}

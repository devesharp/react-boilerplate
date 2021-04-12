import React, { FunctionComponent, useState, useRef } from 'react';
import { PageListing } from '@devesharp/react-web/dist/components/PageListing/PageListing';
import { Pagination, ScreenMedia, Button, Select } from '@devesharp/react-web';
import { Form } from '@unform/web';
import { IListingProps } from './ListingPage.interface';
import { ListingPageController } from './ListingPage.controller';
import * as S from './ListingPage.style';
import { ListingFilter } from '~/app/pages/Listing/ListingFilter/ListingFilter';
import { CardItem } from '~/app/components/CardItem/CardItem';
import { Page } from '~/app/components/Page/Page';

// const PageListing = PageListing2 as any;
export const ListingPage: FunctionComponent<IListingProps> = function Listing(props) {
   const ctrl = ListingPageController();

   return (
      <Page title="Projects">
         <S.Container>
            <div className="container pb-5">
               <PageListing.Container viewList={ctrl.viewList}>
                  <PageListing.ScrollContainer>
                     <div className="pt-3">
                        <div className="searching-container">
                           <div className="col-filters">
                              <div className="card">
                                 <PageListing.FiltersContainer filterComponent={ListingFilter} useClean={false} />
                              </div>
                           </div>
                           <div className="col-listing">
                              <ScreenMedia showIn="mobile">
                                 <PageListing.Context
                                    render={({ openFilters }: any) => (
                                       <Button onClick={openFilters} outline w100>
                                          Filtrar
                                       </Button>
                                    )}
                                 />
                              </ScreenMedia>

                              <div className="results-count">
                                 <div className="d-flex">
                                    <div className="flex-grow-1 align-self-center">
                                       Mostrando <PageListing.TextResultCount /> resultados
                                    </div>
                                    <div className="flex-grow-0">
                                       <PageListing.Context
                                          render={({ setSort, filters }: any) => (
                                             <Form onSubmit={(e) => setSort(e.sort)} initialData={filters}>
                                                <Select
                                                   name="sort"
                                                   options={[
                                                      {
                                                         name: 'Latest',
                                                         value: '-id',
                                                      },
                                                      {
                                                         name: 'Created at',
                                                         value: '-create_at',
                                                      },
                                                   ]}
                                                   onChange={(v: any) => {
                                                      setSort(v);
                                                   }}
                                                />
                                             </Form>
                                          )}
                                       />
                                    </div>
                                 </div>
                              </div>

                              <PageListing.CardsContainer
                                 renderResource={(resource: any, i: any) => <CardItem resource={resource} />}
                                 renderResourceSkeleton={(resource: any, i: any) => <CardItem skeleton />}
                              />

                              <PageListing.Context
                                 render={({ resourcesTotal, limit, currentPage, setPage }: any) => (
                                    <Pagination
                                       total={resourcesTotal}
                                       perPage={limit}
                                       currentPage={currentPage}
                                       onChange={setPage}
                                    />
                                 )}
                              />
                           </div>
                        </div>
                     </div>
                  </PageListing.ScrollContainer>
               </PageListing.Container>
            </div>
         </S.Container>
      </Page>
   );
};

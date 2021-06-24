import React, { FunctionComponent, useState, useRef } from 'react';
import { PageListing } from '@devesharp/react-web/dist/components/PageListing/PageListing';
import { Pagination, ScreenMedia, Button, Select } from '@devesharp/react-web';
import { Form } from '@unform/web';
import { IListingProps } from './ListingTablePage.interface';
import { ListingTablePageController } from './ListingTablePage.controller';
import * as S from './ListingTablePage.style';
import { Page } from '~/app/components/Page/Page';
import { RowItem } from '~/app/components/RowItem/RowItem';
import { ListingTablePageFilter } from '~/app/pages/ListingTable/ListingFilter/ListingTablePageFilter';

// const PageListing = PageListing2 as any;
export const ListingTablePage: FunctionComponent<IListingProps> = function Listing(props) {
   const ctrl = ListingTablePageController();

   return (
      <Page title="Projects" addResource={() => {}}>
         <S.Container>
            <div className="container pb-5">
               <PageListing.Container viewList={ctrl.viewList}>
                  <PageListing.ScrollContainer>
                     <div className="pt-3">
                        <div className="searching-container">
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

                              <div className="card">
                                 <PageListing.FiltersContainer
                                    filterComponent={ListingTablePageFilter}
                                    useClean={false}
                                 />
                              </div>

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

                              <div className="card p-4">
                                 {!!ctrl.showActions && (
                                    <div className="row pb-3">
                                       <div className="col-lg text-left">
                                          <div className="result-info">
                                             <b>{ctrl.showActions}</b> resultados selecionados
                                          </div>
                                       </div>
                                       <div className="col-lg text-right">
                                          <div className="p-1 d-inline-block">
                                             <Button size="sm" variant="light">
                                                Exportar
                                             </Button>
                                          </div>
                                          <div className="p-1 d-inline-block">
                                             <Button size="sm" variant="danger">
                                                Deletar
                                             </Button>
                                          </div>
                                       </div>
                                    </div>
                                 )}
                                 {/* Cards */}
                                 <PageListing.CardsContainer
                                    renderResource={ctrl.renderResource}
                                    renderResourceSkeleton={ctrl.renderResource}
                                 />

                                 {/* Cards */}

                                 {/* Pagination */}
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
                                 {/* ---/ Pagination */}
                              </div>
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

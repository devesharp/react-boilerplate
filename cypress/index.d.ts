/* eslint-disable @typescript-eslint/interface-name-prefix */
// / <reference types="cypress" />
declare namespace Cypress {
   // eslint-disable-next-line @typescript-eslint/interface-name-prefix
   interface Chainable<Subject> extends Chainable<Subject> {
      testId(title: string, options?: Partial<Loggable & Timeoutable>): Chainable<any>;
      findTestId(title: string, options?: Partial<Loggable & Timeoutable>): Chainable<any>;
      keydown(key: number): void;
      attachFile(fixture: string | FixtureData, processingOpts?: FileProcessingOptions): Chainable<Subject>;
      setMockErrorAPI(method: string, url: string): void;
      clearMockErrorAPI(method: string, url: string): void;
   }
}

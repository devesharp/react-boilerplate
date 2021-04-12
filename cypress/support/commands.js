/* eslint-disable no-undef */
Cypress.Commands.add('keydown', (key, options = {}) => cy.get('body').trigger('keydown', { keyCode: key, which: key }));
Cypress.Commands.add('testId', (name, options = {}) => cy.get(`[data-testid="${name}"]`, options));
Cypress.Commands.add(
   'findTestId',
   {
      prevSubject: ['element', 'document', 'window'],
   },
   (subject, name, options = {}) => {
      return cy.wrap(subject).find(`[data-testid="${name}"]`, options);
   },
);
Cypress.Commands.add('setMockErrorAPI', (method, url) =>
   cy.route({
      method,
      url: `${Cypress.env('api')}${url}`,
      status: 500,
      response: { error: true, code: 1, message: 'Dados de acesso incorretos.' },
   }),
);
Cypress.Commands.add('clearMockErrorAPI', (method, url) =>
   cy.route({
      method,
      url: `${Cypress.env('api')}${url}`,
   }),
);

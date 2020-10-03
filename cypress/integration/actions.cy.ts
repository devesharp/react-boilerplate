describe('Actions', () => {
   beforeEach(() => {
      cy.visit('/');
   });

   it('example', () => {
      cy.testId('home-page').contains('Home Page');
   });
});

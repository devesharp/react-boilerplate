describe('Actions', () => {
   beforeEach(() => {
      cy.visit('/');
   });

   it('example', () => {
      cy.testId('login-page').contains('Não tem uma conta?');
   });
});

describe('Can find the different components in the app', () => {
  it('can visit home page and load all page content', () => {
    cy.visit('/');
    cy.get('[data-cy="my-hero"]').should('be.visible');
    cy.get('[data-cy="who-am-i"]').should('be.visible');
    cy.get('[data-cy="my-work"]').should('be.visible');
    cy.get('[data-cy="footer"]').should('be.visible');
  });
});

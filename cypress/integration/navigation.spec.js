describe('Can find the different components in the app', () => {
  it('can visit home page and load all page content', () => {
    cy.visit('/');
    cy.get('[data-cy="workPageLink"]').should('be.visible');
    cy.get('[data-cy="articlesPageLink"]').should('be.visible');
    cy.get('[data-cy="notesPageLink"]').should('be.visible');
    cy.get('[data-cy="aboutPageLink"]').should('be.visible');
    cy.get('[data-cy="rssPageLink"]').should('be.visible');
  });
});

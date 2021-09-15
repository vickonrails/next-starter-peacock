describe('Can find the different components in the app', () => {
  it('can visit home page and load all page content', () => {
    cy.visit('/');
    cy.get('[data-cy="homePageTitle"]').contains('NextJS Starter Peacock');
    cy.get('[data-cy="articlesPageLink"]').should('be.visible');
    cy.get('[data-cy="notesPageLink"]').should('be.visible');
    cy.get('[data-cy="aboutPageLink"]').should('be.visible');
    cy.get('[data-cy="rssPageLink"]').should('be.visible');
    cy.get('[data-cy="workPageLink"]').should('be.visible').click();
    cy.get('[data-cy="pageTitle"]').contains('Works & Projects');
    cy.get('[data-cy="articlesPageLink"]').should('be.visible').click();
    cy.url().should('include', '/articles');
    cy.get('[data-cy="pageTitle"]').contains('Articles');
    cy.get('[data-cy="notesPageLink"]').should('be.visible').click();
    cy.url().should('include', '/notes');
    cy.get('[data-cy="pageTitle"]').contains('Notes');
    cy.get('[data-cy="aboutPageLink"]').should('be.visible').click();
    cy.url().should('include', '/about');
    cy.contains('About Me🧘🏾‍♂️');
    cy.get('[data-cy="rssPageLink"] a')
      .should('be.visible')
      .invoke('attr', 'href')
      .should('include', '/rss.xml');
  });
});

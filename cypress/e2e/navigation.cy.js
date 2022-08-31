describe('Can find the different components in the app', () => {
  it('can visit home page and load all page content', () => {
    cy.visit('/');
    cy.get('[data-cy="homePageTitle"]').contains('NextJS Starter Peacock');
    cy.get('[data-cy="articlesPageLink"]').should('be.visible');
    cy.get('[data-cy="notesPageLink"]').should('be.visible');
    cy.get('[data-cy="aboutPageLink"]').should('be.visible');
    cy.get('[data-cy="rssPageLink"]').should('be.visible');
    cy.get('[data-cy="workPageLink"]').should('be.visible').click();
    cy.contains('[data-cy="pageTitle"]', 'Works & Projects').should(
      'be.visible',
    );
    cy.get('[data-cy="articlesPageLink"]').should('be.visible').click();
    cy.location('pathname').should('equal', '/articles');
    cy.contains('[data-cy="pageTitle"]', 'Articles').should('be.visible');
    cy.get('[data-cy="notesPageLink"]').should('be.visible').click();
    cy.location('pathname').should('equal', '/notes');
    cy.contains('[data-cy="pageTitle"]', 'Notes').should('be.visible');
    cy.get('[data-cy="aboutPageLink"]').should('be.visible').click();
    cy.location('pathname').should('equal', '/about');
    cy.contains('About Me🧘🏾‍♂️');
    cy.get('[data-cy="rssPageLink"] a')
      .should('be.visible')
      .invoke('attr', 'href')
      .should('include', '/rss.xml');
  });
});

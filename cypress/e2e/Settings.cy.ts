describe('Settings', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.c-card__content > :nth-child(2)').click();
  })
  it('visits settings page', () => {
    cy.contains('.c-pageTitle__title', 'Settings');
  })
  it('Change language', () => {
    cy.get(':nth-child(2) > .c-select').select('Deutsch')
    cy.contains('.c-pageTitle__title', 'Einstellungen');
  })
  it('Change theme', () => {
    cy.get(':nth-child(3) > .c-select').select('Red')
    cy.get('.c-select').should('have.css', 'color', 'rgb(247, 80, 73)')
  })
})

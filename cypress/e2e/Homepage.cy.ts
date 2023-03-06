describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('visits the app root url', () => {
    cy.contains('.c-pageTitle__title', 'Hash typer')
  })
  it('Renders main buttons', () => {
    cy.contains('.c-card__content > :nth-child(1)', 'Play')
    cy.contains('.c-card__content > :nth-child(2)', 'Settings')
    cy.contains('.c-card__content > :nth-child(3)', 'High scores')
  })
})

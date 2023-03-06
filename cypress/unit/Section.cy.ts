import Section from '../../src/components/Section/Section.vue'

describe('<Section />', () => {
  it('renders', () => {
    cy.mount(Section, {
      props: {
        fullHeight: false
      }
    })
    cy.get('.l-section').should('exist');
  })
  it('renders in full heigh', () => {
    cy.mount(Section, {
      props: {
        fullHeight: true
      }
    })
    cy.get('.l-section--fullHeight').should('exist');
  })
})
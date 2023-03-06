import Input from '../../src/components/Input/Input.vue'

describe('<Input />', () => {
  it('renders', () => {
    const input = cy.spy().as('input')
    cy.mount(Input, {
      props: {
        type: 'text'
      },
    })
    cy.get('input').should('have.class', 'c-input');
  })
  it('Change input type', () => {
    const input = cy.spy().as('input')
    cy.mount(Input, {
      props: {
        type: 'number'
      },
    })
    cy.get('input[type="number"]');
  })
  it('Emitting value', () => {
    const input = cy.spy().as('input')
    cy.mount(Input, {
      emits: {
        input: input
      },
    })
    cy.get('input').type('test');
    cy.get('@input').should('have.been', 'test');
  })
})
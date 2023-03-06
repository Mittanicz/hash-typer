import Button from '../../src/components/Button/Button.vue';
describe('<Button />', () => {
  it('renders', () => {
    cy.mount(Button, {
      slots: {
        default: 'Hello there!'
      }
    })
    cy.get('button').should('have.text', 'Hello there!')
  })
  it('Props', () => {
    cy.mount(Button, {
      slots: {
        default: 'Hello there!'
      },
      props: {
        block: true,
      }
    })
    cy.get('.c-button').should('have.class', 'c-button--block')
  })
  it('Emits click', () => {
    const click = cy.spy().as('click')
    cy.mount(Button, {
      emits: {
        click: click
      },
      props: {
        click
      },
      slots: {
        default: 'Hello there!'
      }
    })
    cy.get('button').click();
    cy.get('@click').should('have.been.called', 1);
  })
})
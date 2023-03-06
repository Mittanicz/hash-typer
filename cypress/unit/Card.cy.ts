import Card from '../../src/components/Card/Card.vue'

describe('<Card />', () => {
  it('renders', () => {
    cy.mount(Card, {
      props: {
        title: 'CardHeader!'
      }
    })
    cy.get('.c-card__title').should('have.text', 'CardHeader!');
  })
  it('check brackets', () => {
    cy.mount(Card, {
      props: {
        title: 'CardHeader!',
        bracket: false,
      }
    })
    cy.get('.c-card + .c-card__bracket').should('not.exist');
  })
  it('card content', () => {
    const slots = {
      content: '<p>Card content</p>',
      footer: 'my footer',
    }
    cy.mount(Card, {
      props: {
        title: 'CardHeader!',
      },
      slots
    })
    cy.get('.c-card__content p').should('have.text', 'Card content');
  })
  it('card content', () => {
    const slots = {
      content: '<p>Card content</p>',
      footer: '<button>Continue</button>',
    }
    cy.mount(Card, {
      props: {
        title: 'CardHeader!',
      },
      slots
    })
    cy.get('.c-card__footer button').should('have.text', 'Continue');
  })
})
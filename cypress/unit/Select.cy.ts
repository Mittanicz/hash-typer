import Select from '../../src/components/Select/Select.vue'

describe('<Select />', () => {
    it('renders', () => {
        cy.mount(Select, {
            props: {
                label: 'Select label',
                options: [
                    {
                        label: 'Label 1',
                        value: 'Value 1'
                    },
                    {
                        label: 'Label 2',
                        value: 'Value 2'
                    },
                ]
            }
        })
        cy.get('.c-label').should('have.text', 'Select label')
    })
    it('Select and emit value', () => {
        const input = cy.spy().as('input')
        cy.mount(Select, {
            emits: {
                input: input
            },
            props: {
                label: 'Select label',
                options: [
                    {
                        label: 'Label 1',
                        value: 'Value 1'
                    },
                    {
                        label: 'Label 2',
                        value: 'Value 2'
                    },
                ]
            }
        })
        cy.get('select').select('Label 2')
        cy.get('@input').should('have.been', 'Value 2');
        cy.get('select').select('Value 1')
        cy.get('@input').should('have.been', 'Value 1');
    })
})
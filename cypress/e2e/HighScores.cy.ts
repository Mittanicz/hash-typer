describe('High scores', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    it('Play game twice to check score', () => {
        for (let i = 1; i <= 2; i += 1) {
            cy.get('.c-card__content > :nth-child(1)').click();
            cy.get('.c-button').click();
            cy.get('.c-input').type('start');
            for (let i = 1; i <= 5; i += 1) {
                cy.get('.u-text-center').invoke('text').as('word').then((word) => {
                    cy.get('.c-input').type(word);
                });
            }
            cy.wait(25000);
            cy.get('.c-button').click();
            cy.get('.c-button').click();
            cy.contains('.c-pageTitle__title', 'Hash typer');
        }
        cy.get('.c-card__content > :nth-child(3)').click();
        cy.contains('.c-pageTitle__title', 'High scores');
        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('contain.text', '25');
        cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain.text', '6');
        cy.get('tbody > :nth-child(1) > :nth-child(4)').should('contain.text', '1000');
    });
})

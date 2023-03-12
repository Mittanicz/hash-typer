describe('Game', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.c-card__content > :nth-child(1)').click();
    })
    it('Check and play the game', () => {
        cy.contains('.c-card__title', 'Briefing');
        cy.get('.c-button').click();
        cy.get('.l-gameHeader__content > :nth-child(1)').should('contain.text', 'Score: 0');
        cy.get('.l-gameHeader__content > :nth-child(2)').should('contain.text', '10:0s');
        cy.get('.u-text-center').should('contain.text', 'start');
        cy.get('.c-input').should('be.visible');
        cy.get('.c-input').type('start');
        cy.wait(13000);
        cy.get('.c-card__title').should('be.visible');
        cy.get('.c-button').click();
        cy.get('.c-card__title').should('be.visible');
        cy.get('.c-card__title').should('be.visible');
        cy.get('.ul-featuresList > :nth-child(2)').should('contain.text', 'Word count: 1');
        cy.get('.c-button').click();
        cy.contains('.c-pageTitle__title', 'Hash typer')
    });
    it('Play the game with more words', () => {
        cy.get('.c-button').click();
        cy.get('.c-input').type('start');
        for (let i = 1; i <= 5; i += 1) {
            cy.get('.u-text-center').invoke('text').as('word').then((word) =>{
                cy.get('.c-input').type(word);
            });
        }
        cy.wait(20000);
        cy.get('.c-card__title').should('be.visible');
        cy.get('.c-button').click();
        cy.get('.c-card__title').should('be.visible');
        cy.get('.c-card__title').should('be.visible');
        cy.get('.ul-featuresList > :nth-child(2)').should('contain.text', 'Word count: 6');
        cy.get('.c-button').click();
        cy.contains('.c-pageTitle__title', 'Hash typer');
    });
})

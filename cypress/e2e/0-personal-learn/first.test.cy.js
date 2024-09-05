/// <reference types="cypress" />

    describe('My First Test', () => {
         it('Clicking "type" shows the right heading ', () => {
            cy.visit('https://example.cypress.io')

            cy.pause()
            
            cy.contains('type').click()
            
            // Should be on a new URL which includes '/commands/actions'
            cy.url().should('include', '/commands/actions')
            
            // Get an input, type into it and verify that value has been updated
            cy.get('.action-email')
            .type('nahuel10@fakemail.com')
            .should('have.value', 'nahuel10@fakemail.com')

    })
    // describe('First test', () => {
        
    //     it('Visit the Kitchen Sink', () => {
    //         cy.visit('https://example.cypress.io')
    //         cy.get('h1').contains('Kitchen Sink')
    //         cy.contains('get').click()
    //         cy.url().should('include', '/commands/querying')
    //     })
    // });
})
describe('asset', () => {
    it('there are assets', () => {
        //visit website
        cy.visit('http://localhost:3000/');

        //check that there are assets
        cy.get('.assetrow').should('have.length.gt', 1);

        //Test that the search box works
        cy.findByRole('textbox', { name: /large/i }).type('Mr Smith').then(() => {
            cy.get('.assetrow').should('have.length', 0);
        });

        //Test that the pagination works on the third page.
        cy.findByRole('textbox', { name: /large/i }).clear().then(() => {
            cy.findByRole('button', { name: /page 3/i }).click().then(() => {
                cy.get('.assetrow').should('have.length.gt', 1);
            })
        });

        //Go to an asset
        cy.get('[data-test="assets/e7933ce2-640e-43c7-bef0-3311051a0885"]').click();

        //cy.findByRole('heading', { name: /access_card_3/i }).type('access_card_3');
        //container.querySelector('#root > div > div > div > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
        //check if there are assets
        //Go to an asset
        //Come back to the list page
    })
})
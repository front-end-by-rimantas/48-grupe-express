describe('Home page', () => {
    it('Exists all necessary elements', () => {
        cy.visit('http://localhost:4811/');

        cy.get('h1')
            .should('be.exist')
            .should('be.visible')
            .should('have.text', 'Responsive left-aligned hero with image');

        cy.get('footer')
            .should('be.exist')
            .should('be.visible');

        cy.get('footer > p')
            .should('be.exist')
            .should('be.visible')
            .should('have.text', '© 2024 Company, Inc');

        cy.get('footer > p')
            .contains('Company');

        cy.get('footer > p')
            .contains(new Date().getFullYear());
    });
});
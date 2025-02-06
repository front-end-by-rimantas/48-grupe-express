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

        // cy.get('footer > p')
        //     .contains(new Date().getFullYear());
    });


    it('Hero image', () => {
        cy.visit('http://localhost:4811/');

        cy.get('main section img')
            .should('be.exist')
            .should('be.visible')
            .and('have.prop', 'naturalWidth')
            .should('be.greaterThan', 0);
    });

    it('Header links', () => {
        cy.visit('http://localhost:4811/');

        cy.get('header > ul > li')
            .contains('Home')
            .should('have.attr', 'href', '/');

        cy.get('header > ul > li')
            .contains('About')
            .should('have.attr', 'href', '/about');

        cy.get('header > ul > li')
            .contains('Services')
            .should('have.attr', 'href', '/services');

        cy.get('header > ul > li')
            .contains('Calc')
            .should('have.attr', 'href', '/calc');
    });

    it('Footer links', () => {
        cy.visit('http://localhost:4811/');

        cy.get('footer > p')
            .should('be.exist')
            .should('be.visible')
            .should('have.text', '© 2024 Company, Inc');

        cy.get('footer > ul > li')
            .contains('Home')
            .should('have.attr', 'href', '/');

        cy.get('footer > ul > li')
            .contains('Features')
            .should('have.attr', 'href', '/features');

        cy.get('footer > ul > li')
            .contains('Pricing')
            .should('have.attr', 'href', '/pricing');

        cy.get('footer > ul > li')
            .contains('FAQs')
            .should('have.attr', 'href', '/faq');

        cy.get('footer > ul > li')
            .contains('About')
            .should('have.attr', 'href', '/about');
    });
});
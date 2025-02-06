describe('Calc page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4811/calc');
    });

    it('Calculator has all elements', () => {
        cy.get('#first_number')
            .should('be.exist')
            .should('be.visible');

        cy.get('span')
            .should('be.exist')
            .should('be.visible')
            .contains('+');

        cy.get('#second_number')
            .should('be.exist')
            .should('be.visible');

        cy.get('span')
            .should('be.exist')
            .should('be.visible')
            .contains('=');

        cy.get('button[type="submit"]')
            .should('be.exist')
            .should('be.visible')
            .contains('Calc');

        cy.get('#result')
            .should('be.exist');
    });

    it('Calculator: only first number', () => {
        cy.get('#first_number')
            .clear()
            .type('5')
            .should('have.value', '5');

        cy.get('button[type="submit"]')
            .click();

        cy.get('#result')
            .should('be.exist')
            .should('be.visible')
            .contains('5');
    });

    it('Calculator: only second number', () => {
        cy.get('#second_number')
            .clear()
            .type('7')
            .should('have.value', '7');

        cy.get('button[type="submit"]')
            .click();

        cy.get('#result')
            .should('be.exist')
            .should('be.visible')
            .contains('7');
    });

    it('Calculator: both numbers', () => {
        cy.get('#first_number')
            .clear()
            .type('5')
            .should('have.value', '5');

        cy.get('#second_number')
            .clear()
            .type('7')
            .should('have.value', '7');

        cy.get('button[type="submit"]')
            .click();

        cy.get('#result')
            .should('be.exist')
            .should('be.visible')
            .contains('12');
    });

    it('Calculator: first value is not a number', () => {
        cy.get('#first_number')
            .clear()
            .type('asd')
            .should('have.value', 'asd');

        cy.get('button[type="submit"]')
            .click();

        cy.get('#result')
            .should('be.exist')
            .should('be.visible')
            .contains('Viena is reiksmiu nera normalus skaicius');
    });

    it('Calculator: second value is not a number', () => {
        cy.get('#second_number')
            .clear()
            .type('asd')
            .should('have.value', 'asd');

        cy.get('button[type="submit"]')
            .click();

        cy.get('#result')
            .should('be.exist')
            .should('be.visible')
            .contains('Viena is reiksmiu nera normalus skaicius');
    });

    it('Calculator: both values are not a numbers', () => {
        cy.get('#first_number')
            .clear()
            .type('asd')
            .should('have.value', 'asd');

        cy.get('#second_number')
            .clear()
            .type('qwe')
            .should('have.value', 'qwe');

        cy.get('button[type="submit"]')
            .click();

        cy.get('#result')
            .should('be.exist')
            .should('be.visible')
            .contains('Viena is reiksmiu nera normalus skaicius');
    });

    it('Header links', () => {
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
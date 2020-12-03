/// <reference types="cypress"/>

describe("This is login test", ()=>{
    beforeEach(() =>{
        cy.visit("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login")
    });
    //checking the successfully login  flow
    it('Login Success flow', ()=>{
        cy.get('#txtUsername').type("opensourcecms").should('have.value','opensourcecms')
        cy.get('#txtPassword').type("opensourcecms").should('have.value','opensourcecms')
        cy.get('#btnLogin').click();

        //checking the successfully redirected on the url after logged in
        cy.url().should('include', 'orangehrm/index.php')

        //checking the user successfully logged in or not
        cy.get('#option-menu > li:nth-child(1)').then(($text1) =>{
            const welcometext = $text1.text(); 
            expect(welcometext).to.match(/Welcome .+/)
        });
    });
    //checking the failure login flow
    it("Login Failure Flow", ()=>{
        cy.get('#txtUsername').type("opensourcecms").should('have.value','opensourcecms')

        //enter the wrong password
        cy.get('#txtPassword').type("opensourcecms6").should('have.value','opensourcecms6')
        cy.get('#btnLogin').click();

        //checking in case of login failure user redirected on the validatecredentials page of not
        cy.url().should('include', '/auth/validateCredentials')

        //error message should be visible in case of invalid credentials
        cy.get('#spanMessage').should('be.visible');
    });
});
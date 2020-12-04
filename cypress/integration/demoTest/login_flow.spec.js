/// <reference types="cypress"/>

describe("This is login test", ()=>{
    beforeEach(() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        // cy.visit("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login")
    });
    //checking the successfully login  flow
    it('Login Success flow', ()=>{
        cy.get('#txtUsername').type("Admin").should('have.value','Admin')
        cy.get('#txtPassword').type("admin123").should('have.value','admin123')
        cy.get('#btnLogin').click();

        //checking the successfully redirected on the url after logged in
        cy.url().should('include', 'dashboard')

        //checking the user successfully logged in or not
        cy.get('#welcome').then(($text1) =>{
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

     //checking the successfully login  flow
     it('Click on dynamic elements and logout user', ()=>{
        cy.get('#txtUsername').type("Admin").should('have.value','Admin')
        cy.get('#txtPassword').type("admin123").should('have.value','admin123')
        cy.get('#btnLogin').click();

        //checking the successfully redirected on the url after logged in
        cy.url().should('include', 'dashboard')

        //checking the user successfully logged in or not
        cy.get('#welcome').then(($text1) =>{
            const welcometext = $text1.text(); 
            expect(welcometext).to.match(/Welcome .+/)
            cy.contains(/Welcome .*/).click();
            cy.wait(1000);
            cy.get('#welcome-menu > ul > li:nth-child(2) > a').click();
        });
    });
});
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("selectProduct", (productName) => {

    cy.get('h4.card-title').each(($el,index,list)=>{
        
        if($el.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click()
        }
        
    })

})

// Login command
Cypress.Commands.add('login', (email,password)=> {
    cy.visit('https://admin-demo.nopcommerce.com/login')
    cy.get('#Email').clear()
    cy.get('#Email').type(email)
    cy.get('#Password').clear()
    cy.get('#Password').type(password)
    cy.get('.button-1').click()
})
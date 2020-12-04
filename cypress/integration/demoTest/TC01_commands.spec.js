/// <reference types="Cypress"/>
describe("Sample commands tesing", ()=> {
    //Adding new customer
    it('Add customer ', ()=> {
        cy.login('admin@yourstore.com','admin')
        cy.get(':nth-child(4) > [href="#"] > .fa-angle-left').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > .menu-item-link > .menu-item-title').click()
        cy.get('.bg-blue').click()
        cy.get('#Email').type('test@gmail.com')
        cy.get('#Password').type('test@123')
        cy.get('#FirstName').type('firstname')
        cy.get('#LastName').type('lastname')
        cy.get('input[name=Gender]').check('M')
        cy.get('#Company').type('Incedo Inc.')
        cy.get('#IsTaxExempt').check()
        cy.get(':nth-child(9) > .col-md-9 > .input-group > .k-widget > .k-multiselect-wrap').click()
        cy.get('.k-item').contains('Test store 2').click()
        cy.get(':nth-child(10) > .col-md-9 > .input-group > .k-widget > .k-multiselect-wrap').click()
        cy.get('#AdminComment').type('This is an admin comment')
        cy.get('[name="save"]').click()
        cy.log('Customer added')
    })

    // Deleting customer
    it('Delete customer ', ()=> {
        cy.login('admin@yourstore.com','admin')
        cy.get(':nth-child(4) > [href="#"] > .fa-angle-left').click()
        cy.get('.menu-open > .treeview-menu > :nth-child(1) > .menu-item-link > .menu-item-title').click()
        cy.get(':nth-child(1) > .button-column > .btn').click()
        cy.get('#customer-delete').click()
        cy.get('.modal-footer > .bg-red').click()
        cy.log('Customer deleted')
    })
})
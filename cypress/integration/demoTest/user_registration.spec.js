
///<reference types="cypress"/>
describe('UI dropdowns', () => {
    it('verify first name and last name', () => {
        cy.visit('http://demo.automationtesting.in/Register.html') //visit url
        cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(2) > input').should('be.enabled').type('prathima')
        cy.get('#basicBootstrapForm > div:nth-child(1) > div:nth-child(3) > input').should('be.visible').should('be.enabled').type('sr')
        cy.get('#basicBootstrapForm > div:nth-child(2) > div > textarea').should('be.enabled').type(' 101 hara vijaya J p nagar 1st phase,1st cross,V R layout,sarakki main road')
        cy.get('#eid > input').should('be.enabled').type('prathimasrs@incedoinco.com')
        cy.get('#basicBootstrapForm > div:nth-child(4) > div > input').should('be.enabled').type('7766777770')
        cy.get('#submitbtn').click()
       
    })
    
    it('verify radio button ', () => {   
       cy.get('#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(2) > input').click()
       cy.get('#basicBootstrapForm > div:nth-child(5) > div > label:nth-child(2) > input').should('be.visible').should('be.checked')
    })

    it('verify drop box and checkboxes', () => {
        cy.get('#checkbox1').check().should('be.checked').and('have.value', 'Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value', 'Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value', 'Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket', 'Hockey'])
    })

    it('languages multiselect drop down ', () => {
        cy.get('#msdd').click()//multi select dropdown
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click({force:true})
        cy.wait(2000)
    })
 
    it('drop down with search languages', () => {
        cy.get('[role=combobox]').click({ force: true }) //previous lang drop down is covering this drop down and so its hiding this drop down so u need to forcefully click
        cy.get('#countries').type('Ind') //locate input box
    })
    it('skills drop down', () => {
        cy.get('#Skills').select('Android').should('have.value', 'Android') //normal checckboxes
    })
    it('verify country ', () => {   
        cy.get('#countries').select('India').should('have.value', 'India')
        cy.get('#basicBootstrapForm > div:nth-child(10) > div > span > span.selection > span').click()
        
        cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').click()
        cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').type('India')
         cy.get('body > span > span > span.select2-search.select2-search--dropdown > input').type('{enter}') //click enter from keyborad

        cy.get('#yearbox').select('1996').should('have.value', '1996')
        cy.get('#basicBootstrapForm > div:nth-child(11) > div:nth-child(3) > select').select('May').should('have.value', 'May')
        cy.get('#daybox').select('29').should('have.value', '29')
        cy.get('#firstpassword').should('be.enabled').type('Yes@123')
        cy.get('#secondpassword').should('be.enabled').type('Yes@123')
     })

    it(' submit btn click url check', () => {
        //  cy.get('#submitbtn').click()
        // cy.url().should('include', '/WebTable.html') // => true
        // cy.log(cy.url())
        // cy.url().should('eq', 'http://demo.automationtesting.in/WebTable.html') // => true
    })

    // it('submit form', () => {
    //      cy.get('#submitbtn').click({ force: true }) //click on submit button
    //     //  cy.log('executed')
    //   cy.visit('http://demo.automationtesting.in/WebTable.html') //visit url

    // })
})
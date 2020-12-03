/// <reference types="cypress" />
import HomePage from "../../support/pageObjects/HomePage"
import ProductPage from "../../support/pageObjects/productPage"
describe('Page Object test suite', () => {
    //cypress hooks
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
 
    it('custom command test', function(){
        const homePage =  new HomePage()
        const productPage = new ProductPage()

        cy.visit('https://rahulshettyacademy.com/angularpractice')
        
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getShopTab().click()
        this.data.productName.forEach(function(element){
            cy.selectProduct(element) 
        }) 
      //  cy.pause()
        productPage.checkOutButton().click() 
        

            
    })

})   


// Fixture 
// page object 
// custom command

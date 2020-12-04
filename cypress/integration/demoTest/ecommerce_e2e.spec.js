/// <reference types="cypress" />
import HomePage from "../../support/pageObjects/HomePage"
import ProductPage from "../../support/pageObjects/productPage"
import CheckoutPage from "../../support/pageObjects/CheckoutPage"
import DeliveryPage from "../../support/pageObjects/DeliveryPage"

describe('Page Object test suite', () => {
    //cypress Hooks
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
 
    it('custom command test', function(){

        const homePage =  new HomePage()
        const productPage = new ProductPage()
        const checkoutPage =  new CheckoutPage()
        const deliverPage = new DeliveryPage()

        cy.visit(Cypress.env('url'))

        //Homepage
        homePage.getName().type(this.data.name)
        homePage.getEmail().type(this.data.email)
        homePage.getPassword().type(this.data.password)
        homePage.getCheck().click({force:true})
        homePage.getGender().select(this.data.gender)
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getDOB().type(this.data.dob)
        homePage.getSubmit().click()
        homePage.getAlertText().then(function(el){
            const actualText = el.text();
            expect(actualText.includes('Success')).to.be.true
        })

        cy.wait(2000)
        homePage.getShopTab().click()
        cy.wait(1000)

        this.data.productName.forEach(function(element){
            cy.selectProduct(element) 
        }) 

        // Product page
        productPage.checkOutButton().click() 
        cy.wait(2000)
        
        // Checkout page
        var sum = 0;
        checkoutPage.getPriceData().each(($el,index,list )=>{
            const actualPrice  = $el.text();
            var res = actualPrice.split(" ")
                res = parseInt(res[1])
                sum = sum + res;
               
        }).then(function(){
            cy.log(sum)
        })
        checkoutPage.getTotal().then(function(element){
            const amount =  element.text();
            var res = amount.split(" ")
            var total = parseInt(res[1])
            expect(total).to.equal(sum)
        })
        cy.wait(2000)
        checkoutPage.getCheckoutButton().click()
        cy.wait(1000)

        // DeliverPage
        deliverPage.getCountry().type('india')
        deliverPage.getCountrySuggestions().click() 
        deliverPage.getCheckBox().click({force:true})
        deliverPage.getPurchaseButton().click()
        deliverPage.getAlertMsg().then(function(el){
            const actualText = el.text();
            expect(actualText.includes('Success')).to.be.true
        })            
    })
})   

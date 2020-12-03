
class DeliveryPage {

    getCountry(){
        return cy.get('#country')
    }

    getCountrySuggestions(){
        return cy.get('.suggestions > ul > li > a')
    }

    getCheckBox(){
        return cy.get("#checkbox2")
    }

    getPurchaseButton(){
        return cy.get('body > app-root > app-shop > div > app-checkout > div > form > input')
    }

    getAlertMsg(){
        return cy.get('.alert')
    }
    
}

export default DeliveryPage
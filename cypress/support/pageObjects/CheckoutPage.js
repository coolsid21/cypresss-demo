
class CheckoutPage {

    getPriceData(){
        return cy.get('tr td:nth-child(3) strong')
    }

    getTotal(){
        return cy.get('h3 > strong')
    }

    getCheckoutButton(){
        return cy.get('button.btn.btn-success')
    }

}

export default CheckoutPage
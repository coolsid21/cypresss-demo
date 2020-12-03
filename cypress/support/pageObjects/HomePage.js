
class HomePage {

    getName(){
        return cy.get(':nth-child(1) > .form-control')
    }

    getEmail(){
        return cy.get('input[name="email"]')
    }

    getPassword(){
        return cy.get('input[type="password"]')
    }

    getCheck(){
        return cy.get("#exampleCheck1")
    }


    // getTwoWayDataBinding(){
    //     return cy.get(':nth-child(4) > .ng-untouched')
    // }
    
    getGender(){
        return cy.get('select')
    }

    

    getEntrepreneur() {
       return cy.get('#inlineRadio3')
    }

    getDOB(){
        return cy.get('input[name="bday"]')
    }

    getSubmit(){
        return cy.get('input[type="submit"]')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }

    getAlertText() {
        return cy.get('.alert')
    }

}

export default HomePage
/// <reference types="cypress" />

describe('Framework test suite', () => {
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })
 
    it('custom command test', function(){
        cy.visit(Cypress.env('url'))
        cy.get(':nth-child(2) > .nav-link').click()
        this.data.productName.forEach(function(element){
            cy.selectProduct(element) 
        }) 
        cy.get('#navbarResponsive > ul > li > a').click()

        var sum = 0;
        cy.get('tr td:nth-child(3) strong').each(($el,index,list )=>{

            const actualPrice  = $el.text();
            var res = actualPrice.split(" ")
                res = parseInt(res[1])
                sum = sum + res;
               
        }).then(function(){
            cy.log(sum)
        })
        cy.get('h3 > strong').then(function(element){
            const amount =  element.text();
            var res = amount.split(" ")
            var total = parseInt(res[1])
            expect(total).to.equal(sum)
        })

        
        cy.get('button.btn.btn-success').click()
        cy.get('#country').type('india')
        cy.get('.suggestions > ul > li > a').click() 
        cy.get("#checkbox2").click({force:true})
        cy.get('body > app-root > app-shop > div > app-checkout > div > form > input').click()
        cy.get('.alert').then(function(el){
            const actualText = el.text();
            expect(actualText.includes('Success')).to.be.true
        })


        
    })

})   
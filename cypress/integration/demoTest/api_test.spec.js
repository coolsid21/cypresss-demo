/// <reference types="cypress"/>

context('CRUD API test', () =>{
    //Testing the get api checking the url
    it('Get API Test', ()=>{
        cy.request('GET', 'https://httpbin.org/get').then((response) =>{
            //checking the 200 status
            expect(response).to.have.property('status',200)

            //checking duration key in response
            expect(response).to.have.property('duration')
            cy.log(response.duration);

            //checking the url key is getting in the response body
            expect(response.body).to.have.property('url','https://httpbin.org/get')
        })
    })

    //Testing the post api by creating new user
    it('Post API test', ()=>{
        cy.request({
            method: "POST",
            url: 'https://httpbin.org/post',
            headers: {
                'content-type': 'application/json',
            },
            body: {
                "name":"Pramod",
                "age": 28,
                "designation": "Senior Software Engineer"                
            }
        }).then((response) =>{
            // checking the server name from headers
            expect(response.headers).to.have.property('server');
            expect(response.headers).to.have.property('server',"gunicorn/19.9.0");

            // checking the json key getting in case fo success 
            expect(response.body).to.have.property('json');
            
            // checking the successfully getting the name of user after get created the user.
            expect(response.body.json).to.deep.equal({'name':'Pramod', "age":28, "designation":'Senior Software Engineer'})
        });
    });

    //Testing the put api 
    it('Put API Test', ()=>{
        cy.request('PUT','https://httpbin.org/put', {'name':'Pramod Sharma'}).then((response) =>{
            // checking the json key getting in case fo success
            expect(response.body).to.have.property('json');

            // checking name is updated successfully or not
            expect(response.body.json).to.deep.equal({'name':'Pramod Sharma'});
        });
    });
    //Testing the patch api is working properly or not.
    it('Patch API Test',()=>{
        cy.request('PATCH', 'https://httpbin.org/patch', {'name':'Pramod Kumar'}).then((response) =>{
            // checking the json key getting in case fo success
            expect(response.body).to.have.property('json');

            // checking name is updated successfully or not
            expect(response.body.json).to.deep.equal({'name':'Pramod Kumar'})
        });
    });
    //Testing the delete api
    it('Delete API Test',()=>{
        cy.request('DELETE', 'https://httpbin.org/delete').then((response) =>{
            //checking the url key is getting in the response body
            expect(response.body).to.have.property('url','https://httpbin.org/delete')
        });
    });

    //Getting the data url of image 
    it('Data url of an image', ()=>{
        cy.request({
            url: 'https://docs.cypress.io/img/logo.png',
            encoding: 'base64',
          })
          .then((response) => {

            //testing getting success or not
            expect(response).to.have.property('status',200)

            const Imagebase64Content = response.body

            // getting content-type from header
            const mimetype = response.headers['content-type'] 

            //creating data url of image
            const imageDataUrl = `data:${mimetype};base64,${Imagebase64Content}`
          })
    })
});


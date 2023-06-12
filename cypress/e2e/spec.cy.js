describe('Dashboard / Homepage Spec: ', () => {

  beforeEach(()=> {
    cy.loadMainPage()
    cy.visit('http://localhost:3000/')
  })

  it('When a user visits the homepage, they are presented with a title to describe what the app can do:', () => {
    cy.get('.app-title').should('be.visible').should('exist').contains('URL Shortener')
  })

  it('When a user interacts with the form fields, they are controlled / update state upon each changing value:', ()=> {
    cy.get('.form-title').should('exist')
    .type('test1')
    .should('have.value', 'test1')

    cy.get('.form-url').should('exist')
    .type('https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
    .should('have.value', 'https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80')
  })

  it('HomePage submit flow - POST test - FIXTURE CONFIRMATION:', ()=> {
    // This test  purposefully does not mirror the expected results for the user, it displays fully functional intercepting of the user flow. The next describe block is a test to check for the changed values upon submit.
    cy.get('.form-title').should('exist')
    .type('this is a test')
    .should('have.value', 'this is a test')

    cy.get('.form-url').should('exist')
    .type('this is also a test')
    .should('have.value', 'this is also a test')

    // This intercept breaks the expected outcome for the user - addCard is not checked until next test because we cannot intercept the initial fetch again within one test:
    cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
      fixture: 'addedCard.json'})
    cy.get('.submit-button').click()
    cy.get('.url-card').should('have.length', 1)
  })
})

describe('HomePage submit flow - POST - Verify render after submit', ()=> {

  // The loadPostTest command replaces our initial intercept with a fixture that represents the result of the final user flow above(addedCard.json), but if we did not block the POST. 

  beforeEach(()=>{
    cy.loadPostTest()
    cy.visit('http://localhost:3000/')
  })

  it('After a user submits a new url, it is immediately rendered to the DOM:', ()=> {
    cy.get('.url-card').should('have.length', 2)
    .last()
    .contains('this is a test')

    cy.get('.url-card')
    .last()
    .contains('http://localhost:3001/useshorturl/2')

    cy.get('.url-card')
    .last()
    .contains('this is also a test')
  })
})
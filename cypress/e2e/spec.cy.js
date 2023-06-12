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

})

describe('HomePage submit flow - POST test:', ()=> {

  beforeEach(()=>{
    cy.loadMainPage()
    cy.visit('http://localhost:3000/')
  })

  it.only('When a user submits a new url, it should appear immediately to the user to indicate that it has been added to the saved urls on the server:', ()=> {
    cy.get('.form-title').should('exist')
    .type('this is a test')
    .should('have.value', 'this is a test')

    cy.get('.form-url').should('exist')
    .type('this is a test')
    .should('have.value', 'this is a test')

    cy.loadPostTest()
    cy.get('.submit-button').click()

    cy.get('.url-card').last()
  })
})
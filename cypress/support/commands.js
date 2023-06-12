Cypress.Commands.add('loadMainPage', ()=> {
  cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
    fixture: 'startCard.json'} )
  cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
    fixture: 'postedCard.json'
  })
} )
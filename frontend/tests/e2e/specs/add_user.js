describe('Add user', () => {
  it('add user form', () => {
    cy.visit('/');
    cy.get('.add').click();
    cy.get('input[name="formFirstName"]').type('test e2e')
    cy.get('input[name="formFirstLastName"]').type('test e2e')
    cy.get('input[name="formFirstEmail"]').type('test@test.com')
    cy.get('input[name="formFirstBirthDate"]').type('2020-05-05')
    cy.get('input[name="formFirstStreet"]').type('test')
    cy.get('input[name="formFirstCity"]').type('test')
    cy.get('select[name="formFirstCountry"]').select('UK')
    cy.get('input[name="formFirstCodePostal"]').type('121')
    cy.get('.btn').click();
  })
})

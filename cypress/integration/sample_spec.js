describe('My first test', () => {
  it('Doest not much!', () => {
    expect(true).to.equal(true)
    cy.visit('http://localhost:3000/')
    cy.get('.t_link-to-post')
      .click()
    cy.get('#t_views')
    cy.get('#t_date')
  })
})

describe('My first test', () => {
  it('Doest not much!', () => {
    expect(true).to.equal(true)
    cy.visit('https://vicdiaz.io/')
  })
})

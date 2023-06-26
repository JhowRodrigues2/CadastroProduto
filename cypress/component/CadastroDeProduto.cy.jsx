import Login from "../../src/components/Login/Login"
describe('Logar', () => {
  it('preencher campos e logar', () => {
    cy.viewport(1280, 720); // Defina a largura e a altura desejadas da tela
    cy.mount(<Login/>)
    cy.get('#user').type('jhow')
    cy.get("#pass").type('teste123')
    cy.get('#login').click()
  })
})
import Login from "../../src/components/Login/Login"
import { MemoryRouter } from 'react-router-dom';

describe('Logar', () => {
  it('preencher campos e logar', () => {
    cy.viewport(1280, 720); // Defina a largura e a altura desejadas da tela
    cy.mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    cy.get('#user').type('admin@admin');
    cy.get("#pass").type('admin1223');
    cy.get('#login').click();
    cy.contains('Usuário ou senha incorretos!').should('not.exist'); // Verifica se o erro não está presente na tela
    
  });
  it.only('Validação campo vazio', () => {
    cy.viewport(1280, 720); // Defina a largura e a altura desejadas da tela
    cy.mount(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
    cy.get('#user').type('admin@admin');
    cy.get('#login').click();
    cy.contains('Campo obrigatório.').should('exist'); 
  })
});
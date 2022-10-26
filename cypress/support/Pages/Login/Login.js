//ações de interação com a página

const elementos = require(  './elements').ELEMENTS;

export class Login {

    acessarPagina(){
        cy.visit('https://testessigsaude.imd.ufrn.br/sigsaude/login');
    }

    preencherLogin(){
        cy.get(elementos.usuario).type('drservicosocialass');
        cy.get(elementos.senha).type('72556843004');
        cy.get(elementos.botaoEntrar).click();
    }


}

export default new Login();

 
const elementos = require(  './elements').ELEMENTS;

export class Logout {

    acessarLogout(){
        cy.get(elementos.perfil).click();
        cy.get(elementos.botaoSair).click();
    }

}

export default new Logout();

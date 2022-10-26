//ações de interação com a página

const elementos = require(  '../Login/elements').ELEMENTS;

export class Nova_oferta {

    novaOferta(){

        cy.get(elementos.botaoMenu).contains("Oferta de Atendimento").click();
        cy.get(elementos.subItem).contains("Nova Oferta de Atendimento").click();

    }


}

export default new Nova_oferta();
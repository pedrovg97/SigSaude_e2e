//ações de interação com a página

const elementos = require(  '../Login/elements').ELEMENTS;

export class Form_cadastro {

    preencherForm(){

        cy.get(elementos.denominacao).type(elementos.deniminacaoTexto);
        cy.get(elementos.dataInicio).type("2022-10-21");
        cy.get(elementos.dataFim).type("2022-10-22");
        cy.get(elementos.horarioInicio).type("10:00");
        cy.get(elementos.horarioFim).type("20:00");
        cy.get(elementos.botaoAvancar).click();

    }

    selecionarModalidade(){

        cy.get(elementos.selectModalidade).type(elementos.modalidadeDrservicosocialass);
        cy.get(elementos.selecionarModalidade).click();
        cy.get(elementos.botaoAddModalidade).click();

    }
    adicionarEscala(){

        cy.get(elementos.botaoAddEscala).click();
        cy.get(elementos.descricaoEscala).type("Descrição teste");
        cy.get(elementos.selecionarHorarioEscala).click({ multiple: true, force: true });
        cy.get(elementos.botaoConcluirEscala).click();
        cy.get(elementos.botaoAvancar).click();
        cy.get(elementos.botaoOk).click();

    }

    registrarEscala(){

        cy.get(elementos.pesquisarDenominacao).type(elementos.deniminacaoTexto);
        cy.get(elementos.botaoPesquisarOferta).click();
        cy.get(elementos.registrarEscala).click();
        cy.get(elementos.selectEscala).select(1);
        cy.get(elementos.selectTipoAtendimento).select(1);
        cy.contains('-- Selecione --').click();
        cy.get(elementos.selectProfissional).click();
        cy.get(elementos.botaoConsulta).click();
        cy.get(elementos.localAtendimento).type("Local teste");
        cy.get('.fc-bgevent-container').click({ multiple: true, force: true });

    }

    pesquisarAtendimentoNaAgenda(){

        cy.visit('https://testessigsaude.imd.ufrn.br/sigsaude/agendamento');
        cy.get('.fas.fa-sliders-h.fa-stack-1x').click();
        cy.wait(500);
        cy.get('[data-id=modalidades]').click();
        cy.wait(500);
        cy.get('button.actions-btn.bs-deselect-all.btn.btn-light').click({ multiple: true, force: true });
        cy.wait(500);
        cy.get('[aria-controls=bs-select-5]').type("SERVIÇO SOCIAL{enter}");
        cy.wait(1000);
        cy.get('[data-id=ofertaAtendimento]').click({force: true });
        cy.wait(500);
        cy.get('[aria-controls=bs-select-6]').type("DENOMINAÇÃO_TESTE_CYPRESS{enter}");
        cy.wait(500);
        cy.get('[onclick="getDados()"]').contains("Aplicar").click();
        cy.wait(500);
        cy.get('td.fc-event-container').click();
        cy.wait(500);
        cy.get('[data-id="usuarios"]').type("USUARIO TESTE CYPRESS{enter}")
        cy.wait(500);
        cy.get('button.btn.text-white.ml-4').click();

        cy.get('button.swal-button.swal-button--confirm').click();
       
    }

}

export default new Form_cadastro();
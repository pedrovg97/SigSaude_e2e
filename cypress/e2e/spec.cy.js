/// <reference types="cypress" />

import Login from '../support/Pages/Login/Login';
import Logout from '../support/Pages/Login/Logout';
import form_cadastro from '../support/Pages/Nova_oferta_de_atendimento/form_cadastro';
import nova_oferta from '../support/Pages/Nova_oferta_de_atendimento/nova_oferta';


 /* 
describe('Login e logout', () => {
it('Realizar login', () => {
    Login.acessarPagina();
    Login.preencherLogin();
  });

  it('Realizar Logout', () => {
    Logout.acessarLogout();
  });
})
*/
describe('Criar oferta de atendimento', () => {


  it('Acessar opção de nova oferta', () => {

    Login.acessarPagina();
    Login.preencherLogin();  
    //nova_oferta.novaOferta();
    //form_cadastro.preencherForm();
   // form_cadastro.selecionarModalidade();
   // form_cadastro.adicionarEscala();
    //form_cadastro.registrarEscala();
    form_cadastro.pesquisarAtendimentoNaAgenda();
  });
})



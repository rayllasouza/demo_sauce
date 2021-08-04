/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import { closeSync } from 'fs';
import {Sauce} from '../../pages/sauce.page'



Given(`que esteja na página home`, () => {
   
    Sauce.acessar_sauce_demo()
       
});

 
Given (`que esteja logado com {string} e senha {string}`, (user, password) => {
   
    Sauce.logar_sauce_demo(user, password)

});

Given(`que o carrinho esteja vazio`, () => {
	Sauce.carrinho_vazio()
});

 
When(`adicionar produtos ao carrinho`, () => {
    Sauce.adicionar_produto()
    
});
 
Then(`a quantidade de itens no carrinho deve aumentar`, () => {
    Sauce.qtd_carrinho()
});
 
Then(`os produtos devem ser adicionados ao carrinho`, () => {
    Sauce.acessar_carrinho()
    Sauce.remover_produto()
});
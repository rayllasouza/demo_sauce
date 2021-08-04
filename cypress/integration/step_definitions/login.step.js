/// <reference types="cypress" />
import {Given, When, Then, Before} from 'cypress-cucumber-preprocessor/steps'
import { closeSync } from 'fs';
import { Login } from '../../pages/components/sauce_components/login_elements';
import {Sauce} from '../../pages/sauce_pages/login_page'


Given(`que esteja na página de login`, () => {
   
    Sauce.acessar_sauce_demo()
       
});

When(`logar com um usuário do tipo {string}`, (tipo) => {
	let usuario = Sauce.buscar_tipo_usuario(tipo)
    Sauce.logar_sauce_demo(usuario.usuario, usuario.senha)
    console.log()
});

Then(`deverá {string}`, (resultado) => {
	
	cy.log(resultado)
});



 
import Base from '../_base.page'
import { Login as log } from '../components/sauce_components/login_elements'
import Factory from '../../fixtures/factory';


export class Sauce extends Base {

    static acessar_sauce_demo(){
        cy.visit('/');
    }

    static logar_sauce_demo(usuario, senha){

        cy.get(log.INPUT_USER).type(usuario)
        cy.get(log.INPUT_PASSWORD).type(senha)
        cy.get(log.BTN_LOGIN).click()

        if (usuario == "standard_user" && senha == "secret_sauce"){
            cy.get('#react-burger-menu-btn').should('exist');
        }else{
            cy.get('[data-test=error]').should('be.visible').and('contain', 'Username and password do not match any user in this service');
        }
    }

    static buscar_tipo_usuario(tipo){
        var user = Factory.usuario(tipo)
        console.log(user)
        return user
    }
    
}


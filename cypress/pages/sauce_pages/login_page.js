import Base from '../_base.page'
import { Login as log } from '../components/sauce_components/login_elements'


export class Sauce extends Base {

    static acessar_sauce_demo(){
        cy.visit('/');
    }

    static logar_sauce_demo(user, password){

        cy.get(log.INPUT_USER).type(user)
        cy.get(log.INPUT_PASSWORD).type(password)
        cy.get(log.BTN_LOGIN).click()
    }

    static logar_sauce_demo_alt(tipo){

        cy.fixture('example.json').then(data =>{
            //cy.get(log.INPUT_USER).type(data.user_valido.user)
            //cy.get(log.INPUT_PASSWORD).type(data.user_valido.password)
            //cy.get(log.BTN_LOGIN).click()
            cy.log(data.user_valido.user)
        }) 
       
    }
}


import Base from './_base.page'
import {Login as log} from './components/sauce.elements'
import {Add_Product as add, Cart as cart} from './components/sauce.elements'

export class Sauce extends Base {

    static acessar_sauce_demo(){
        cy.visit('/');
    }

    static logar_sauce_demo(user, password){

        cy.get(log.INPUT_USER).type(user)
        cy.get(log.INPUT_PASSWORD).type(password)
        cy.get(log.BTN_LOGIN).click()
    }
     
    static carrinho_vazio(){
        cy.get(cart.SHOPPING_CART_BADGE).should('not.exist')
    }

    static adicionar_produto(){
        super.clickOnElement(add.BTN_ADD_PRODUCT)
        //cy.get(add.BTN_ADD_PRODUCT).click()
        cy.get(add.BTN_REMOVE_PRODUCT).should('be.visible')
        //cy.get(cart.SHOPPING_CART_BADGE).should('exist')
        //cy.get(cart.SHOPPING_CART_BADGE)   
    }

    static qtd_carrinho(){
        cy.get(cart.SHOPPING_CART_BADGE).should('exist')
    }

    static acessar_carrinho(){
        cy.get(cart.SHOPPING_CART).click();
        cy.url('contain', 'cart')
        cy.get(cart.CART_TITLE).should('be.visible').and('contain', 'Your Cart')
        cy.get(cart.CART_ITEM).should('be.visible')
    }

    static remover_produto(){
        cy.get(add.BTN_REMOVE_PRODUCT).click()
        cy.get(cart.REMOVED_CART_ITEM).should('exist');
    }

}
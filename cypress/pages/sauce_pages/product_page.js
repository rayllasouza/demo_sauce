import Base from '../_base.page'
import { Add_Product as add } from '../components/sauce_components/product_elements'

export class Sauce extends Base {

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
}
import Base from '../_base.page'
import { Cart as cart } from '../components/sauce_components/cart_elements'

export class Sauce extends Base {

    
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
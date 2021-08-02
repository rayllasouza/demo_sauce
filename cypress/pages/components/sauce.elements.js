const Login = {
    INPUT_USER     : '[data-test=username]',
    INPUT_PASSWORD : '[data-test=password]',
    BTN_LOGIN      : '[data-test=login-button]'
}

const Add_Product = {
    BTN_ADD_PRODUCT    : '[data-test=add-to-cart-sauce-labs-backpack]',
    BTN_REMOVE_PRODUCT : '[data-test=remove-sauce-labs-backpack]'
}


const Cart = { 
    SHOPPING_CART_BADGE  : '.shopping_cart_badge',
    SHOPPING_CART        : '#shopping_cart_container',
    CART_TITLE           : '.title',
    CART_ITEM            : '.cart_item',
    REMOVED_CART_ITEM    : '.removed_cart_item'
}

export{Login, Add_Product, Cart}
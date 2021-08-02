Feature: Exemplos simples
 
    Background: Iniciar na página de exemplo
        Given que esteja na página home
        And que esteja logado com "standard_user" e senha "secret_sauce"
 
    Scenario: Adicionar produtos ao carrrinho
        Given que o carrinho esteja vazio
        When adicionar produtos ao carrinho 
        Then a quantidade de itens no carrinho deve aumentar
        And os produtos devem ser adicionados ao carrinho  
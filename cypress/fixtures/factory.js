
export default class Factory{

    static usuario(type, admin = true){
        switch(type){
            case 'valido':
                return {
                    "usuario": "standard_user",
                    "senha": "secret_sauce"
                }
            
            case 'invalido':
                return {
                    "usuario": "teste_!",
                    "senha": "secret_1"
                }

            default: 
                return false
        }
    }
}
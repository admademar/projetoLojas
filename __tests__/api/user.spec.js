// Bibliotecas
const supertest =  require("supertest");
const assert = require("chai").assert;


// Classe (Opcional)

describe('PetStore Swagger - User', () =>{
   
    const request = supertest("https://petstore.swagger.io/v2");
     userId = 111999222
     username = "Scooby"
     let token = " ";

     // Funções ou Métodos

     // Adicionar Usuário
     it('POST User ', () => {
        const jsonFile = require("../../vendors/user1.json");

        return request 
            .post("/user")
            .send(jsonFile)
            .then((resposta) =>{
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.code, 200);
                assert.equal(resposta.body.type, "unknown");
                assert.equal(resposta.body.message, userId);
            })
        
     })


     // Consultar Usuário
     it('GET User ', () => {
        return request
            .get("/user/" + username)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, userId);
                assert.equal(resposta.body.password, "123456");
                assert.equal(resposta.body.phone, "990011223344");

            })
        
    })

     // Alterar Usuário
     it('PUT User ', () => {
        const jsonFile = require("../../vendors/user2.json");

        return request
            .put("/user/" + username)
            .send(jsonFile)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.code, 200);
                assert.equal(resposta.body.type, "unknown");
                assert.equal(resposta.body.message, userId);

            })
        
    })

     // Excluir Usuário
     it('DELETE User ', () => {
        return request
            .delete("/user/" + username)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                
            })
        
      
        
    })

    it('Login com extração - token', () => {
        const username = "Scooby";
        const password = "123456";

        return request
            .get("/user/login?username=" + username + "&password=" + password)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                token = resposta.body.message.substring(23);
                console.log("token " + token);

                
            })
            
            
        
    })
    
})


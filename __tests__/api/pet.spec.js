// Importações // Referências as Bibliotecas
const supertest = require("supertest");
const assert = require("chai").assert;

const petId = 2671954;          // Id do Pet / como um dos resultados esperados

describe('PetStore Swagger - Pet', () => {
    // Definir o caminho do serviço / API - BaseURL
    const request = supertest("https://petstore.swagger.io/v2");
   // Função Post == Create == Incluir
    it('POST Pet', () => {
        // Onde esta o Json com dados do Pet
        const jsonFile = require("../../vendors/pet1.json");

        
        return request          // chamada para a requisição
            .post("/pet")       // endpoint / função chamada
            // Executa
            .send(jsonFile)     // body / corpo da requisição
            // Executa
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200); // comunicação ok
                assert.equal(resposta.body.id, petId);  // Valida o PetId
                assert.equal(resposta.body.name,"dolli" );
                assert.equal(resposta.body.status, "available")  ;

                
            })
        // Final do Post    
                    
    });

    it('GET Pet', () => {
        return request 
            .get("/pet/" + petId)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, petId);
                assert.equal(resposta.body.name, "dolli");
            })
        
    })

    it('PUT - Pet', () => {
        const jsonFile = require("../../vendors/pet2.json");

        return request
            .put("/pet")
            .send(jsonFile)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, petId);
                assert.equal(resposta.body.status, "solded");
            })
        
    })

    // Função DELETE ==  Excluir 

    it.only('DELETE Pet', () => {
        return request
            .delete("/pet/" + petId)
            .then((resposta) => {
                assert.equal(resposta.statusCode, 200);
                
            });
        
    })
    
})
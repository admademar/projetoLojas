const calculadora = require("../../src/calculadora.js");

const massaDivisaoJSON =  require("../../vendors/massaUnidade");

describe('>>> TESTE CALCULADORA <<< ', () => {
    

    test('SOMAR DOIS NUMEROS       ( 17 + 33 )', () => {
        // 1.1 Configura => dados de entrada Input
        const num1 = 17;
        const num2 = 33;

        // 1.2 - Dados de Saída -  Output -  Resultado Esperado
        const resultadoEsperado = 50;

        // 2 - Executa 
        const resultadoAtual = calculadora.somarDoisNumeros(num1,num2);
        
        // 3 - Validar

        expect(resultadoEsperado).toBe(resultadoAtual);

    });


    test('SUBTRAIR DOIS NUMEROS    ( 45 - 15 ) ', () => {
        // 1.1 Configura - Dados de Entrada Input
        const num1 =  45;
        const num2 = 15;

        // 1.2 - Output Dados de Saida - Resultado Esperados
        const resultadoEsperado = 30;

        // 2 - Executar
        const resultadoAtual =  calculadora.subtrairDoisNumeros(num1, num2);


        // 3 - Validar 
        expect (resultadoEsperado).toBe(resultadoAtual);
        
    });

    test('MULTIPLICAR DOIS NUMEROS ( 5 * 30 )', () => {
        // Configura - Dados de Entrada Input
        const num1 = 5;
        const num2 = 30;

        // Resultado Esperado - Dados de Saída Output
        const resultadoEsperado = 150;

        // Executar 
        const resultadoAtual = calculadora.multiplicarDoisNumeros(num1, num2);

        // Validar 
        expect(resultadoEsperado).toBe(resultadoAtual);
        
    });

    test('DIVIDIR DOIS NUMEROS     ( 125 / 25 ) ', () => {
        // Configura - Dados de Entrada Input
        const num1 = 125;
        const num2 = 25;

        // Resultado Esperado -  Dados de Saída Output
        const resultadoEsperado = 5 

        // Executar
        const resultadoAtual = calculadora.dividirDoisNumeros(num1, num2);

        //Validar
        expect(resultadoEsperado).toBe(resultadoAtual);
        
    });

    // Teste Negativo / Teste de Exceção
    test('DIVIDIR POR ZERO - NEGATIVO/EXCEÇÃO -', () => {
        const num1 = 7;
        const num2 = 0 ;
        const resultadoEsperado = Infinity;
        const dividirDoisNumeros = calculadora.dividirDoisNumeros;
        expect(dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);
        
    })

    // Data Driven Test para a função dividirDoisNumeros
    // Lista / Array que contém a massa de testes
    const massaDivisao = [
        [125, 25, 5],
        [100, 10, 10],
        [525, 15, 35],
        [1025, 25, 41],
        [7, 0, Infinity]
    ] 
    //Script que usa a massa de teste
    test.each(massaDivisao)("Dividir %f / %f", (num1, num2, resultadoEsperado) => {
        const dividirDoisNumeros = calculadora.dividirDoisNumeros;
        expect(dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);

    });

    // Script que usa a massa teste no formato json
    test.each(massaDivisaoJSON.array.map(elemento => [
        elemento.num1, 
        elemento.num2,
         elemento.resuçtadoEsperado

    ]))('Divida %f / %f', (num1, num2, resultadoEsperado) => {

        expect(calculadora.dividirDoisNumeros(num1, num2)).toBe(resultadoEsperado);
    });


})
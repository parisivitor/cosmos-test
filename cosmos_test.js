// ----------------------------------------------------------------
// Exercicio 1:
/*
    Escreva uma função em JavaScript que receba um array de
    números como argumento e retorne a soma de todos os
    números pares.
*/
let decimal_places = 2

function isDecimal(num){
    return num.toString().includes('.');
}

function isPar(num) {
    if(num%2 === 0){
        return true;
    } else if(isDecimal(num)){
        return isPar(parseFloat((num).toString().split(".")[1])); //pegar apenas a parte decimal do numero e verificar se é par
    } else {
        return false;
    }
}


function sumPair(array_values) {
    return parseFloat(array_values.reduce((total, x) => isPar(x) ? total + x : total, 0).toFixed(decimal_places));
}

const assert = require('assert');

assert.strictEqual(sumPair([]), 0);
assert.strictEqual(sumPair([1,3,5,-1,-1,-3]), 0);
assert.strictEqual(sumPair([2,4,6,8,10]), 30);
assert.strictEqual(sumPair([1,2,3,4,5,6,7,8,9,10]),30);
assert.strictEqual(sumPair([1.1, 2.2, 3.2, -2.2, 2]), 5.2);
assert.strictEqual(sumPair([0.1, 0.2, 0.3, 0.4, 0.5]), 0.6);
assert.strictEqual(sumPair([0.1, 0.2, 0.3, 0.44, 0.5]), 0.64);
assert.strictEqual(sumPair([-0.1, -0.2, -0.3, -0.44, -0.5]), -0.64);
assert.strictEqual(sumPair([-0.1, -0.2, -0.3, -0.444, -0.5]), -0.64); //com 2 casas decimais como default

decimal_places = 3
assert.strictEqual(sumPair([-0.1, -0.2, -0.3, -0.444, -0.5]), -0.644); //com 3 casas decimais

console.log("Zero erros referente aos numeros pares em um array de numeros\n");

// ----------------------------------------------------------------
// Exercicio 2:
/*
    Implemente uma função em JavaScript que recebe um objeto
    como entrada e retorna a contagem de quantas vezes cada
    string aparece no objeto. Considere apenas propriedades
    do tipo string.
*/

/*
    Definição de string para a resolução do exercicio:
    levando em conta que uma string é uma lista de array e que o inicio de uma string é quando abre " e ela termina quando fecha "
    e que toda key de um objeto é uma string, logo temos o seguinte algaritimo para somatoria de strings.
*/
function stringCount(value, base){
    if(typeof(value) == 'string'){
        let keys = Object.keys(base);
        keys.includes(value) ? base[`${value}`] += 1 : base[`${value}`] = 1
        return base
    }
}

function objectStringCount(object){
    // recebe um obejto e retorna cada string como key e o value como a quantidade de repeticoes
    let result = {}
    for ([key, value] of  Object.entries(object)){
        result = stringCount(key, result)
        result = stringCount(value, result)
    }
    return result
}

object = {
    cosmos: "uma empresa",
    empresa: "uma empresa",
    sucesso: "cosmos",
    lider: "cosmos",
    "uma empresa": "typescript"

}
assert.strictEqual(objectStringCount(object).cosmos, 3);
assert.strictEqual(objectStringCount(object)["uma empresa"], 3);
assert.strictEqual(objectStringCount(object).empresa, 1);
assert.strictEqual(objectStringCount(object).typescript, 1);
assert.strictEqual(objectStringCount(object).sucesso, 1);


object2 = {
    1: "uma empresa",
    empresa: "1",
    sucesso: "1",
    correria: "sem muito tempo",
    "sem muito tempo": "com muito tempo"

}
result = objectStringCount(object2)
assert.strictEqual(result["1"], 3)
assert.strictEqual(result["uma empresa"], 1)
assert.strictEqual(result.empresa, 1)
assert.strictEqual(result.sucesso, 1)
assert.strictEqual(result["sem muito tempo"], 2)
assert.strictEqual(result["com muito tempo"], 1)

console.log("Zero erros referente a quantidade de strings por objetos")

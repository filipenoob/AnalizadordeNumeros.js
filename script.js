let num = document.querySelector("input#fnum")
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if(Number(n) >= 1  && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false 
    }

}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item) /* appendChild() é um dos métodos fundamentais da programação para a web usando o DOM. 
                                O método appendChild() insere um novo nó na estrutura do DOM de um documento, e é a
                                 segunda parte do processo criar-e-adicionar tão importante na construção de páginas 
                                 web programaticamente.*/
        res.innerHTML = '' // quando o valor for adicionado ira zerar.

    } else {
        window.alert(`o valor não esta entre 0 e 100 ou ja esta na lista.`)
    }
    num.value = ' '        //para resetar o valor do botão num.
    num.focus()            //para o cursor de texto ir direto para num.

}


function finalizar(){
    if(valores.length == 0){
        window.alert(`Adicioane valores antes de finalizar.`)
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos] //vai somar todas as posições [pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }


        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos <strong>${total}</strong> números cadastrados.</p>`
        res.innerHTML += `<p> O <strong>Maior</strong> valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p> O <strong>Menor</strong>  valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p> Somando todos os valores temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p> A média dos valores é <strong>${media}</strong>.</p>`
    } 


}

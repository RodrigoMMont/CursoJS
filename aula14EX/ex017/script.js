function tabuada()
{
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0)
    {
        alert('Por favor, digite um número!')
    }
    else
    {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' //isso é pra limpar a area antes de mostrar a tabuada pq se não, fica mostrando uma em cima da outra
        while(c <= 10)
        {
            let item = document.createElement('option')//cria opcões para o selecionador de fomra dinamica
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` //para validar os numeros mostrados no selecionador
            tab.appendChild(item) // precisa disto para a tabuada aparecer
            c++
        }
    }
    
}
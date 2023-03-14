function verificar() //a função verificar crianda la no html
{
    var data = new Date() //data atual
    var ano = data.getFullYear() //ano atual, fullyear é pq ele vai pegar completo com 4 digitos
    var fano = document.getElementById('txtano') //recebe o ano que veio do formulário que o usuário preencheu 'txtano' é pq pegou o id da div
    var res = document.querySelector('div#res') //recebe o res da outra div
    if(fano.value.length == 0 || fano.value > ano) //a primeiro validação verifica se a caixa está vazia || a segunda verifica se o valor digitado é maior do que a ano
    {
        alert('[ERRO] Vefifique os dados e tente novamente')
    }
    else
    {
        var fsex = document.getElementsByName('radsex') //pegou o sexo do formulario
        var idade = ano - fano.value //calculo da idade: idade recebe o ano - o valor digitado na caixa
        var genero = ''
        //add imagens dinamicamente pelo JS vvvvv
        var img = document.createElement('img') //vai criar uma tag img
        img.setAttribute('id', 'foto') // criando um id foto
        if(fsex[0].checked)
        {
            genero = 'Homem'
            if(idade >= 0 && idade < 10)
            {
                //criança
                img.setAttribute('src', 'garoto.png')// carregar as imagens
            } else if(idade < 21)
            {
                //jovem
                img.setAttribute('src', 'moço.png')
            } else if(idade < 50)
            {
                //adulto
                img.setAttribute('src', 'homem.png')
            } else
            {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }
            
        }
        else if(fsex[1].checked)
        {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10)
            {
                //criança
                img.setAttribute('src', 'garota.png')
            } else if(idade < 21)
            {
                //jovem
                img.setAttribute('src', 'moça.png')
            } else if(idade < 50)
            {
                //adulto
                img.setAttribute('src', 'mulher.png')
            } else
            {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center' //cetralizar a res por JS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // precisa disso para as imagens aparecer
    }
}
function carregar()
{
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    


    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12)
    {
        img.src = 'manhã.png.png' //mostrar a foto
        document.body.style.background = '#fcd4cc' //mudar a cor de fundo
    }                                       //esse códico é o codigo da cor
    else if(hora >= 12 && hora <= 18)
    {
        img.src = 'tarde.png.png'
        document.body.style.background = '#da8665'
    }
    else
    {
        img.src = 'noite.png.png'
        document.body.style.background = '#4b5967'
    }
        
}

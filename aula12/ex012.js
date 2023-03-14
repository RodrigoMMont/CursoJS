var agora = new Date()
var min = new Date()
var hora = agora.getHours()
var minutos = min.getMinutes()
console.log(`Agora são extamente ${hora}:${minutos}`)
if(hora < 12)
{
    console.log('Bom dia!')
}
else if(hora <= 18)
{
    console.log('Boa tarde!')
}
else
{
    console.log('Boa noite!')
}
let num = [5,8,2,9,3]
console.log(num)
num.push(3) // num.push adiciona o numero dentro do () na ultima posição do vetor
console.log(`o vetor tem ${num.length} posições`) //num.length conta quantas posições tem o vetor
console.log(`o primeiro valor do vetor é ${num[0]}`) // mostrar em uma posições especifica

//-----------------------------------------------------------------------------------

for(let i = 0; i <num.length;i++) // mostrando em ordem crescente
{
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

//---------------------------------------------------------------------------------------

for(let i in num) // um jeito mais simples e atual de usar for.. mais específico para vetor
{
    console.log(num[i])
}

//-----------------------------------------------------------------------------

let pos = num.indexOf(5) //indexOF() procura dentro do vetor o numero dentro do () e mediz que posição ele está. se ele não encontrar o numero ele retorna -1
if(pos == -1)
{ 
    console.log('Número não encontrado dentro do vetor') 
}
else
{ 
    console.log(`o Valor está na posição ${pos}`) //criei a variavel pos e coloquei dentro dela a posição que o indexOf retornou
} 
console.log(`em ordem crescente ${num.sort()}`) //num.sort() mostra em ordem crescente

//---------------------------------------------------------------------------
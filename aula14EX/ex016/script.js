function contar()
{
    var ini = document.getElementById('txti')
    let fim = document.getElementById('txtf') // let mesma coisa que var
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')
    
    
    
    if(fim.value.length == 0 || passo.value.length == 0 || ini.value.length == 0)
    {
        res.innerHTML = 'Impossivel contar !'
        //alert('[ERRO] Verifique os dados e tenten novamente')
        
    }
    else
    {   
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value) //convertendo para number
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0 )
        {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        
        if(i < f)
        {
            for(var c = 1; c <= f; c += p)
            {
                res.innerHTML += ` ${c} \u{1F449}` //codigo do emoji
            }
            
        }
        else
        {
            for(var c = i; c >= f; c-= p)
            {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }
        res.innerHTML += ` \u{1F3C1}`
       
    }
     
    
}

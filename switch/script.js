let dia = 3
let diaNome = ''


switch( dia ){
    case 0:
        diaNome = 'Final de semana'
        break

    case 1: 
        diaNome = 'Segunda-feira'    
        break

    case 2: 
        diaNome = 'Terça-feira'    
        break

    case 3: 
        diaNome = 'Quarta-feira'    
        break

    case 4: 
        diaNome = 'Quinta-feira'    
        break

    
    case 5: 
        diaNome = 'Sexta-feira'    
        break   

    case 6:
        diaNome = 'Final de semana'
        break

}

document.getElementById('dia').innerHTML = "Hoje é: " + diaNome
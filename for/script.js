let carros = [ 'Ferrari', 'Fusca', 'Palio', 'Corolla' ]

let html = '<ul>'

for(let i in carros){
    html += '<li>' + carros[i] + '</li>'
}

html +=  '</ul>'

document.getElementById('demo').innerHTML = html
console.log('I am here')

function square(tall, name){
    return name + ', regnestykket ditt gir: ' + tall * tall
}

console.log( square(16, 'Per') )

const squareA = tall => tall * tall

console.log(squareA(21))

const fler = (name1, name2) => 'Hei ' + name1 + ' og' + name2

console.log(fler('Simon', 'Per'))

setTimeout(()=>document.querySelector('body').style.backgroundColor='orange', 2000)


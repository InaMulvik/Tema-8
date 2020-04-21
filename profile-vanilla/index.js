let name = document.querySelector('#name')
let email = document.querySelector('#email')
let submit = document.querySelector('#submit')
let form = document.querySelector('#form')
let password = document.querySelector('#password')
let repeat = document.querySelector('#repeat')
submit.addEventListener('click', okButton)

/* name.addEventListener('input', nameInput)
function nameInput(){
    console.log(name.value)
} */

function okButton(){
    console.log(name.value, email.value, password.value, repeat.value)
    greet()
}

function greet(){
    form.innerHTML = '<h1>Hei ' + name.value + '</h1>'
    form.innerHTML += '<p>Det er veldig hyggelig at du vil være med i prosjektet vårt</p>'
    form.innerHTML += '<p>Om jeg forstår det riktig, er navnet ditt ' + name.value + 
    ' og eposten din er: ' + email.value + '</p>'

    const newOkButton = document.createElement('button')
    newOkButton.innerHTML = 'Ok'
    newOkButton.addEventListener('click', function(){
        form.innerHTML = '<h1>Supert!</h1>'
    })
    form.appendChild(newOkButton)

    const newCancelButton = document.createElement('button')
    newCancelButton.innerHTML = 'Cancel'
    newCancelButton.addEventListener('click', function(){
        form.innerHTLM = ''
        form.appendChild(name)
        form.appendChild(email)
        form.appendChild(submit)
    })  
    form.appendChild(newCancelButton)  
}


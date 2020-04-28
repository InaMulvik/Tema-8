import colors from './data/colors.js'

let main = document.querySelector('main')
let circle = document.querySelector('#circle')
let pos = 0


const time = () => {
    let t = new Date()
    let hours = t.getHours()
    let min = t.getMinutes()
    let sec = t.getSeconds()

circle.innerHTML = `${hours}:${min}:${sec}`
}

let timer = setInterval(time, 1000)
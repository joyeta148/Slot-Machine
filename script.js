
let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let Stop = document.getElementById('stop')
let start = document.getElementById('start')
let restart = document.getElementById('restart')
let speed = document.getElementById('speed')

let values = [
    '🍒', '🍌', '🍊', '🍇', '🍐', '🍉', '🍓', '🥝', '🍋'
]

function getRandomValues() {
    return values[Math.floor(Math.random(values) * 9)]
}

let animationId;
restart.onclick = function(){
    document.documentElement.style.setProperty('--speed', 5)
    animationId = setInterval(() => {
        value1.innerText = getRandomValues()
        value2.innerText = getRandomValues()
        value3.innerText = getRandomValues()
    },300)  
    speed.value = 0
}
start.onclick = function(ev) {
    console.log("hello")
    animationId = setInterval(() => {
        value1.innerText = getRandomValues()
        value2.innerText = getRandomValues()
        value3.innerText = getRandomValues()
    },300)  
    speed.onchange = function(ev){
        document.documentElement.style.setProperty('--speed', ev.target.value)
    }
}

Stop.onclick = function() {
    clearInterval(animationId);
    document.documentElement.style.setProperty('--speed', 0)
}






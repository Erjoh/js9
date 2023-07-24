const btn = document.querySelector('#btn')
const input = document.querySelector('#input')
const increase = document.querySelector('#increase')
const decrease = document.querySelector('#decrease')
const counter = document.querySelector('#count')
const reset = document.querySelector('#reset')
const error = document.querySelector('#error')
const plus1 = document.querySelector('#plus1')
const plus2 = document.querySelector('#plus2')
const plus3 = document.querySelector('#plus3')
const plus4 = document.querySelector('#plus4')
const plus5 = document.querySelector('#plus5')
const multi1 = document.querySelector('#multi1')
const multi2 = document.querySelector('#multi2')
const multi3 = document.querySelector('#multi3')
const multi4 = document.querySelector('#multi4')
const multi5 = document.querySelector('#multi5')
const errorId = document.querySelector('#errorId')
const closemark = document.querySelector('#closemark')


closemark.addEventListener('click' , (event) => {
    errorId.style.display = "none"
})

let value
input.addEventListener('keyup', (event) => {
    value = event.target.value
})

const calcValues = (value1, value2, operator) => {
    let result;
    if (operator === '-') {
        result = value1 - value2
    } else if (operator === '*') {
        result = value1 * value2
    } else if (operator === '/') {
        result = value1 / value2
    } else if (operator === '+') {
        result = parseInt(value1) + parseInt(value2)
    }

    if (result >= 100) {
        errorId.style.display = 'block'
    } else {
        counter.innerHTML = result
    }


}
const handleResponce = () => {
    fetch(`https://swapi.dev/api/people/${value}/`)
        .then(responce => responce.json())
        .then(data => {
            fetch("https://swapi.dev/api/vehicles/14/")
                .then(responce => responce.json())
                .then(vehicle => {
                    fetch("https://swapi.dev/api/starships/12/")
                        .then(responce => responce.json())
                        // .then(starship => alert(`Hello ${data.name} and you are ${data.birth_year}, your ${vehicle.name}, your ${starship.name}`))
                })
        })
        .catch(error => console.log(error))
}

btn.addEventListener('click', (event) => {
    handleResponce()
})
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleResponce()
    }
})
increase.addEventListener('click', (event) => {
    if (parseInt(counter.innerText) <= 100) {
        counter.innerHTML = parseInt(counter.innerText) + 1
    } else {
        error.innerHTML = 'Counter cannot be more then 100'
    }
})
decrease.addEventListener('click', (event) => {
    if (parseInt(counter.innerText) > 0) {
        counter.innerHTML = parseInt(counter.innerText) - 1
    } else {
        errorId.style.display = 'block'
    }
})
reset.addEventListener('click', (event) => {
    counter.innerHTML = 0
    errorId.style.display = 'none'
})

plus1.addEventListener('click', (event) => {
    calcValues(counter.innerHTML, 1, '+')
})

plus2.addEventListener('click', (event) => {
    calcValues(counter.innerHTML, 2, '+')
})

plus3.addEventListener('click', (event) => {
    calcValues(counter.innerHTML, 3, '+')
})

plus4.addEventListener('click', (event) => {
    calcValues(counter.innerHTML, 4, '+')
})

plus5.addEventListener('click', (event) => {
    calcValues(counter.innerHTML, 5, '+')
})

multi1.addEventListener('click', (event) => {
    calcValues(counter.innerHTML, 1, '*')
})

multi2.addEventListener('click', (event) => {
    calcValues(counter.innerHTML, 2, '*')
})

multi3.addEventListener('click', (event) => {
    calcValues(counter.innerHTML, 3, '*')
})

multi4.addEventListener('click', (event) => {
    calcValues(counter.innerHTML, 4, '*')
})

multi5.addEventListener('click', (event) => {
    calcValues(counter.innerHTML, 5, '*')
})

handleResponce()
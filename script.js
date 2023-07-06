console.log('Connected..')

const form = document.querySelector('form')
// console.log(form)

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    // console.log(height)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Provide Valid Height.. <b>${height}</b>`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Provide Valid Weight.. ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.6) {
            under_weight = document.querySelector('#under-weight')
            under_weight.style.backgroundColor = 'red'
        }
        else if (bmi > 24.9) {
            over_weight = document.querySelector('#over-weight')
            over_weight.style.backgroundColor = 'red'
        }
        else if (18.6 < bmi < 25.9) {
            normal_weight = document.querySelector('#normal-weight')
            normal_weight.style.backgroundColor = 'green'
            normal_weight.style.color = 'white'
        }
    }



})
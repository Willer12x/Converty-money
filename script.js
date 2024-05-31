const button = document.getElementById("button-1")
const dolar = 5.23
const euro = 5.68
const bitcoin = 351
const select = document.getElementById('select-moeda')

const converter = () => {
const input = document.getElementById('input-01').value
const real = document.getElementById('real-valor')
const valordodolar = document.getElementById('dolar-valor')

if(select.value === '€ Euro')
valordodolar.innerHTML = new Intl.NumberFormat('de-DE',
{style: 'currency', currency: "EUR" }
).format(input / euro)

if(select.value === "US$ Dólar americano")
valordodolar.innerHTML = new Intl.NumberFormat('en-US',
{style: 'currency', currency: "USD" }
).format(input / dolar)

if(select.value === "BTC Bitcoin")
valordodolar.innerHTML = new Intl.NumberFormat('bitcoin',
{style: 'currency', currency: "BTC" }
).format(input / bitcoin)

real.innerHTML= new Intl.NumberFormat('pt-BR',
{style: 'currency', currency: "BRL",}
).format(input)

}

changecurrency = () => {
const moedadodollar = document.getElementById('moeda-dolar')
const imageeuro = document.getElementById('bandeira-euro')

if(select.value === '€ Euro'){
moedadodollar.innerHTML = 'Euro'
imageeuro.src ="../Assets/euro.png"
}

if(select.value === 'BTC Bitcoin'){
    moedadodollar.innerHTML = 'Bitcoin'
    imageeuro.src ="..//Assets/Design sem nome (1) 1.png"
    }

if(select.value === 'US$ Dólar americano'){
moedadodollar.innerHTML = 'Dóllar americano'
imageeuro.src ="../Assets/estados-unidos (1) 1.png"}

converter()

}
button.addEventListener('click', converter)
select.addEventListener('change', changecurrency)
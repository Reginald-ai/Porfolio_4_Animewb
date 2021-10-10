const animeMonthly = document.querySelector('#anime-prize-monthly')
const animeYearly = document.querySelector('#anime-prize-yearly')
const checkboxToggle = document.querySelector('#checkbox-toggle')


checkboxToggle.onclick =() =>{
    animeYearly.classList.toggle('active')
    animeMonthly.classList.toggle('active')
}
// checkboxToggle_2.onclick =() =>{
//     animeYearly.classList.toggle('active')
//     animeMonthly.classList.toggle('active')
// }


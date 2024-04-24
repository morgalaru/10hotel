// insert current year in footer
const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear()

//nav
const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');
hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});



//get card data and attach to html
import {hotels} from "../data/hotels.js";
console.log(hotels)
const hotelCards = document.querySelector('#cards')

hotels.forEach (hotel => {
    const mySection = document.createElement('section')

    const theImage = document.createElement('img')
    theImage.src = `images/${hotel.photo}`
    theImage.alt = hotel.name
    
    const theName = document.createElement('h2')
    theName.textContent = hotel.name

    const theAddress = document.createElement('address')
    theAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`

    const thePhone = document.createElement('a')
    thePhone.textContent = hotel.phone
    thePhone.href = `tel:${hotel.phone}`

    mySection.appendChild(theImage)
    mySection.appendChild(theName)
    mySection.appendChild(theAddress)
    mySection.appendChild(thePhone)

    hotelCards.appendChild(mySection)
})


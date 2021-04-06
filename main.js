//document.body.style.backgroundColor = 'tomato'
//document.title = 'Esto es un titulo cambiado desde JS'

/* const title = document.getElementsByTagName('title')
console.log(title)
title[0].textContent = 'Este es otro título' */

/* const _divs = document.getElementsByTagName('div')
const divs = Array.from(_divs)
console.log(divs) */

/* for(i = 0; i < divs.length; i++) {
   divs[i].innerText = 'Hola mundo!'
 } */


 /* divs.forEach(div => {
   div.innerText = 'Hola Mundo cruel!'
 }) */

//divs[0].innerText = 'Hola Mundo!' 
//divs[1].innerText = 'Adión Mundo Cruel!' 

//div.innerText = 'Hola Mundo!' 

/* const primer_div = document.getElementById('primer-div')
const segundo_div = document.getElementById('segundo-div')

console.log(primer_div, segundo_div)

primer_div.innerText = 'Hola Mundo!' 
segundo_div.innerText = 'Adión Mundo Cruel!' 
 */
//const elementos = document.getElementsByClassName('elemento-modificable')
//console.log(elementos)

//const divs = Array.from(elementos)

/* divs.forEach(div => {
  div.innerText = 'Hola Mundo!'
}) */

/* const todos_los_lis = document.getElementsByTagName('li')

const primer_div = document.getElementById('primer-div')
const lis = primer_div.getElementsByTagName('li')

console.log(todos_los_lis)

lis[3].style.color = 'tomato' */

/* const addresses = ['https://desafiolatam.com', 'https://empieza.desafiolatam.com', 'https://mtv.com']
const navbar = document.getElementsByClassName('navbar')
const links = navbar[0].getElementsByTagName('a')

//console.log(links)

for(i = 0; i < links.length; i += 1) {
  links[i].href = addresses[i]
}
 */

const js = 'JavaScript'

const h1 = document.createElement('h1')   
h1.className = 'title'                                  //Se crea etiqueta h1 este lo que hace es que crea el texto para insertar 
const text = document.createTextNode(`Este es un texto creado desde ${js}`)   // en el h1.  
h1.appendChild(text)             //Inserta el texto dentro del h1

document.body.appendChild(h1)   // Inserta el h1 en el body

const p = document.createElement('p')
const pText = document.createTextNode('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book')

p.appendChild(pText)
p.classList.add('p')
p.style.width = '600px';
p.style.fontSize = '1rem';

document.body.appendChild(p)

const images = ['bg_01.jpg','bg_02.jpg','bg_03.jpg','bg_04.jpg','bg_05.jpg','bg_06.jpg','bg_07.jpg']
const image = images[Math.floor(Math.random() * images.length)]


document.body.style.background = `url(./images/${image}) no-repeat center / cover transparent`


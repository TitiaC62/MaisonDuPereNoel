//import citations modales
import { quotes } from "./quotes.js";



//changement de couleurs au passage de la souris

const adventNumber = document.querySelectorAll(".advent__number")

adventNumber.forEach((number) => {
    const num = parseInt(number.textContent);
    
    if (num % 2 === 0) {
        number.style.backgroundColor = "red";
    } else {
        number.style.backgroundColor = "green";
    }

    adventNumber.forEach((number) => {
        number.addEventListener("mouseover", () =>{
            const num = parseInt(number.textContent)
            if( num % 2 == 1) {
            number.style.backgroundColor = "red"
            }
            else{
            number.style.backgroundColor = "green"
            }
        
            })

    })

})

//ouverture de la modale et couleur bleue

const boxes = document.querySelectorAll(".js-box")
const today = new Date(Date.now())
const dateNumber = today.getDate()

let timeoutId

boxes.forEach (box => {
    box.addEventListener('click', () => {
        const boxNumber = parseInt(box.textContent)
        
        if (boxNumber <= dateNumber){
            box.style.backgroundColor = "blue"
           playSong()
            openModal(boxNumber)

            timeoutId = setTimeout(() => {
                stopSong()
            }, 2500)
        }
        
    })
})

// musique

 const url = "./assets/mp3/music.mp3"
 const song = new Audio(url)

const playSong = () => {
    song.pause()
    song.currentTime = 0
    song.play()   
}

const stopSong = () => {
    song.pause()
    song.currentTime = 0
    clearTimeout(timeoutId)
}



//ouverture de la modale

const modal = document.querySelector(".js-modal")
const quote = document.querySelector(".js-quote")
const author = document.querySelector(".js-author")

const openModal = (index) => {
    modal.style.display = 'block'
    quote.textContent = quotes[index].quote
    author.textContent = quotes[index].author
    console.log(index)
    
}

const closeModal = document.querySelector('.modal__button')

closeModal.addEventListener('click', () =>{
    modal.style.display = 'none'
    stopSong()

})



window.addEventListener('resize', () => {
    const modal = document.querySelector('.js-modal');
    modal.style.top = `${window.innerHeight / 2 - modal.offsetHeight / 2}px`;
    modal.style.left = `${window.innerWidth / 2 - modal.offsetWidth / 2}px`;
  });
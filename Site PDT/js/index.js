const rondo =  document.getElementById('carousel-rolagem')
const marselo = document.getElementById('marselo')
var humberto = false
const btnMarselo = document.getElementById('marseloengrazado')
const som = new Audio('sounds/Bob.mp3')
    function marselo_humberto(){
        marselo.innerHTML = `<img src="img/png/TenhoMedo.png" width="100%" height="100%">`     
      }

btnMarselo.addEventListener('click', () => {
  marselo_humberto()
  som.play()
})

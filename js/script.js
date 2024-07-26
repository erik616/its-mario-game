const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const score = document.querySelector("#score span")

const endGame = document.querySelector(".end-game")
const scoreEnd = document.querySelector(".end-game p span")

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 32) jump()
})

function jump() {
  mario.classList.add("jump")

  setTimeout(() => {
    mario.classList.remove("jump")
  }, 500)
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")

  let value = Number(score.innerHTML)


  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 105) {

    pipe.style.animation = 'none'
    pipe.style.left = `${pipePosition}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosition}px`

    mario.src = "./img/game-over.png";
    mario.style.width = "75px"
    mario.style.marginLeft = "50px"


    mario.style.animation = "lose 1s ease"
    mario.style.bottom = "-200px"

    document.querySelector("#score").style.display = "none"
    document.querySelector(".end-game p span").innerHTML = score.innerHTML

    endGame.classList.remove("remove")
    return clearInterval(loop)
  }


  score.innerHTML = value + 1
}, 10)

endGame.addEventListener("click", (e) => {
    const element = e.target
    if(element.classList.contains("restart")) window.location.reload()
})
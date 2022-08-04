const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
const ball = document.getElementById("block")
ball.style.backgroundColor = "yellow"

const header = document.createElement("h1")
header.innerHTML = "Ball Game"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Is the best game"
subHeader.setAttribute("class", "sub-header")
document.body.appendChild(subHeader)

const moveUp = function () {
    const topValue = parseInt(ball.style.top) || 0
    ball.style.top = (topValue - 15) + "px"
}

const moveLeft = function () {
    const leftValue = parseInt(ball.style.left) || 0
    ball.style.left = (leftValue - 15) + "px"
}

const moveRight = function () {
    const rightValue = parseInt(ball.style.left) || 0
    ball.style.left = (rightValue + 15) + "px"
}

const moveDown = function () {
    const downValue = parseInt(ball.style.top) || 0
    ball.style.top = (downValue + 15) + "px"
}

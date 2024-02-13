
const field = document.getElementById('gamefield')
const ctx = field.getContext("2d")

const width = 500
const height = 500

const rowCount = 100
const colCount = 100

field.width = width
field.height = height

const lengthY = Math.floor(width/ rowCount)
const lengthX = Math.floor(height/ colCount)

ctx.fillStyle = '#FFFFFF';

function dibujar (i, j, dot){
    if (dot) ctx.fillStyle = '#FFFFFF'; else ctx.fillStyle = '#000000'
    
    ctx.fillRect(j*lengthY, i*lengthX, lengthY, lengthX);
}



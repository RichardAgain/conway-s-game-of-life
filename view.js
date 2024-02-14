
const field = document.getElementById('gamefield')
const ctx = field.getContext("2d")

const width = 700
const height = 700

const rowCount = 100
const colCount = 100

field.width = width
field.height = height

let tileX = Math.floor(width/rowCount);
let tileY = Math.floor(height/colCount);

function dibujar (i, j, dot){
    if (dot) ctx.fillStyle = '#FFFFFF'; else ctx.fillStyle = '#000000'
    
    ctx.fillRect(i*tileX,j*tileY,tileX,tileY);
}

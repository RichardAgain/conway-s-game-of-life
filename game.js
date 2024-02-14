
let grid;
let state = 0
let pause = true

start()

function start () {
    grid = []

    for (i = 0; i < rowCount; i++) {
        let temp =[]
        for (j = 0; j < colCount; j++) {
            if (state == 0) { 
                let bool = (Math.random() < 0.2)
                temp.push(bool)
            } else {
                temp.push(false)
            }
        }
        grid.push(temp)
    }

    changeState()

    grid.forEach((rows, i) => {
        rows.forEach((dot, j) => {
            dibujar(i,j,dot)
        })
    })
}

function play () {
    if (pause) pause = false
    else pause = true
}

function reset () {
    pause = true
    start()

    botonIniciar.textContent = 'INICIAR'
    estado = 'INICIAR'
}

function change () {
    state += 1
    if (state > 2) state = 0
    start()
    pause = true

    botonIniciar.textContent = 'INICIAR'
    estado = 'INICIAR'
}

setInterval(function() {
    let newGrid = []

    if (!pause) {
        grid.forEach((rows, i) => {
            let newRow = [] 
            
            rows.forEach((dot, j) => {
                newRow.push(rule(dot, count(i, j)))
                
                dibujar(i,j,dot)
            })
            newGrid.push(newRow)
        })
        grid = newGrid
    }

}, 1000/10)

// Any live cell with fewer than two live neighbors dies, as if by underpopulation.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overpopulation.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

function rule(dot, count) {
    // console.log(count, dot)
    if (dot) {
        return !(count < 2 || count > 3);
    } else if (count == 3) return true
        else return false
}

function count(row, col) {
    let c = 0
    for (let i = row - 1; i <= row + 1; i++ ) {
        for (let j = col - 1; j <= col + 1; j++ ) {
            if (i == row && j == col) continue 

            try {
                if (j < 0 || j > grid[0].length) throw Error

                if (grid[i][j]) c++

            } catch(err) {
                let y = i
                let x = j

                if (y < 0) y = grid.length - 1
                else if (y > grid.length - 1) y = 0
                
                if (x < 0) x = grid[0].length - 1
                else if (x > grid[0].length - 1) x = 0

                if (grid[y][x]) c++
            }
        }
    }
    return c
}

// STATES 

function changeState() {
    if (state == 1) {
        grid[50][50] = true
        grid[50][51] = true
        grid[50][52] = true
        grid[49][51] = true
        grid[51][52] = true
    }

    if (state == 2) {

        grid[47][50] = true
        grid[48][50] = true
        grid[50][50] = true
        grid[51][50] = true
        grid[52][50] = true
        grid[53][50] = true
        grid[55][50] = true
        grid[56][50] = true

        grid[54][49] = true
        grid[54][51] = true
        grid[49][49] = true
        grid[49][51] = true
    }
}
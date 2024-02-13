
let grid = []

for (i = 0; i < rowCount; i++) {
    let temp =[]
    for (j = 0; j < colCount; j++) {
        temp.push(false)
    }
    grid.push(temp)
}

grid[0][0] = true
grid[1][0] = true
grid[0][1] = true
grid[0][0] = true

grid[99][98] = true
grid[99][99] = true
grid[98][99] = true
grid[0][0] = true

grid[50][50] = true 
grid[51][50] = true 
grid[51][49] = true 
grid[52][50] = true 
grid[52][51] = true 

setInterval(function() {
    let newGrid = []
    
    grid.forEach((rows, i) => {
        let newRow = [] 
        
        rows.forEach((dot, j) => {
            newRow.push(rule(dot, count(i, j)))

            dibujar(i,j,dot)
        })
        newGrid.push(newRow)
    })
    
    console.log(newGrid)
    grid = newGrid
}, 1000/ 60)

function count(row, col) {
    let c = 0
    for (let i = row - 1; i <= row + 1; i++ ) {
        text = ''
        for (let j = col - 1; j <= col + 1; j++ ) {
            if (i == row && j == col) { text += grid[i][j]; continue }

            try {
                if (j < 0 || j > grid[0].length) throw Error

                if (grid[i][j]) c++

                // text += grid[i][j]
            } catch(err) {
                let y = i
                let x = j

                if (y < 0) y = grid.length - 1
                else if (y > grid.length - 1) y = 0
                
                if (x < 0) x = grid[0].length - 1
                else if (x > grid[0].length - 1) x = 0

                // if (grid[y][x] == undefined) console.log(x, y)

                if (grid[y][x]) c++

                // text += grid[y][x]
            }
        }
        
        // console.log(text)
    }
    return c
}

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
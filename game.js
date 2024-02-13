
let text = "□□□□\n□□□□\n□■■■\n□□□□\n□□□□"

let grid = text.split('\n').map(col => col.split(''))

console.log(grid)

// while (true) {
    setInterval(function() {

        let newGrid = []
        
        
        grid.forEach((rows, i) => {
            let newRow = [] 
            
            rows.forEach((dot, j) => {
                newRow.push(rule(dot, count(i, j)))
            })
            newGrid.push(newRow)
        })
        
        console.log(newGrid)
        
        grid = newGrid
    }, 1000)
// }

function count(row, col) {
    let c = 0
    for (let i = row - 1; i <= row + 1; i++ ) {
        for (let j = col - 1; j <= col + 1; j++ ) {
            if (i == row && j == col) continue

            try {
                if (grid[i][j] == '■') c++
            } catch (err) {
                continue
            }
        }   
    }
    return c
}

// Any live cell with fewer than two live neighbors dies, as if by underpopulation.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by overpopulation.
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

function rule(dot, count) {
    // console.log(count, dot)
    if (dot == '■') {
        if (count < 2 || count > 3) return '□'
        else return '■'
    } else if (count == 3) return '■'
        else return '□'
}
function landPerimeter(arr)
{
    let totalPerimeter = 0;

    for (let row = 0; row < arr.length; row++)
    {
        for (let col = 0; col < arr[row].length; col++)
        {

            if (arr[row][col] === "X")
            {
                totalPerimeter += 4;
                if (col !== 0 && arr[row][col - 1] === "X")
                {
                    totalPerimeter--;
                }

                if (col !== arr[row].length - 1 && arr[row][col + 1] === "X")
                {
                    totalPerimeter--;
                }

                if (row !== 0 && arr[row - 1][col] === "X")
                {
                    totalPerimeter--;
                }

                if (row !== arr.length - 1 && arr[row + 1][col] === "X")
                {
                    totalPerimeter--;
                }

            }
        }
    }
    return "Total land perimeter: " + totalPerimeter;
}

const prompt = require("prompt-sync")();
const gridString = prompt("Enter the grid as a string (e.g., 'XOOXO XOOXO OOOXO XXOXO OXOOO'):");

const rows = gridString.split(' ');
const grid = rows.map(row => row.split(''));
const result = landPerimeter(grid);

console.log("Total Perimeter:", result);
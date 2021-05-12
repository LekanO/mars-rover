const position = require('../../position')

describe('Mars Rover', () => {
    [
        { x: 1, y: 2, facing: 'N', endFacing: 'N', instruction: ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M'] },
        { x: 3, y: 3, facing: 'E', endFacing: 'E', instruction: ['M', 'M', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M'] }
    ].forEach(({ x, y, facing, endFacing, instruction }) => {
        let rover = { x: x, y: y, facing: facing, endFacing: endFacing, instruction: instruction }
        rover = position(rover, { x: x, y: y, facing: facing, endFacing: endFacing, instruction: instruction })
        test(`drive mars rover from co-ordinates x position ${x}, y position ${y} facing ${facing} to destination co-ordinates x position ${rover.x}, y ${rover.y} facing ${endFacing}`, () => {
            expect(rover.facing).toBe(endFacing)
        })
    })
})
position = (rover) =>  {
    const compass = ['N', 'E', 'S', 'W'];
    const left = rover.instruction
    const right = rover.instruction
    const move = rover.instruction
    for (let i = 0; i < rover.instruction.length; i++) {
        switch (true) {
            case rover.facing  == 'N' && right[i] == 'R':
                rover.facing = compass[(compass.indexOf(rover.facing) + 1)]
                break;
            case rover.facing  == 'E' && right[i] == 'R':
                rover.facing = compass[(compass.indexOf(rover.facing) + 1)]
                break;
            case rover.facing  == 'S' && right[i] == 'R':
                rover.facing = compass[(compass.indexOf(rover.facing) + 1)]
                break;
            case rover.facing  == 'W' && right[i] == 'R':
                rover.facing = compass[(compass.indexOf(rover.facing) + 1) % 4]
                break;
            case rover.facing  == 'N' && left[i] == 'L':
                rover.facing = compass[(compass.indexOf(rover.facing) + 3)]
                break;
            case rover.facing  == 'W' && left[i] == 'L':
                rover.facing = compass[(compass.indexOf(rover.facing) - 1)]
                break;
            case rover.facing  == 'S' && left[i] == 'L':
                rover.facing = compass[(compass.indexOf(rover.facing) - 1)]
                break;
            case rover.facing  == 'E' && left[i] == 'L':
                rover.facing = compass[(compass.indexOf(rover.facing) - 1)]
                break;
            case rover.facing  == 'N' && move[i] == 'M':
                rover.y++
                break;
            case rover.facing  == 'E' && move[i] == 'M':
                rover.x++
                break;
            case rover.facing  == 'S' && move[i] == 'M':
                rover.y--
                break;
            case rover.facing  == 'W' && move[i] == 'M':
                rover.x--
                break;
            default:
                break
    }

}
return { ...rover, x: rover.x, y: rover.y, facing: rover.facing, instruction: rover.instruction }
}

module.exports = position;
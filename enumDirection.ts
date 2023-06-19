enum Direction {
    NEUTRAL,
    UP,
    DOWN,
    LEFT,
    RIGHT
};

let playerDirection: Direction = Direction.NEUTRAL;

function doSomething(direction: Direction) {
    switch(direction) {
        case Direction.UP:
            console.log("上");
            break;
        case Direction.DOWN:
            console.log("下");
            break;
        case Direction.LEFT:
            console.log("左");
            break;
        case Direction.RIGHT:
            console.log("右");
            break;
        default:
            console.log("中間");
            break;
    }
}

doSomething(Direction.NEUTRAL);
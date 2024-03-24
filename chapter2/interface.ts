interface Point {
    x: number;
    y: number;
}

function printPoint(point: Point) {
    console.log(`x: ${point.x}, y: ${point.y}`)
}

interface Point {
    z?: number;
}

printPoint({ x: 1, y: 2 })

printPoint({ x: 1, y: 2, z: 3 })

class MyPoint implements Point {
    x: number;
    y: number;
}

interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

// define new interface that inherits from others
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
    color: 'red',
    radius: 42
}

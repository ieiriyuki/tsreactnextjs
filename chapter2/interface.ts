interface Point {
    x: number;
    y: number;
}

function printPoint(point: Point) {
    console.log(`x: ${point.x}, y: ${point.y}`)
}

interface Point {
    z: number;
}

// compile error
// printPoint({ x: 1, y: 2 })

printPoint({ x: 1, y: 2, z: 3 })

class MyPoint implements Point {
    x: number;
    y: number;
}

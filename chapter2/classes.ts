class Point {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x
        this.y = y
    }

    moveX(x: number) {
        this.x += x
    }

    moveY(y: number) {
        this.y += y
    }
}

const point = new Point()
point.moveX(1)
console.log(`${point.x}, ${point.y}`)

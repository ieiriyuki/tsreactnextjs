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

class Point3D extends Point {
    z: number

    constructor(x: number = 0, y: number = 0, z: number = 0) {
        super(x, y)
        this.z = z
    }

    moveZ(z: number) {
        this.z += z
    }
}

const point3D = new Point3D()
point3D.moveZ(1)
console.log(`${point3D.x}, ${point3D.y}, ${point3D.z}`)

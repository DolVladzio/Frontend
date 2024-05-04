class Square {
    constructor(a) {
        this.a = a;
    }

    static help() {
        console.log("Square is a geometric figure with all sides equal.");
    }

    length() {
        return this.a * 4;
    }

    square() {
        return this.a ** 2;
    }

    info() {
        console.log(`Square:
        - Length of all sides: ${this.a}
        - Sum of lengths of all sides: ${this.length()}
        - Area: ${this.square()}`);
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }

    static help() {
        console.log("Rectangle is a geometric figure with opposite sides equal and all angles right.");
    }

    length() {
        return (this.a + this.b) * 2;
    }

    square() {
        return this.a * this.b;
    }

    info() {
        console.log(`Rectangle:
        - Length: ${this.a}
        - Width: ${this.b}
        - Sum of lengths of all sides: ${this.length()}
        - Area: ${this.square()}`);
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Rhombus is a geometric figure with all sides equal and opposite angles equal.");
    }

    length() {
        return this.a * 4;
    }

    square() {
        return (this.a ** 2) * Math.sin(Math.PI * this.alpha / 180);
    }

    info() {
        console.log(`Rhombus:
        - Side length: ${this.a}
        - Obtuse angle: ${this.alpha} degrees
        - Acute angle: ${this.beta} degrees
        - Sum of lengths of all sides: ${this.length()}
        - Area: ${this.square()}`);
    }
}

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }

    static help() {
        console.log("Parallelogram is a geometric figure with opposite sides parallel and equal opposite angles.");
    }

    info() {
        console.log(`Parallelogram:
        - Length: ${this.a}
        - Width: ${this.b}
        - Obtuse angle: ${this.alpha} degrees
        - Acute angle: ${this.beta} degrees
        - Sum of lengths of all sides: ${this.length()}
        - Area: ${this.square()}`);
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

const squareObj = new Square(5);
squareObj.info();

const rectangleObj = new Rectangle(4, 6);
rectangleObj.info();

const rhombusObj = new Rhombus(7, 60, 120);
rhombusObj.info();

const parallelogramObj = new Parallelogram(5, 8, 70, 110);
parallelogramObj.info();

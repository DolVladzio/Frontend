// 1.2.4
function Triangular(a = 3, b = 4, c = 5) {
    return { a, b, c };
}

const defaultTriangle = Triangular();
const triangle1 = Triangular(6, 8, 10);
const triangle2 = Triangular(7, 24, 25);

console.log(defaultTriangle);
console.log(triangle1);
console.log(triangle2);

// 1.2.5
function PiMultiplier(number) {
    return () => Math.PI * number;
}

// 1.2.6
const multiplyBy2Pi = PiMultiplier(2);
const multiplyBy1_5Pi = PiMultiplier(1.5);
const divideBy2Pi = PiMultiplier(0.5);

console.log(multiplyBy2Pi());
console.log(multiplyBy1_5Pi());
console.log(divideBy2Pi());

// 1.2.7
function Painter(color) {
    return (obj) => {
        if (obj.type !== undefined) {
            console.log(`Color: ${color}, Type: ${obj.type}`);
        } else {
            console.log("No 'type' property occurred!");
        }
    };
}

// 1.2.8
const PaintBlue = Painter('blue');
const PaintRed = Painter('red');
const PaintYellow = Painter('yellow');

// 1.2.9
const object1 = { maxSpeed: 280 };
const object2 = { type: 'Truck', maxSpeed: 180 };
const object3 = { type: 'Sportcar', avgSpeed: 90, color: 'purple' };

PaintBlue(object1);
PaintRed(object2);
PaintYellow(object3);

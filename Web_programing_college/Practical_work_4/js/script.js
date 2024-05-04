function MyMathPower(base, exponent) {
    if (exponent === 0) {
        console.log(`The ${exponent}th power of ${base} equals 1`);
        return;
    }

    let result = 1;

    for (let i = 0; i < Math.abs(exponent); i++) {
        result *= base;
    }

    if (exponent < 0) {
        result = 1 / result;
    }

    console.log(`The ${exponent}th power of ${base} equals ${result}`);
}

function MyMathPowerDefault1(base, exponent) {
    base = base || 2;
    exponent = exponent || 3;
    MyMathPower(base, exponent);
}

function MyMathPowerDefault2(base = 2, exponent = 3) {
    MyMathPower(base, exponent);
}

function TestAllFunctions() {
    console.log("Calling MyMathPowerDefault1 with both parameters provided:");
    MyMathPowerDefault1(4, 2);

    console.log("\nCalling MyMathPowerDefault1 with only base provided:");
    MyMathPowerDefault1(4);

    console.log("\nCalling MyMathPowerDefault1 with only exponent provided:");
    MyMathPowerDefault1(undefined, 2);

    console.log("\nCalling MyMathPowerDefault1 with no parameters provided:");
    MyMathPowerDefault1();

    console.log("\nCalling MyMathPowerDefault2 with both parameters provided:");
    MyMathPowerDefault2(5, 3);

    console.log("\nCalling MyMathPowerDefault2 with only base provided:");
    MyMathPowerDefault2(5);

    console.log("\nCalling MyMathPowerDefault2 with only exponent provided:");
    MyMathPowerDefault2(undefined, 4);

    console.log("\nCalling MyMathPowerDefault2 with no parameters provided:");
    MyMathPowerDefault2();
}

TestAllFunctions();

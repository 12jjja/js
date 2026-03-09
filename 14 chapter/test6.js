let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

function Calculator(){
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    }

    this.calculate = function(str){
        let arr = str.split(" ");
        let left = +arr[0];
        let right = +arr[2];
        let symbol = arr[1];
        return this.methods[symbol](left, right);
    }
    this.addMethod = function(name, func){
        this.methods[name] = func;
    }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
function Calculator(){
    this.result = 0;
}
Calculator.prototype.init = function(a){
    this.result = Number(a);
    return this;
}
Calculator.prototype.add = function(a){
    this.result += Number(a);
    return this;
}
Calculator.prototype.sub = function(a){
    this.result -= Number(a);
    return this;
}
Calculator.prototype.mul = function(a){
    this.result *= Number(a);
    return this;
}
Calculator.prototype.div = function(a){
    this.result /= Number(a);
    return this;
}

Calculator.prototype.alert = function(){
    let timeId = setTimeout(alert, 5000, this.result);
}


/*
calc = new Calculator();

console.log(calc.init(2).add(2).mul(3).div(4).sub(2).add(100.2).result);
calc.alert();

*/
let Number = 10;
let BigInt = (9007199254740991n);
let String = "Hello World";
let Boolean = true;
let MyNull = null;
let MyUndefined;
let Object = { objectName: "Object Name" };
let MySymbol = Symbol();
let MyFunction = new Function('a', 'b', 'return a + b');
alert(
    'Number is ' +typeof(Number) + '\n' +
    'BigInt is ' +typeof(BigInt) + '\n' +
    'String is ' +typeof(String) + '\n' +
    'Boolean is ' +typeof(Boolean) + '\n' +
    'MyNull is ' +typeof(MyNull) + '\n' +
    'MyUndefined is ' +typeof(MyUndefined) + '\n' +
    'MySymbol is ' + typeof(Symbol) + '\n' +
    'MyFunction is ' +typeof(MyFunction) + '\n'
);
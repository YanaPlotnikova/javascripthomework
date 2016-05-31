function D(a, b, c) {
    var d = (b*b)-4*a*c; 
    return d;
}

function xxPositDiscr(a, b, c){
    var d = (b*b)-4*a*c; 
    var x1 = (-b + Math.sqrt(d))/(2*a);
    var x2 = (-b - Math.sqrt(d))/(2*a);
    return [x1, x2];
}

function xxZeroDiscr(a, b, c){
    var x = (-b)/(2*a);
    return x;
}

function xxNegatDiscr(a, b, c){
    var d = (b*b)-4*a*c; 
    var x1 = String ((-b)) + '/' + String((2*a)) + ' + ' +  String(Math.sqrt(-d)) + 'i' + '/' + String((2*a));
    var num3 = (-b)/(2*a);
    var num4 = Math.sqrt(-d)/(2*a);
    var x2 = String(num3.toFixed(2)) + ' - ' + String(num4.toFixed(2)) + 'i';
    return [x1, x2];
}

var a = Number(prompt('Enter the the coefficient A'));
var b = Number(prompt('Enter the the coefficient B'));
var c = Number(prompt('Enter the the coefficient C'));

var dicr = D(a, b, c);
if (dicr > 0) {
    var array = xxPositDiscr(a, b, c);
    var message = 'The roots of equation: x1 = '+ array[0] + ', x2 = '+ array[1];
    alert(message);
} else if ( dicr === 0) {
    var message = 'The roots of equation: x1,2 = '+ xxZeroDiscr(a, b, c);
    alert(message);
} else if ( dicr < 0) {
    var array = xxNegatDiscr(a, b, c);
    var message = 'The roots of equation: x1 = '+ array[0] + ', x2 = '+ array[1] + ' \n Where i is the square root of -1';
    alert(message);
}
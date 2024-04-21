function somar(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return "favor informar somente números"
    }
    return num1 + num2
}
function sub(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return "favor informar somente números"
    }
    return num1 - num2
}
function mult(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return "favor informar somente números"
    }
    return num1 * num2
}
function div(num1, num2) {
    if(isNaN(num1) || isNaN(num2)){
        return "favor informar somente números"
    }
    if(num2 == 0){
        return 0
    }
    return num1 / num2
}

module.exports = { somar, sub, mult, div }
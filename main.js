function multiply(arg1){
    return function(arg2){
        return arg1 * arg2;
    };
}

const userNum = +prompt("Введіть число")
if(isNaN(userNum)){
    console.log("Введіть будь ласка коректне число.")
} else {
    const multiplyNum = multiply(userNum);

    console.log(multiplyNum(4));
    console.log(multiplyNum(5));
    console.log(multiplyNum(6));
    console.log(multiplyNum(7));
}
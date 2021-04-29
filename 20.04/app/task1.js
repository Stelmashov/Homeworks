function qCalc(stroka){
    const mathExpr = stroka.replace(/[^\+|\-|\*|\|\(|\)/]+/g, stroka =>
    qDecrypt(stroka));
    console.log("mathExpr = "+mathExpr);
    const calcMathExpr = eval(mathExpr).toString();
    console.log("calcMathExpr = "+calcMathExpr);
  
    return Result(calcMathExpr);
}
function Result(stroka){
    const result = stroka.replace(/\d/g, stroka =>
         `${'@'.repeat(+stroka)}~`).replace(/@~$/, '@');

    console.log("result = "+ result);
    return result;
}
function qDecrypt(stroka){
    const decrypt = stroka.replace(/~{2,}/g, stroka =>
         `~${'0'.repeat(stroka.length - 1)}`).replace(/@+/g, stroka =>
            stroka.length).replace(/~/g, '');
             
    console.log("decrypt = "+ +decrypt);
    return +decrypt;
}
function qInput(){
    let stroka;
    do{ 
        stroka = prompt("Введите строку");  
    }while(string == "");

    console.log("string = "+ stroka); 
    console.log(qCalc(stroka));
}
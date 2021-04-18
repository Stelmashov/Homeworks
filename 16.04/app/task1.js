function task1(){
    let string1 = IsStringCorrect();
    string1 = string1.split(" ");
    string1 = Sort(string1);
    console.log(string1);
}
function IsStringCorrect(){
    let string;
    do{
    string = prompt("Введите строку","");
    }while(string == "");
    return string;
}
function Sort(string1){
    let count = 1;
    let string2 = new Array;
    do{
        for(let i = 0; i < string1.length; i++){
            if (string1[i].search(count) != -1) string2[count - 1] = string1[i];
        }
        count++;
    }while(string1.length != string2.length);
    return string2;
}

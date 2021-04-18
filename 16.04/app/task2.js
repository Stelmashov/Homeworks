var player = 1;
let mas = CreateMatrix();
function task2(btn,position){
    if (player % 2 != 0) {
        document.getElementById(btn).value = "X";
        document.getElementById(btn).disabled = "disabled";
        switch(position){
            case 1:{mas[0][0] = 1;break};
            case 2:{mas[0][1] = 1;break};
            case 3:{mas[0][2] = 1;break};
            case 4:{mas[1][0] = 1;break};
            case 5:{mas[1][1] = 1;break};
            case 6:{mas[1][2] = 1;break};
            case 7:{mas[2][0] = 1;break};
            case 8:{mas[2][1] = 1;break};
            case 9:{mas[2][2] = 1;break};
        }
        }
        else{
        document.getElementById(btn).value = "O";
        document.getElementById(btn).disabled = "disabled";
        switch(position){
            case 1:{mas[0][0] = 2;break};
            case 2:{mas[0][1] = 2;break};
            case 3:{mas[0][2] = 2;break};
            case 4:{mas[1][0] = 2;break};
            case 5:{mas[1][1] = 2;break};
            case 6:{mas[1][2] = 2;break};
            case 7:{mas[2][0] = 2;break};
            case 8:{mas[2][1] = 2;break};
            case 9:{mas[2][2] = 2;break};
        }
    }
    player += 1;
    if (checkMatrix(mas) == 1) {
        alert("Победа Х!");
        Reset();
        mas = CreateMatrix();
        player = 1;
    };
    if (checkMatrix(mas) == 2) {
        alert("Победа O!");
        Reset();
        mas = CreateMatrix();
        player = 1;
    };
    if (checkMatrix(mas) == 0) {
        alert("Ничья!");
        Reset();
        mas = CreateMatrix();
        player = 1;
    };
    console.log(checkMatrix(mas));
}
function CreateMatrix(){
    let mas =  [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];
    return mas;
}
function checkMatrix(mas){
    for(let i = 0; i < 3; i++){
        if(mas[i][0] == 1 && mas[i][1] == 1 && mas[i][2] == 1) return 1;
        if(mas[i][0] == 2 && mas[i][1] == 2 && mas[i][2] == 2) return 2;
    }
    for(let i = 0; i < 3; i++){
        if(mas[0][i] == 1 && mas[1][i] == 1 && mas[2][i] == 1) return 1;
        if(mas[0][i] == 2 && mas[1][i] == 2 && mas[2][i] == 2) return 2;
    }

    if(mas[0][0] == 1 && mas[1][1] == 1 && mas[2][2] == 1) return 1;
    if(mas[0][0] == 2 && mas[1][1] == 2 && mas[2][2] == 2) return 2;

    if(mas[2][0] == 1 && mas[1][1] == 1 && mas[0][2] == 1) return 1;
    if(mas[2][0] == 2 && mas[1][1] == 2 && mas[0][2] == 2) return 2;

    if(mas[0][0] == 0 || mas[0][1] == 0 || mas[0][2] == 0 ||
        mas[1][0] == 0 || mas[1][1] == 0 || mas[1][2] == 0 ||
        mas[2][0] == 0 || mas[2][1] == 0 || mas[2][2] == 0 ) return -1;  

    return 0;
}
function Reset(){
document.getElementById("btn1").value = "";
document.getElementById("btn2").value = "";
document.getElementById("btn3").value = "";
document.getElementById("btn4").value = "";
document.getElementById("btn5").value = "";
document.getElementById("btn6").value = "";
document.getElementById("btn7").value = "";
document.getElementById("btn8").value = "";
document.getElementById("btn9").value = "";
document.getElementById("btn1").disabled = "";
document.getElementById("btn2").disabled = "";
document.getElementById("btn3").disabled = "";
document.getElementById("btn4").disabled = "";
document.getElementById("btn5").disabled = "";
document.getElementById("btn6").disabled = "";
document.getElementById("btn7").disabled = "";
document.getElementById("btn8").disabled = "";
document.getElementById("btn9").disabled = "";
}
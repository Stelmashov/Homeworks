//'XXX', 3, 'XXXXX', 6, 'XXXXXX', 9,
//'XXX', 3, 'XXXXXX', 6, 'X', 2, 'XXXXXX', 8, 'X', 3, 'XXX', 1
function task3(){
    let have = 0; //сколько взяли
    let LeftToGo = 0; // Сколько осталось взять
    let array = new Array;//Массив ответов 
    let xChair = 0; //Занятых стульев
    let ExistingChair = 0; // Сколько стульев в комнате вообще
    let need = prompt("Введите сколько стульев нужно (не больше 8)","")
    let meetingRooms = prompt("Введите строку","");
    let meetingRooms2 = meetingRooms.replace(/[,.""''()?!-]/g, '');
    meetingRooms = meetingRooms2.split(" ");
    let length = meetingRooms.length;
    for(let i = 0; i < length; i++){
        if( i % 2 == 0){
            xChair = meetingRooms[i].length;
        }
        else{
            ExistingChair = Number(meetingRooms[i]);
        }
        if(xChair != 0 && ExistingChair != 0){
            if(ExistingChair - xChair >= 0 && need - have >= 0){
                LeftToGo = need - have;
                console.log("Сколько осталось взять " + LeftToGo);
                if(LeftToGo > (ExistingChair - xChair)){
                    have += ExistingChair - xChair;
                    array.push(ExistingChair - xChair);
                    if(have != need){
                        console.log('Not enough!');
                    }
                }
                else{
                    have += ExistingChair - xChair;
                    array.push((ExistingChair - xChair)-((ExistingChair - xChair) - LeftToGo));
                    console.log('Game On');
                }
                console.log(array);
            }
            xChair = 0;
            ExistingChair = 0;
        }
    }
    //console.log(meetingRooms);
}
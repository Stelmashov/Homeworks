function Create2DMas(rows)
{
    let mas = [];
    for (var i=0;i<rows;i++) 
    {
        mas[i] = [];
    }
    return mas;
}
function Vvod2DMas(rows,length)    
{
    let mas = Create2DMas(rows);
    for (let i = 0; i < rows; i++)
    {
        for (let j = 0; j < length; j++)
        {
            mas[i][j] = Number(prompt("Введіть число"+i+"й рядкок "+j+"й стовбць"));
        }  
    }
    return mas;
}
function sumMin()
{
    let sum_min = 0;
    let rows;
    let columns;
    do{
        rows = prompt("Введіть кількість рядків 2D масиву",0);
    }while(rows <= 0)
    do{
        columns  = prompt("Введіть кількість стовбців 2D масиву",0);
    }while(columns <= 0)
    let mas = Vvod2DMas(rows,columns);
    console.log(mas);
    let min = mas[0][0];
    for (let i = 0; i < rows; i++)
    {
        min = mas[i][0];
        for (let j = 0; j < columns; j++)
        {
            console.log("Минимум : Елемент " + min + " > " + mas[i][j] );
            console.log(min > mas[i][j])
            if (min > mas[i][j])
            {
                min = mas[i][j];
            }
        }
        sum_min += Number(min);
    }
    alert(sum_min);
}
function twoOldestAges()
{
    let array = new Array
    let length; 
    do{
        length = Number(prompt("Введите кол-во массива",0));
    }while(length <= 0)
    let a;
    let b;
    for(let i = 0; i < length; i++)
    {
        array[i] = Number(prompt("Введите "+ (i+1) +" елемент массива"));
    }
    a = array[0];
    b = array[0];
    for(let i = 0; i < length; i++)
    {
        if(array[i] > a)
        {
            a = array[i];
        }
    }
    for(let i = 0; i < length; i++)
    {
       // console.log(array[i],a,b)
        //console.log(array[i] > b && b != a || b < a);
        if(b < array[i] && array[i] != a)
        {
            b = array[i];
        }
    }
    console.log(array);
    console.log(a);
    console.log(b);
}
function task3()
{
    let Phrase;
    do{
        Phrase = prompt("Введите предложение.");
    }while(Phrase == "")
    let array = Phrase.replace(/[,.""''()?!-]/g, '');   
    Phrase = array.split(" ");
    let min_word = Phrase[0].length;
    for(let i = 0; i < Phrase.length; i++)
    {
        if(Phrase[i].length < min_word)
        {
            min_word = Phrase[i].length;
        }
    }
    alert(min_word);
}
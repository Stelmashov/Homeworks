/*Задача 1*/
function task1()
    {
        let L;
        let W;
        let H;
        do
            {
                L = prompt("Введите длинну (не больше 1000)");
                W = prompt("Введите ширину (не больше 1000)");
                H = prompt("Введите высоту (не больше 1000)");
            }while(L >= 1000 || W >= 1000 || H >= 1000)
        const V_banka = 16;
        let a = L * H;
        let b = W * H;
        let c = (a + b) * 2;
        let answer_1 = c / V_banka;
        alert("На одну комнату нужно " + answer_1 + " банок краски");
    }
/*Задача 2*/
function task2()
{
let A = new Array();
let B = new Array();
for(let i=0;i<=2;i++)
    {
        do
            {
                A[i] = prompt("Введите цену А"+(i+1)+" (не больше 100)")
            }while(A[i] >= 100)
    }
for(let i=0;i<=2;i++)
    {
        do
            {
                B[i] = prompt("Введите цену B"+(i+1)+" (не больше 100)")
            }while(B[i] >= 100)
    }
for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2-i; j++) {
       if (A[j] < A[j+1]) {
          let max = A[j];
          A[j] = A[j+1];10
          A[j+1] = max;
       }
    }  
}
for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2-i; j++) {
       if (B[j] < B[j+1]) {
          let max = B[j];
          B[j] = B[j+1];
          B[j+1] = max;
       }
    }  
}
let answer_2 = 0;
for(let i=0;i<=2;i++)
    {
        answer_2 += A[i] * B[i];
    }
alert("В наилучшем раскладе предприниматели получат "+answer_2+" рублей")
}
/*Задача 3*/
function task3()
{
let Num;
do
{
    Num = prompt();
}while(Num >= 999999)
let str_num = Num + "";
let u = 0;
let o = 0;
for(let i=0;i<3;i++)
    {
        u += Number(str_num[i]);
    }
for(let i=3;i<6;i++)
    {
        o += Number(str_num[i]);
    }
if(o == u)
    {
        alert("YES")
    }
else
    {
        alert("NO")
    }
}
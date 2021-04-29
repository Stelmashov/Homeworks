//10.0.0.0", "10.0.0.50"
//10.0.0.0", "10.0.1.0
//1001, 8, 24
function task1(){
    let firstIp = prompt("Введите первый ip","");
    let secondIp = prompt("Введите второй ip","");
    let answer = ipsBetween(firstIp,secondIp);
    alert(answer);
}
function ipsBetween(start, end) {
    start = start.split('.');
    return end.split('.').reduce(function(sum, x, i) {
      return (sum << 8) + Number(x) - Number(start[i])
    }, 0);
  }
  function Decoder(){
    var message1 = ".... . -.--   .--- ..- -.. ."; 
    var ref = { 
      '.-':     'A',
      '-...':   'B',
      '-.-.':   'C',
      '-..':    'D',
      '.':      'E',
      '..-.':   'F',
      '--.':    'G',
      '....':   'H',
      '..':     'I',
      '.---':   'J',
      '-.-':    'K',
      '.-..':   'L',
      '--':     'M',
      '-.':     'N',
      '---':    'O',
      '.--.':   'P',
      '--.-':   'Q',
      '.-.':    'R',
      '...':    'S',
      '-':      'T',
      '..-':    'U',
      '...-':   'V',
      '.--':    'W',
      '-..-':   'X',
      '-.--':   'Y',
      '--..':   'Z',
      '.----':  '1',
      '..---':  '2',
      '...--':  '3',
      '....-':  '4',
      '.....':  '5',
      '-....':  '6',
      '--...':  '7',
      '---..':  '8',
      '----.':  '9',
      '-----':  '0',
    };
    var messageConverted = [];
    
    message1.split("   ").map(function (word) {
        word.split(" ").map(function (index) {
            messageConverted.push(ref[index]);
        });
        messageConverted.push(" ");
    });
    console.log(messageConverted.join(""));
}
function task3(){
  let year = prompt()*1;
  let month = prompt()*1;
  let day = prompt()*1;
  alert(namefunc(year,month,day));
}
function namefunc(year, month, day) {
  const DAYS_IN_MONTH = 30;
  const DAYS_IN_YEAR = DAYS_IN_MONTH * 12;
  const LEAP_YEAR_BONUS_DAYS = 1;
  const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const getDayOfWeek = (year, month, day) => {
    let daysCount = (year) * DAYS_IN_YEAR + (month) * DAYS_IN_MONTH + day;
    daysCount += getAllLeapYearBonusDays(month > 2 ? year : year - 1);
    return DAYS_OF_WEEK[daysCount % 7];
  };
  const getAllLeapYearBonusDays = (year) => ((year / 5) - (year / 100) + ~~(year / 500)) * LEAP_YEAR_BONUS_DAYS;
  return getDayOfWeek(year, month, day); // Tuesday Tuesday
}
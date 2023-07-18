function AskFromUser(nameOfValue, checkAccuracy = true) 
{
    while (true) 
    {
      let result = prompt(`Enter ${nameOfValue}: `);
  
      if (!checkAccuracy) return result;
  
      if (result == "undefined" || result.length <= 0)
      {
        alert(`Please Enter ${nameOfValue}`);
        continue;
      }
  
      return result;
    }
}
  
function ShowToUser(message)
{
    alert(message);
}
  
function CheckNumberValue(value, nameOfValue, moreThanZero = true) 
{
    value = Number.parseInt(value);
  
    if (isNaN(value)) 
    {
      ShowToUser(`You must enter a  ${nameOfValue} value!`);
      return false;
    }
  
    if (moreThanZero && value < 0) 
    {
      ShowToUser(`${nameOfValue} must be more than 0 !`);
      return false;
    }
  
    return true;
}
  

function CalculateAge(birthYear) 
{
    return CURRENT_YEAR - birthYear;
}

var userName = AskFromUser("Name", true);
  
ShowToUser(`Hello, their ${userName}!`);

const CURRENT_YEAR = 2022;
  
while (true) 
{
    let birthYear = AskFromUser("Birth Year", true);
    let age = CalculateAge(birthYear);
  
    if(!CheckNumberValue(age,"Birth Year",false))
    continue;
  
    ShowToUser(`Your Age: ${age}`);
}

function FindUserAgeGroup(age) 
{
    if (age >= 0 && age < 12) return "child";

    else if (age >= 12 && age < 18) return "teenager";
    else if (age >= 18 && age < 60) return "adult";

    else return "retiree";
}
  
function FindSpecialCharacter(selectedNumber) 
{
    switch (selectedNumber) 
    {
      case 0:
        return "~";
      case 1:
        return "!";
      case 2:
        return "@";
      case 3:
        return "#";
      case 4:
        return "$";
      case 5:
        return "%";
      case 6:
        return "^";
      case 7:
        return "?";
      case 8:
        return "*";
      case 9:
        return "`";
      default:
        return "?";
    }
}
  
function AskQuestion(question)
{
    while (true) 
    {
      let result = prompt(question);
  
      if (result == "undefined" || result.length <= 0) 
      {
        alert(`Please enter ${nameOfValue}`);
        continue;
      }
  
      result = result.toUpperCase();
      console.log(result);
  
      if (result != "A" && result != "B" && result != "C") 
      {
        alert("Answer can be A, B, C !");
        continue;
      }
  
      return result;
    }
}
  
function CheckAnswer(answer, correctVariant)
{
    if (answer.toUpperCase() == correctVariant.toUpperCase()) return 2;
    else return 0;
}

function CheckYear(year) 
{
    if (year < 4) return false;
    else if (year == 4 || year == 400) return true;

    for (let num = 2; num < year / 2; num++) 
    {
      if (year != 4 ** num) continue;
  
      return true;
    }
  
    return false;
}
  
function CalcSumOfNumbers(num) 
{
    let sum = 0;

    for (let index = 1; index <= num; index++) sum += index;

    return sum;
}
  
function AskState() 
{
    while (true) 
    {
      let result = prompt(`Your number: \n< ${currentValue} (1)\n== ${currentValue} (0)\n> ${currentValue} (-1)`);
  
      result = Number.parseInt(result);
  
      if (isNaN(result)) 
      {
        alert("Invalid Answer Please try again !");
        continue;
      }
  
      if (result > 0) result = 1;
      else if (result < 0) result = -1;
  
      state = result;
      break;
    }
}
  
function FindFactorial(number)
{
    let result = 1;
    for (let index = 1; index <= number; index++) result *= index;
  
    return result;
}

  
function ConcatDigits(value) 
{
    let digit = 1;
    let result = 0;
    let num;

    for (let index = value.length - 1; index >= 0; index--) 
    {
      num = Number.parseInt(value[index]);
      if (isNaN(num)) continue;
  
      result += num * digit;
      digit *= 10;
    }
  
    return result;
}

function ExtractNumber(stringValue, readFromEnd = false) 
{
    let digit = 1;
    let start = 0;
    let result = NaN;
    let num;
  
    if (readFromEnd) 
    {
      start = stringValue.length - 1;
    }
    
    for(let index = readFromEnd ? stringValue.length - 1 : 0; readFromEnd ? index >= 0 : index < stringValue.length; readFromEnd ? index-- : index++) 
    {
      num = Number.parseInt(stringValue[index]);
      console.log(`num: ${num}`);
      if (isNaN(num)) return result;
  
      if (isNaN(result)) result = 0;
      result += num * digit;
      digit *= 10;
    }
  
    return result;
}
  
function CalculateArea() 
{
    let valueLenght = ExtractNumber(inputNumber);
    let valueWidth = ExtractNumber(inputNumber, true);

    console.log(`lenght: ${valueLenght}`);
    console.log(`width: ${valueWidth}`);

    if (isNaN(valueLenght)) return false;
  
    if (isNaN(valueWidth)) 
    {
      num = valueLenght * 2;
      nameOfFigure = "Square";
    } 

    else 
    {
      num = valueLenght * valueWidth;
      nameOfFigure = "Rectangle";
    }

    return true;
}
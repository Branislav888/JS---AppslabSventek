let num1 = 10;
let num2 = 5;
let result = num1 + num2;
console.log("Result:", result);

function add (a,b)
{
    return a + b;

}

let addResult = add(10, 5);
console.log ("Addition", addResult);

function calculate(a, b, operator)
{
    switch (options)
    {
        case "+":
        return a + b;

        case "-":
        return a - b;

        case "*":
        return a * b;

        case "/":
            if (a === 0 || b === 0)
                return a / b;
            else 
            {
                return "Cant be devided by 0";
            }

        default:
            return "Unvalid";
    }
}

function handelCalculate()
{
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let result = calculate(num1, num2, operator);

    document.getElementById("result").textContent = result;

}


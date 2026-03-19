function calculate(a, b, operator)
{
    if ( operator === "+")
    {
        return a + b;
    }
    else if ( operator === "-")
    {
        return a - b;
    }
    else if ( operator === "*")
    {
        return a * b;
    }
    else if ( operator === "/")
    {
        return a / b;
    }
    else
    {
        return "Invalid operator"
    }
}
function handelCalculate()
{
    let num1 = Number(document.getElementById("num1"));
    let num2 = Number(document.getElementById("num2"));
    let operator = document.getElementById("operator");

    let result = calculate(num1, num2, operator);

    document.getElementById("result").textContent = result;

}
let display = document.querySelector(".rslt h1");
let buttons = document.querySelectorAll(".btn");
let historyList = document.querySelector(".history-list"); 
let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", function() 
    {
        let value = this.innerText;

        if (value === "=") 
        {
            if(expression === "") return; 

            let originalExpression = expression;
            let result = eval(expression);
            display.innerText = result;

            let p = document.createElement("p");
            p.innerText = originalExpression + " = " + result;
            historyList.appendChild(p);

            historyList.scrollTop = historyList.scrollHeight;
            
            expression = result.toString(); 
            } 
            else if (value === "C") 
            {
                expression = "";
                display.innerText = "";
            } 
            else 
            {
                expression += value;
                display.innerText = expression;
            }
    });
});
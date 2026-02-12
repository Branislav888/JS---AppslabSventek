let age = 19;

let haveATicket = false;

if(age >= 18 && haveATicket) //musi byt splnena obě podmínky, aby se vykonal tento blok kódu
{
    console.log("Can enter the cinema");
}
else
{
    console.log("Cannot enter the cinema");
}

if(age >= 18 || haveATicket) //musi byt splnena alespoň jedna podmínka, aby se vykonal tento blok kódu
{
    console.log("Can enter the cinema");
}
else
{
    console.log("Cannot enter the cinema");
}


let day = "Monday";

if(age >= 18 && haveATicket && day === "Monday") //musi být splněna všechna tři podmínky, aby se vykonal tento blok kódu
{
    console.log("Can enter the cinema");
}
else
{
    console.log("Cannot enter the cinema");
}
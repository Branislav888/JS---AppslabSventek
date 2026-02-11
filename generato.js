const secretNumber = Math.floor(Math.random() * 100) + 1; //nahod cislo od 1 do 10

let geuss = 0; //pocet pokusov
let attempts = 3; //pocet pokusov

const input = prompt("Zadejte číslo od 1 do 100:"); //ziskani vstupu od uzivatele
geuss = Number(input); //prevod vstupu na cislo

for (let i = 1; i <= attempts; i++) 
{
    if(secretNumber === geuss) 
    {
        alert("Gratulujeme! Uhadli jste správné číslo " + secretNumber + " na první pokus!");
        break;
    }
    if (i<attempts)
    {
        if (geuss < secretNumber)
        {
            let hint = "";
            if ( secretNumber > 50)
            {
                hint = " (nápověda: číslo je větší než 50)";
            }
            else
            {
                hint = " (nápověda: číslo je menší nebo rovno 50)";
            }
            alert("Špatně! Vaše číslo je příliš nízké." + hint);
            
        }
        if (geuss > secretNumber)
        {
            let hint = "";
            if ( secretNumber > 50)
            {
                hint = " (nápověda: číslo je větší než 50)";
            }
            else
            {
                hint = " (nápověda: číslo je menší nebo rovno 50)";
            }
            alert("Špatně! Vaše číslo je příliš vysoké." + hint);
        }
    }
    

}
if (secretNumber !== geuss)
{
    alert("Hra skončila! Správné číslo bylo " + secretNumber + ".");
}
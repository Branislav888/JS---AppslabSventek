// Uloha 1
for(let i = 1; i<=10; i++)
{
    console.log(i);
}
for(let i = 5; i<=15; i++)
{
    console.log(i);
}
for(let i = 10; i>=1; i--)
{
    console.log(i);
}
for(let i = 1; i<=20; i++)
{
    console.log(i);
}
for(let i = 1; i<=5; i++)
{
    console.log("JavaScript");
}

//Uloha 2
for (let i = 0; i <= 20; i += 2) 
{
    console.log(i);
}

for (let i = 1; i <= 19; i += 2) 
{
    console.log(i);
}

for (let i = 0; i <= 20; i += 2) 
{
    console.log(i);
}

for (let i = 20; i >= 0; i -= 2)
{
    console.log(i);
}

for (let i = 1; i <= 100; i += 10) 
{
    console.log(i);
}

//Uloha 3
for(let i = 1; i<=20; i++)
{
    if(i % 3===0)
    {
        console.log(i);
    }
}
for(let i = 1; i<=30; i++)
{
    if(i => 10)
    {
        console.log(i);
    }
}
for(let i = 1; i<=50; i++)
{
    if(i % 2===0)
    {
        console.log(i);
    }
}
for (let i = 1; i<=20; i++) 
{
    if (i % 5 !== 0) 
    {
        console.log(i);
    }
}
for (let i = 1; i<= 100; i++) 
{
    if (i < 50 && i % 7 === 0) 
    {
        console.log(i);
    }
}

//Uloha 4
let sum = 0;
for(let i = 1; i<=10; i++)
{
    sum += i;
    console.log(i)
}
for (let i = 1; i <= 20; i++) 
{
    if (i % 2 === 0) 
    {
        sum += i;
        console.log(sum);
    }
}
for(let i = 1; i<=100; i++)
{
    if(i % 7===0)
    {
        sum += i;
        console.log(i)
    }
}
for (let i = 1; i <= 50; i++) 
{
    if (i % 6 === 0) 
    {
        sum = i;
        console.log(sum);
    }
}
for(let i = 1; i<=5; i++)
{
    sum *= i;
    console.log(i)
}

// Bonus 
for (let i = 1; i<= 5; i++) 
{
    let pridat = "";

    for (let j = 1; j<= i; j++) 
    {
        pridat += j + " ";
    }
    console.log(pridat);
}



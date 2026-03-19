/*
//1
let meals = ["rice","chicken","pasta","soup","pancakes"];
console.log(meals);

//2
console.log("fisrt:" + meals[0] + "last:" + meals[meals.length - 1])
//3
meals.push("bread");
console.log(meals);
//4
meals.shift();
console.log(meals);
//5
console.log(meals.length);
//6
for (let meal of meals) 
{
    console.log(meal);
}

//1 
const numbers = [4, 8, 15, 16, 23, 42];

//1A
console.log("_____Uloha-1A_____")
for (const number of numbers) 
{
    console.log(number);
}

//1B
console.log("_____Uloha-1B_____")
let i = 0;

while (i < numbers.length) 
{
    console.log(numbers[i]);
    i++;
}

//2
console.log("_____Uloha-2_____")
for (let i = 0; i < numbers.length; i++) 
{
    console.log(`index ${i}:` , numbers[i]);
}

//3
console.log("_____Uloha-3_____")
for (let i = numbers.length - 1; i >= 0; i--) 
{
    console.log(numbers[i]);
}

//4
console.log("_____Uloha-4_____")
let sum = 0;
for (const number of numbers)
{
    sum += number;
}
console.log(sum);

console.log("_____Uloha-5_____")
//5
let count = 0;
for(const number of numbers)
{
    if (number % 2 === 0)
    {
        count++;
    }
}
console.log(count);

//6
console.log("_____Uloha-6_____")
let max = numbers[0];
let min = numbers[0];
for(const number of numbers)
{
    if(number > max)
    {
        max = number;
    }
    if(number < min)
    {
        min = number;
    }
}
console.log(max);
console.log(min);*/


let numbers = [];

for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log(numbers);

numbers.sort(function(a, b) {
    return a - b;
});

console.log(numbers);




let fruit1 = "apple";
let fruit2 = "banana";
let fruit3 = "mango";

let fruits = ["apple","banana","mango"];

console.log(fruits[1]);

fruits[1] = "yellow";

console.log(fruits[1]);

console.log(fruits.length); //lenght rata pocet prvkov
console.log(fruits[fruits.length - 1]);

        fruits.push("orange");
console.log(fruits);
        fruits.pop();
console.log(fruits);
        fruits.shift();
console.log(fruits);
        fruits.unshift("pear");
console.log(fruits);

for(let fruit of fruits)
{
    console.log(fruit);
}

let i = 0;
while (i <= fruits.length - 1)
{
    console.log(fruits [i]);
    i++;
}

let mixed = ["Branislav" , 16, true, null]
console.log(mixed);

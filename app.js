const a = 5;
let b= 5;
console.log(5+5);

const dayOfWeek = ["mon","tue","wed","thu","fri"];
console.log(dayOfWeek);

//Get Item from Array
console.log(dayOfWeek[3]);

//Add one more day to the array
dayOfWeek.push("sat");
console.log(dayOfWeek);

const player ={
    name: "sae",
    points : 10,
    fat : false
};

console.log(player);
console.log(player.fat);
console.log(player["name"]);
console.log(player.name);

function sayHello(){
    console.log("hello!");
}

sayHello();
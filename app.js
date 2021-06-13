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

const coculator = {
    add : function(a , b){
        console.log(a+b);
    },
    minus : function(a , b){
        console.log(a-b);
    },
    division : function(a , b){
        console.log(a/b);
    },
    fowerOf : function(a,b){
        console.log(a**b);
    }
}

coculator.add(1,5);
coculator.minus(5,12);
coculator.division(5,2);
coculator.fowerOf(5,2);
// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE
var fortune = 1;

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
var low = "You have low fortune";
var avg = "You have average fortune";
var luck = "You have good fortune";
var out = "Your fortune cannot be read";


if (fortune >= 0 && fortune <= 3){
    console.log(low)
};

if (fortune > 3 && fortune <= 7){
    console.log(avg)
};

if (fortune > 7 && fortune <= 10){
    console.log(luck)
 };

 if (fortune < 0 || fortune >10){
    console.log(out)
 };



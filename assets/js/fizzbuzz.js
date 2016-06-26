function fizz_buzz(){
    for(var i = 1; i <=100; i++){
        if(i % 3 === 0 && i % 5 === 0) {
            console.log(i+' fizzbuzz');
        } else if(i % 3 === 0) {
            console.log(i+' fizz');
        } else if(i % 5 ===0) {
            console.log(i+' buzz');
        } else {
            console.log(i);
        }
    }
} fizz_buzz();

// function fizz_buzz(number) {
//   if (number <= 0) {
//     return new Error("Try again your number must be greater than 0");
//   else if (nummber % 3 == 0) {
//       obj.Message = "fizz"; }
//   else if (number % 5 == 0) {
//       obj,Message = "buzz"; }
//   else if (nummber % 15 == 0) {
//       obj.Message = "fizzbuzz"; }
//   else {
//     return = number;
//   }
// };

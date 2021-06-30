// create a loop
// set it to print "fizz" every 3 numbers
// set to print "buzz" every 5 numbers
// if numbers are multiples of both 3 and 5 print "fizzBuzz"

function fizzBuzz() {
        for (var i = 1; i <= 100; i++){
                if (i % 3 == 0 && i % 5 == 0) {
                        console.log("fizzBuzz");
                }
                else if (i % 3 == 0) {
                        console.log("fizz");
                } else if(i % 5  == 0) {
                        console.log("Buzz");
                }
                else {
                        console.log(i);
                }
                
        }
}
fizzBuzz();
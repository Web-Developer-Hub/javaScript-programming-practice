/*
 write a progra which divisible 3, 5, 3 && 5
    length 1 to 50
    divisible 3 to print = foo
    divisible 5 to print = bar
    divisible 3 && 5 print  = foobar
 */

for (let i = 1; i <= 50; i++){
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("foobar")
    }
    else if (i % 3 == 0) {
        console.log("foo")
    }
    else if (i % 5 == 0) {
        console.log("bar");
    }
    else {
        console.log(i)
    }   
}
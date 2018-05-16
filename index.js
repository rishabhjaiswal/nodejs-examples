var rect = require('./rectangle');

function solveReactangle  (l, b) {
    console.log("Solveing for react with length : ", l);
    console.log("Solveing for react with breadth : ", b);
    if ( l <= 0 || b <= 0 ){
        console.log("invalid l or b")
    } 
    else {
        console.log("area of reactangle is : ", rect.area(l,b));
        console.log("perimeter of reactangle is : ", rect.perimeter(l,b));
    }
}

solveReactangle(2,3);
solveReactangle(2,4);
solveReactangle(0,5);
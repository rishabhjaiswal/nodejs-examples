var rect = require('./rectangle');

function solveReactangle  (l, b) {
    console.log("Solveing for react with length : ", l);
    console.log("Solveing for react with breadth : ", b);
    rect (l, b, (err, rectangle) => {
        if (err) {
            console.log("Error: ",err.message);
        } 
        else {
            console.log("area of reactangle : ", rectangle.area());
            console.log("perimeter of reactangle : ", rectangle.perimeter());
        }
    });
    console.log("thiss statement ius after rect call")
}

solveReactangle(2,3);
solveReactangle(2,4);
solveReactangle(0,5);
solveReactangle(5,3);
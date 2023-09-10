//let avgTemp = [];

//avgTemp[0] = 31.9;
//avgTemp[1] = 35.3;
//avgTemp[2] = 42;
//avgTemp[3] = 38;
//avgTemp[4] = 25.5;

//console.log(avgTemp[3]);

let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for(i = 0; i < daysOfTheWeek.length; i++){
    //console.log(daysOfTheWeek[i]);
};

let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for(i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

//console.log(fibonacci);

for(i = 0; i < fibonacci.length; i++){
    console.log(fibonacci[i]);
};
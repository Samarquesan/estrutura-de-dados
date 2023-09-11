//let avgTemp = [];

//avgTemp[0] = 31.9;
//avgTemp[1] = 35.3;
//avgTemp[2] = 42;
//avgTemp[3] = 38;
//avgTemp[4] = 25.5;

//console.log(avgTemp[3]);

//let daysOfTheWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//for(i = 0; i < daysOfTheWeek.length; i++){
    //console.log(daysOfTheWeek[i]);
//};
//let fibonacci = [];
//fibonacci[0] = 0;
//fibonacci[1] = 1;
//fibonacci[2] = 1;

//for(i = 3; i < 20; i++){
    //fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
//}

//console.log(fibonacci);

//for(i = 0; i < fibonacci.length; i++){
    //console.log(fibonacci[i]);
//};

//let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//numbers[numbers.length] = 10;
//numbers[numbers.length] = 11;

//Adiciona no final da sequência
//numbers.push(12);
//numbers.push(13);
//numbers.push(14);
//numbers.push(15);
//numbers.push(16);

//Adiciona no início da sequência
//numbers.unshift(-1);
//numbers.unshift(-2);
//numbers.unshift(-3);
//numbers.unshift(-4);

//Para remover o ultimo elemento do array
//numbers.pop();
//numbers.pop();
//numbers.pop();
//numbers.pop();//
//numbers.pop();
//numbers.pop();

//Para remover o primeiro elemento do array
//numbers.shift();
//numbers.shift();
//numbers.shift();
//numbers.shift();

//Para remover um elemento de uma posição específica
//numbers.splice(3, 3);

//numbers[0] = -4;//Sobreescreve o valor no elemento indicado

//console.log(numbers);

//Neste exeplo adicionamos elementos em posições especificas. Veja que o 0 após a primeira virgulas representa a quantidade de elementos a serem removidos e os consequentes as proximas virgulas representam o valor dos elementos que seram adicionados
//numbers.splice(3, 0, 3, 4, 5, 5.10, 5.20, 5.30);
//console.log(numbers);

//Consultando Matrizes
//let avgTempWeek = [];

//let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
//let avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];

//avgTempWeek[0] = avgTempWeek1;
//avgTempWeek[1] = avgTempWeek2;

//console.log(avgTempWeek[1][2]);

let month = [];

let firstWeeks = [];
let lastWeeks = [];

let avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
let avgTempWeek2 = [41, 29, 33, 21.2, 19.5, 17, 33.8];
let avgTempWeek3 = [13, 47.5, 18, 7, 13.4, 21.5, 15];
let avgTempWeek4 = [51, 19, 23, 26.2, 9.5, 17.4, 31.8];

firstWeeks = [avgTempWeek1, avgTempWeek2];
lastWeeks = [avgTempWeek3, avgTempWeek4];

month = [firstWeeks, lastWeeks];

console.log(month[1][1][4]);

for(var x = 0; x < month.length; x++){
    for(var y = 0; y < month[x].length; y++){
        for(var z = 0; z < month[x][y].length; z++){
            console.log(month[x][y][z]);
        };
    };
};
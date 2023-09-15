//function Stack(){
    //var items = [];

    //this.push = function(element){
       // items.push(element);
    //};

    //this.pop = function(){
        //return items.pop();
    //};

   // this.peek = function(){
       // return items[items.length - 1];
    //};

    //this.isEmpty = function(){
       // return items.length === 0;
    //}

    //this.clear = function(){
      //  items = [];
    //};

    //this.size = function() {
      //  return items.length
    //};

    //this.print = function(){
      //  console.log(items.toString())
    //};
//};

//var pilha = new Stack();

//pilha.push(2);
//pilha.push(4);
//pilha.push(6);
//pilha.push(8);
//pilha.push(10);

//pilha.clear()

//console.log(pilha.isEmpty())

//pilha.print()

//function dec2Bin(decNumber){//23
//    var restStack = [],
//    reset,
//    binaryString = ''
//
//    while(decNumber > 0){//0
//        rest = Math.floor(decNumber % 2)//1
//        restStack.push(rest)//[1,1,1,0,1]
//        decNumber = Math.floor(decNumber / 2)//0
//    }
//
//    while(restStack.length > 0){//0
//        binaryString += restStack.pop().toString()//10111
//    }
//    return binaryString
//}
//
//console.log(dec2Bin(23))

function baseCoverter(decNumber, base){//123, 16
  var restStack = [],
  rest,
  baseString = '',
  digits ='0123456789ABCDEF';

  while(decNumber > 0){//0
    rest = Math.floor(decNumber % base); //7
    restStack.push(rest);//[11, 7, ]
    decNumber = Math.floor(decNumber / base);//0
  };

  while(restStack.length > 0){//
    baseString += digits[restStack.pop()]//7B
  };

  return baseString;//7B
};

console.log(baseCoverter(123, 2));
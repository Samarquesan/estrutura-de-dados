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

function dec2Bin(decNumber){
    var restStack = [],
    reset,
    binaryString = ''

    while(decNumber > 0){
        rest = Math.floor(decNumber % 2)
        restStack.push(rest)
        decNumber = Math.floor(decNumber / 2)
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString()
    }
    return binaryString
}

console.log(dec2Bin())
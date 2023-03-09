let biArray = [
              ["a", "b", "c"], 
              ["d", "e", "f"]
            ];


for(let i = 0; i < biArray.length; i++) {

    var innerArrayLength = biArray[i].length;
  

    for(let j = 0; j < innerArrayLength; j++) {
        console.log(`Matriz: Posição [${i}][${j}] = ` + biArray[i][j]);
    }
}

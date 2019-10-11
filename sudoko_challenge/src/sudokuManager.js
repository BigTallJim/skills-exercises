function doneOrNot(board){
  sedokuManager = new sedokuManager();
  result = sedokuManager.checkColAndRow(board)
  if (result){
    result = sedokuManager.checkRegions(board);
  }
  if (result){
    return 'Finished!'
  }else{
    return 'Try again!'
  }
}

function sedokuManager() {
}

sedokuManager.prototype.checkRow = function(row){
  var rowCheck = {1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false}
  for (var i=0; i<row.length; i++){
    rowCheck[row[i]] = true;
  }
  return this.validate(rowCheck);
}

sedokuManager.prototype.validate = function(array){
  returnValue = true;
  for (var i=1; i<10; i++){
    if (!array[i]){
      returnValue = false;
    }
  }
  return returnValue;
}

sedokuManager.prototype.convertColumn = function(array, column){
  returnArray = [];
  for (var i=0; i<9; i++){
    returnArray.push(array[i][column])
  }
  return returnArray;
}

sedokuManager.prototype.checkColAndRow = function(array){
  returnValue = true;
  for (var i=0; i<9; i++){
    if (returnValue){
      returnValue = this.checkRow(array[i])
    }
  }
  for (var i=0; i<9; i++){
    if (returnValue){
      tempRow = this.convertColumn(array, i)
      returnValue = this.checkRow(tempRow)
    }
  }
  return returnValue;
}

sedokuManager.prototype.convertRegion = function(array, row, column){
  returnArray = [];
  for (var i=0; i<3; i++){
    for (var j=0; j<3; j++){
      returnArray.push(array[row+i][column+j])
    }
  }
  return returnArray;
}

sedokuManager.prototype.checkRegions = function(array){
  returnValue = true;
  for (var i=0; i<9; i+=3){
    for (var j=0; j<9; j+=3){
      tempRow = this.convertRegion(array,i,j)
      if (returnValue){
        returnValue = this.checkRow(tempRow)
      }
    }
  }
  return returnValue;
}
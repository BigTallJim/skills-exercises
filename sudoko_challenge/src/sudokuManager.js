function SudokuManager() {

}

SudokuManager.prototype.checkRow = function(row){
  var rowCheck = {1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false}
  for (var i=0; i<row.length; i++){
    rowCheck[row[i]] = true;
  }
  return this.validate(rowCheck);
}

SudokuManager.prototype.validate = function(array){
  returnValue = true;
  for (var i=1; i<10; i++){
    if (!array[i]){
      returnValue = false;
    }
  }
  return returnValue;
}

SudokuManager.prototype.convertColumn = function(array, column){
  returnArray = [];
  for (var i=0; i<9; i++){
    returnArray.push(array[i][column])
  }
  return returnArray;
}

SudokuManager.prototype.checkColAndRow = function(array){
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
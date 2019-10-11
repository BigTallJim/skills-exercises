function doneOrNot(board){
  
  result = checkColAndRow(board)
  
  if (result){
    result = checkRegions(board);
  }
  if (result){
    return 'Finished!'
  }else{
    return 'Try again!'
  }

  function checkRow(row){
    var rowCheck = {1:false, 2:false, 3:false, 4:false, 5:false, 6:false, 7:false, 8:false, 9:false}
    for (var i=0; i<row.length; i++){
      rowCheck[row[i]] = true;
    }
    return validate(rowCheck);
  }

  function validate(array){
    returnValue = true;
    for (var i=1; i<10; i++){
      if (!array[i]){
        returnValue = false;
      }
    }
    return returnValue;
  }

  function convertColumn(array, column){
    returnArray = [];
    for (var i=0; i<9; i++){
      returnArray.push(array[i][column])
    }
    return returnArray;
  }

  function checkColAndRow(array){
    returnValue = true;
    for (var i=0; i<9; i++){
      if (returnValue){
        returnValue = checkRow(array[i])
      }
    }
    for (var i=0; i<9; i++){
      if (returnValue){
        tempRow = convertColumn(array, i)
        returnValue = checkRow(tempRow)
      }
    }
    return returnValue;
  }

  function convertRegion(array, row, column){
    returnArray = [];
    for (var i=0; i<3; i++){
      for (var j=0; j<3; j++){
        returnArray.push(array[row+i][column+j])
      }
    }
    return returnArray;
  }

  function checkRegions(array){
    returnValue = true;
    for (var i=0; i<9; i+=3){
      for (var j=0; j<9; j+=3){
        tempRow = convertRegion(array,i,j)
        if (returnValue){
          returnValue = checkRow(tempRow)
        }
      }
    }
    return returnValue;
  }
}
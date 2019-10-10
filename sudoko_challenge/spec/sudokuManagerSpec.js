describe('SudokuManager', function(){
  var sudokuManager;

  beforeEach(function() {
    sudokuManager = new SudokuManager();
  });

  it("single row contains 1-9", function(){
    sudokuRow = [5, 3, 4, 6, 7, 8, 9, 1, 2];
    expect(sudokuManager.checkRow(sudokuRow)).toEqual(true);
  });
  it("single row does not contains 1-9", function(){
    sudokuRow = [5, 3, 4, 5, 7, 8, 9, 1, 2];
    expect(sudokuManager.checkRow(sudokuRow)).toEqual(false);
  });
  it("turns first column into a row", function(){
    sudokuMap = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]];
    expect(sudokuManager.convertColumn(sudokuMap,0)).toEqual([5,6,1,8,4,7,9,2,3]);
  });
  it("check all columns and all rows", function(){
    sudokuMap = [[5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]];
    expect(sudokuManager.checkColAndRow(sudokuMap)).toEqual(true);
  });
});
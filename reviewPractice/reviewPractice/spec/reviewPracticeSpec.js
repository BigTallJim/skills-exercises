describe('ReviewPractice', function(){

  beforeEach(function() {
    reviewPractice = new ReviewPractice();
  });

  it("check for one Red mark", function(){
    testMark = "Red";
    expect(reviewPractice.countRedMarks(testMark)).toEqual(1);
  });

  
  // beforeEach(function() {
  //   sudokuManager = new doneOrNot(sudokuMap);
  // });

  // it("single row contains 1-9", function(){
  //   sudokuRow = [5, 3, 4, 6, 7, 8, 9, 1, 2];
  //   expect(sudokuManager.checkRow(sudokuRow)).toEqual(true);
  // });
});
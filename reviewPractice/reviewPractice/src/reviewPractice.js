function ReviewPractice(){
  
}

ReviewPractice.prototype.countRedMarks = function(marks){
  marksArray = marks.split(",");
  if (marksArray.length === 1){
    return 1;
  }else{
    return 2;
  }
}
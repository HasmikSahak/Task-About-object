
const studentScoreObject = {
  'student1': 1,
  'student2': 6,
  'student3': 5,
  'student4': 4,
  'student5': 8,
  'student6': 2,
  'student7': 10,
  'student8': 7,
  'student9': 6,
};

const scoresArray = Object.entries(studentScoreObject);
console.log(scoresArray); 

let newScore =scoresArray.filter(function(score)
{

  return  score[1] >= 4 && score[1]<=7 
 
});
console.log(newScore)  
const arrayConvertToObject= Object.fromEntries(newScore);
console.log( arrayConvertToObject )





















/* Description:
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the array.
For example: ["3:1", "2:2", "0:1", ...]
Write a function that takes such list and counts the points of our team in the championship. Rules for counting points for each match:
if x>y - 3 points
if x<y - 0 point
if x=y - 1 point
Notes:
there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4 */

const points=games=>games.reduce((output,current)=>{
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
  },0)

//є ще такий розвязок
function points(games) {
  let total = 0;
  games.map(game => {
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}
 //а ось більш широкий варіант
 function points(games) {
// totalPoints will store the accumulated points
let totalPoints = 0;
  
  // loop through the games array to get the scores
  for(i=0; i<games.length; i++) {
 
   // assign the scores, since games is an array of strings, we must use Number() to turn the string scores into numbers
    let xScore = Number(games[i].charAt(0)); 
    let yScore = Number(games[i].charAt(2));
    
    // Add points depending on the values of xScore compared to yScore
    if (xScore > yScore) { totalPoints += 3; }
    if (xScore < yScore) { totalPoints += 0; }
    if (xScore === yScore) { totalPoints += 1; }
  } 
  return totalPoints;
}



function points(games) {
    let score = 0
    for (let i=0; i < games.length; i++)
      if (games[i][0] === games[i][2]){
        score +=1
      }else if (games[i][0] > games[i][2]){
        score +=3
      }else score +=0
     return score
   }
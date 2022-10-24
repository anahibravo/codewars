function duckDuckGoose(players, goose) {
    for (let i =0; i < players.length; i++){
      if ( i === (goose -1)% players.length){
        return players[i].name
      }
    }
  }
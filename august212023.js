function howMuchILoveYou(nbPetals) {
    let love = ["I love you","a little","a lot","passionately","madly","not at all"]
    
    return love[(nbPetals - 1) % love.length]
   }
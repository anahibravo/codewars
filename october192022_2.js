function combat(health, damage) {
    let newHealth = health - damage  
     if (Math.sign(newHealth) > 0) {
    return Math.abs(newHealth)
  } else {
    return 0
  }
  }
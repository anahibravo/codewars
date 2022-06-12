/*function move (position, roll) {
    // return the new position
  let newPosition = position.map(n => roll * 2)
  console.log(newPosition)

  ** I sometimes tend to overthink it when it comes to the solutions. This one was simple and I took too long to figure it out.
  }*/

  function move (position, roll) {
    return position + roll * 2
  }
function pillars(numPill, dist, width) {
    if (numPill < 2) return 0
   return (dist * (numPill -1) * 100) + (width * (numPill - 2))
 }
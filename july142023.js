var hotpo = function(n){
    if(n < 2) {
      return 0;
    }
    return hotpo(n % 2 ? 3 * n + 1 : n/2)+1
}
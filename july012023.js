function noBoringZeros(n) {
    if (n == 0) return 0;
    if (n % 10 === 0) return noBoringZeros(n /10);
      return n
    }
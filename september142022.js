function seatsInTheater(nCols, nRows, col, row) {
    let columns = (nCols - col) + 1;
    let rows = (nRows - row);
    return columns * rows;
  }
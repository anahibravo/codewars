function calculateYears(principal, interest, tax, desired) {
    let years = 0
    while (principal < desired){
      let total = principal * interest - (principal * interest * tax)
      principal += total
      years++
    }
  return years
}
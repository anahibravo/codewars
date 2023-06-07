function findMultiples(integer, limit) {
    let results = []
    for (let i = integer; i <= limit; i+=integer ){
      results.push(i)
    }  
    return results
    }
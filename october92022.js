function differenceInAges(ages){
    let youngest = ages.sort((a,b) => a-b)[0]
    let oldest = ages.sort((a,b) => a-b)[ages.length-1]
    
    return[youngest,oldest,(oldest-youngest)]
    }
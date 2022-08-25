unction DNAtoRNA(dna) {
    const re = /T/gi
    const newstr = dna.replace(re, 'U');
    return newstr
    }
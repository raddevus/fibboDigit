let fibboDigit = (fIdx) => {
    let first = 0;
    let second = 1;
    let fibboSeries = `${first}, `;
    if (fIdx <= 1) return first;
    fibboSeries += `${second}, `
    if (fIdx == 2) return second;
    let loopCount = 2;
    let retVal = 0;
    
    while (fIdx > loopCount){
        retVal = first + second; 
        fibboSeries += `${retVal}, `
        loopCount++;
        let tempFirst = first;
        first =  second;
        second = tempFirst + second;
        
    }
    console.log(fibboSeries);
    return retVal;
};

const args = process.argv.slice(2);
args[0];

console.log(fibboDigit(args[0]));
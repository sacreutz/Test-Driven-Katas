// YOUR CODE BELOW
const onlyOdds = (ceiling) => {
    debugger; 
    let sum = 0;
    for (let i = 1; i <= ceiling; i++) {
        if (i % 2 === 1) sum += i; 
    }
return sum;
}
onlyOdds(15);  
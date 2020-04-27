const elements = process.argv.splice(2);
const sum = elements.reduce((previousValue, currentValue) => {
    return previousValue + parseInt(currentValue);
}, 0);

console.log(sum);
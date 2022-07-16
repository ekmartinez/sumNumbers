function sumAll(arr) {
    
    const min = Math.min(arr[0], arr[1]);
    const max = Math.max(arr[0], arr[1]) + 1;
    const range = [...Array(max).keys()].slice(min, max);

    const sumNumbers = range.reduce((val1, val2) => 
        val1 + val2, 0)

    return sumNumbers;
  }
  
console.log(sumAll([5, 10]));
function filterArray(numbers, value) {
   let mas = [];
    for (let i = 0; i < numbers.length; i+=1) {
        //const element = array[index];
        if (numbers[i] > value) {
         res = mas.push(numbers[i]);
    }
    }
    return res;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
    
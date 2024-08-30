// Given arrays

const myarray1 = [1, 2, 3, 4, 5];
const myarray2 = [6, 7, 8, 9, 10];

function arrAdd(array1, array2) {
    const result = [];
    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        const arr1 = myarray1[i] || 0;
        const arr2 = myarray2[i] || 0;
        result.push(arr1 + arr2);
    }
    return result;    

}
console.log(arrAdd(myarray1, myarray2)); 
arrAdd(myarray1, myarray2);


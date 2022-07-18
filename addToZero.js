// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
// Write your solution below:
let sum = 0
let boolean = false;
for (let i = 0;i < array.length; i++){
    for (let j = 0; j < array.length; j++){   
        sum = array[i] + array[j]
        //console.log(sum)
        if (sum === 0){
            boolean = true;
        }
        }
}
console.log(boolean)
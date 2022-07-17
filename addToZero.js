// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]
let sum = 0
// Write your solution below:
for (let i = 0;i < array.length; i++){
    for (let j = 0; j < array.length; j++){   
            sum = (array[i] + array[j])
            if (sum === 0){
                console.log(true)    
            }  else {
                console.log(false)
            }
            
        }
}
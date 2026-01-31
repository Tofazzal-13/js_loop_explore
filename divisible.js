for(let i = 1; i <=30; i++){
    if(i % 5 === 0){
        // console.log(i);
        
    }
}

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        // console.log(i);
        
    }
}

// give me the sum of numbers from 1 to 20 that are divisiable by 3

let sum = 0; 
for(let i = 1; i <= 20; i++){
    if(i % 3 === 0){
       sum += i; 
    }
}

console.log("total of the numbers : ", sum );

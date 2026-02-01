let num = 1;
while(num < 40){
    num++;
    if(num % 2 === 1){
        continue;
    }
    // console.log("Display 1 to 40 even Numbers:", num);
}


/* let i = 55;

while(i < 85){
    i += 2;
    if(i % 5 === 0 && i % 2 === 1){
        continue
    }
    console.log(i);
    
} */


let num1 = 55;

while (num1 <= 85) {
  // skip even numbers
  if (num1 % 2 === 0) {
    num1++;
    continue;
  }

  // skip numbers divisible by 5
  if (num1 % 5 === 0) {
    num1++;
    continue;
  }

  console.log(num1);
  num1++;
}
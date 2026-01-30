/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
*/

let count = 1; 
while(count <= 60){
    console.log(count, "I will invest at least 6 hrs every single day for next 60 days!" );
    count++ ;
}


/***
Find all the odd numbers from 61 to 100.
*/

let num1 = 61; 

while (num1 <= 100){
    if(num1 % 2 !== 0){
        console.log("Odd Number:", num1);
        
    }
    num1++;
}


/***
Find all the even numbers from 78 to 98.
*/

let num2 = 78; 

while (num2 <= 98){
    if(num2 % 2 === 0){
        console.log("Even Number:", num2);
        
    }
    num2++;
}


/*** 
 Display sum of all the odd numbers from 81 to 131. 
*/

let num3 = 81; 
let sum1 = 0; 
while(num3 <= 131 ){
    if(num3 % 2 !== 0){
        sum1 += num3;
        console.log("Sum of odd number", sum1);
    }
    num3++;
}


/****
Display sum of all the even numbers from 206 to 311. 
*/
let num4 = 206; 
let sum2 = 0; 
while(num4 <= 311 ){
    if(num4 % 2 === 0){
        sum2 += num4;
        console.log("Sum of odd number", sum2);
    }
    num4++;
}



/***
Implement a countdown timer that counts down from 21 to 15.
 */

let num5 = 21; 

while(num5 >= 15){
    console.log(num5);
    num5--;
    
}
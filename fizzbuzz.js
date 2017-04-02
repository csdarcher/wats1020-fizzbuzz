// Code for playing FizzBuzz

// Count through numbers 1 to 20 and figure out if they are divisible by 3, 5, or both. 
for (i=1; i<=20; i++){
    // Perform the following check on all the numbers
  
      // Determine if number is divisible by 3 then print fizz
      if (i % 3 === 0) {
        
            // If yes, then see if number is also divisble by 5
            if ( i % 5 ===0) {
              
                // If number is divisible by both 3 and 5 then print FizzBuzz
                console.log('FizzBuzz');

            // If number is only divisble by 3 
             } else {
              console.log('Fizz');
             } 

      // If number is only divisble by 5
      } else if (i % 5 ===0) {
          console.log('Buzz');
          
   // If number is not divisible by 3 or 5   
  } else {
    console.log(i);
  }
}

    
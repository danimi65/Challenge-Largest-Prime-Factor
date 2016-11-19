function isPrime(num){

    //a number is prime when it is only divisible by 1, and itself
    // go down every single number between 2 and num, if any are divisible (mod i is 0) then immediately return false, else return true
    // memoization
    // evaluating the big-O notation of the algorithms


    for(var i = 2; i <= num/2; i++){
      if( num % i === 0){
        return false;
      }
    }
      return true;
    
  }


 var primeNumber = 0;



exports.largestPrimeFactor = function(n){


 var primeNumber = 0;

    for(var i =2, len = n; i < len; i++){
      //must be divisible by n
      // and must be prime
      // then set primeNumber to i
      // i = 5 yes
    if( n% i === 0 && isPrime(i)){
      // i is divisible by n, and, is prime

      primeNumber = i;

      }
    }
    return primeNumber;
    
};

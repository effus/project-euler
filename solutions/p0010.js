'use strict';
(function(){
  const Problem = {
    id: 'p0010',
    maxNumber: 2000000,
    primeNumbers: [],
    sieve: [],
    onSubmit: () => {
        // init sieve
        for(let i=0; i<Problem.maxNumber; i++) {
            if (i === 2) {
                Problem.sieve.push(true);
            } else if (i<2 || i % 2 === 0) {
                Problem.sieve.push(false);
            } else {
                Problem.sieve.push(true);
            }
        }
        //sift
        for (let i=2; i<Problem.sieve.length; i++) {
            for (let j=i+i; j<Problem.sieve.length; j+=i) {
                Problem.sieve[j] = false;
            }
        }
        for (let i=0; i<Problem.maxNumber; i++) {
            if (Problem.sieve[i] === true) {
                Problem.primeNumbers.push(i);
            }
        }
        EulerBlock.setResult(Problem.id, Problem.primeNumbers.reduce((a,b)=>a+b));
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

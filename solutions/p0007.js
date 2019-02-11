'use strict';
(function(){
  const MaxNumber = 100;
  const Problem = {
    id: 'p0007',
    primeNumbers: [],
    onSubmit: () => {
        let i = 1;
        let n = 0;
        Problem.primeNumbers.push(2);
        while (Problem.primeNumbers.length < 10001) {
            i++;
            n++;
            if (i % 2 === 0) {
                continue;
            }
            let isPrime = true;
            for (let j=3; j<i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime === true) {
                Problem.primeNumbers.push(i);
            }
        }
        console.debug(Problem.primeNumbers, 'iterations', n);
        EulerBlock.setResult(Problem.id, Problem.primeNumbers[Problem.primeNumbers.length-1]);
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

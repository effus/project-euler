'use strict';
(function(){
  const Problem = {
    id: 'p0003',
    initForm: () => {
      document.querySelector('#' + Problem.id + ' .submit').addEventListener('click', Problem.onSubmit);
    },
    simple: {
      sieve: [],
      max: 30,
      fill: () => {
        for(let i=0; i<Problem.simple.max; i++) {
          Problem.simple.sieve.push(true);
        }
      }
    },
    onSubmit: () => {
      Problem.simple.fill();
      for(let i=2; i<Problem.simple.max; i++) {
        if (Problem.simple.sieve[i] === false) {
          continue;
        }
        if (Math.pow(i,2) > Problem.simple.max) {
          console.debug('pow', i);
          break;
        }
        for(let j=i+1; j<Problem.simple.max; j++) {
          if (j % i === 0) {
            Problem.simple.sieve[j] == false;
          }
        }
      }
      console.debug(Problem.simple.sieve);
    },
    setResult: (value) => {
      document.querySelector('#' + Problem.id + ' .result').value = value;
      if (typeof EulerBlock !== 'undefined') {
        EulerBlock.success.print(Problem.id);
      }
    }
  }
  Problem.initForm();
}());

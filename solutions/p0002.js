'use strict';
(function(){
  const Problem = {
    id: 'p0002',
    initForm: () => {
      document.querySelector('#' + Problem.id + ' .submit').addEventListener('click', Problem.onSubmit);
    },
    fib: {
      a: 1,
      b: 2,
      next: () => {
        const a = Problem.fib.b;
        Problem.fib.b = Problem.fib.a + Problem.fib.b;
        Problem.fib.a = a;
      },
      evenSum: 0
    },
    onSubmit: () => {
      while(Problem.fib.b < 4000000) {
        if (Problem.fib.b % 2 === 0) {
          Problem.fib.evenSum += Problem.fib.b;
        }
        Problem.fib.next();
      }
      Problem.setResult(Problem.fib.evenSum);
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

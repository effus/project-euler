'use strict';
(function(){
  const Problem = {
    id: 'p0002',
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
      EulerBlock.setResult(Problem.id, Problem.fib.evenSum);
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

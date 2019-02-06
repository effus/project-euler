'use strict';
(function(){
  const Problem = {
    id: 'p0001',
    isMultiple: (number) => {
      return (number % 3) === 0 || (number % 5) === 0;
    },
    onSubmit: () => {
      let sum = 0;
      for(let i=1;i<1000;i++) {
        if (Problem.isMultiple(i)) {
          sum += i;
        }
      }
      EulerBlock.setResult(Problem.id, sum);
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

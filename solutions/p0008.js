'use strict';
(function(){
  const Problem = {
    id: 'p0008',
    primeNumbers: [],
    onSubmit: () => {
        EulerBlock.setResult(Problem.id, '???');
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

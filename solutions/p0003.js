'use strict';
(function(){
  const Problem = {
    id: 'p0003',
    getListOfFactors: (n) => {
      let sq = Math.ceil(Math.sqrt(n));
      let list = [];
      for (let i=3; i<=sq; i++) {
        if (n % i === 0) {
          if (Problem.getListOfFactors(i).length === 0) {
            list.push(i);
          }
        }
      }
      return list;
    },
    onSubmit: () => {
      const factors = Problem.getListOfFactors(600851475143);
      EulerBlock.setResult(Problem.id, factors[factors.length - 1]);
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

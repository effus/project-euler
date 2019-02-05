'use strict';
(function(){
  const Problem = {
    id: 'p0003',
    initForm: () => {
      document.querySelector('#' + Problem.id + ' .submit').addEventListener('click', Problem.onSubmit);
    },
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
      Problem.setResult(factors[factors.length - 1]);
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

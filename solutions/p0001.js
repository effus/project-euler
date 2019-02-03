'use strict';
(function(){
  const Problem = {
    id: 'p0001',
    initForm: () => {
      document.querySelector('#' + Problem.id + ' .submit').addEventListener('click', Problem.onSubmit);
    },
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
      Problem.setResult(sum);
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

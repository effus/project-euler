'use strict';

const Problem0001 = {
  initForm: () => {
    document.querySelector('#p0001 .submit').addEventListener('click', Problem0001.onSubmit);
  },
  isMultiple: (number) => {
    return (number % 3) === 0 || (number % 5) === 0;
  },
  onSubmit: () => {
    let sum = 0;
    for(let i=1;i<1000;i++) {
      if (Problem0001.isMultiple(i)) {
        sum += i;
      }
    }
    Problem0001.setResult(sum);
  },
  setResult: (value) => {
    document.querySelector('#p0001 .result').value = value;
    if (typeof EulerComments !== 'undefined') {
      EulerComments.print('p0001');
    }
  }
}

Problem0001.initForm();

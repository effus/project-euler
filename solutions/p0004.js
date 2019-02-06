'use strict';
(function(){
  const Problem = {
    id: 'p0004',
    initForm: () => {
      document.querySelector('#' + Problem.id + ' .submit').addEventListener('click', Problem.onSubmit);
    },
    isPalindrom: (number) => {
        number = String(number);
        if (number.length % 2 !== 0) {
            return false;
        }
        const half = number.length / 2;
        if (number.substr(0, half) !== number.substr(half).split('').reverse().join('')) {
            return false;
        }
        return true;
    },
    onSubmit: () => {
        let max = 0;
        for(let i=900;i<=999;i++){
            for(let j=900;j<=999;j++){
                let mult = i*j;
                if (Problem.isPalindrom(mult) === true && mult > max) {
                    max = mult;
                }
            }
        }
        Problem.setResult(max);
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

'use strict';
(function(){
  const Problem = {
    id: 'p0009',
    checkTriplet: (a, b, c) => {
        return Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);
    },
    onSubmit: () => {
        for (let a=0; a<=998; a++) {
            for (let b=a+1; b<=999; b++) {
                for (let c=b+1; c<=1000; c++) {
                    if (a + b + c !== 1000) {
                        continue;
                    }
                    if (Problem.checkTriplet(a, b, c) === true) {
                        return EulerBlock.setResult(Problem.id, a * b * c);
                    }
                }
            }
        }
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

'use strict';
(function(){
  const Problem = {
    id: 'p0005',
    isFactorForAllNums: (num) => {
        for(let i=2;i<=20;i++) {
            if (num % i !== 0) {
                return false;
            }
        }
        return true;
    },
    solution1: () => {
        let min = 0;
        let i = 20;
        while(min === 0) {
            if (Problem.isFactorForAllNums(i)===true) {
                min = i;
            }
            i+=20;
        }
        return min;
    },
    solution2: () => {
        // this gonna be a solution with webworkers and founding Least Common Multiple
        // but it will remain for later
    },
    onSubmit: () => {
        let min = Problem.solution1();
        EulerBlock.setResult(Problem.id, min);
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

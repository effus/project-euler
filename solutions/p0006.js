'use strict';
(function(){
  const Problem = {
    id: 'p0006',
    onSubmit: () => {
        let sumOfSquares = 0,
            squareOfSums = 0;
        for (let i=1; i<=100; i++) {
            sumOfSquares += Math.pow(i,2);
            squareOfSums += i;
        }
        squareOfSums = Math.pow(squareOfSums,2);
        EulerBlock.setResult(Problem.id, squareOfSums - sumOfSquares);
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

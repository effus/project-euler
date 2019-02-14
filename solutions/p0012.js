'use strict';
(function(){
  const Problem = {
    id: 'p0012',
    onSubmit: () => {
        let i = 0;
        let n = 0;
        let fc = 0;
        while (fc <= 500) {
            i++;
            n+=i;
            let sqrt = Math.sqrt(n);
            fc = 0;
            for (let j=1; j<=sqrt; j++) {
                if (n % j === 0) {
                    fc+=2;
                }
            }
            if (Math.pow(sqrt,2) === sqrt) {
                fc--;
            }
        }
        EulerBlock.setResult(Problem.id, n);
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

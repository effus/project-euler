'use strict';
(function(){
  const Problem = {
    id: 'p0012',
    /*getFactorCount: (n) => {
        let factorCount = 0;
        for (let i=1; i<=n; i++) {
            if (n % i === 0) {
                factorCount++;
            }
        }
        return factorCount;
    },
    onSubmit: () => {
        let factorCount = 0;
        let n = 0;
        let m = 0;
        while (true) {
            n++;
            let triangle = 0;
            for (let i=1; i<=n; i++) {
                triangle+=i;
            }
            let factorCount = Problem.getFactorCount(triangle);
            if (factorCount > 50) {
                console.debug('gt', factorCount, triangle);
                EulerBlock.setResult(Problem.id, triangle);
                break;
            }
        }

    }*/
    onSubmit: () => {
        let i = 0;
        let n = 0;
        while (true) {
            i++;
            n+=i;
            let sqrt = Math.sqrt(n);
            let fc = 0;
            for (let j=1; j<=sqrt; j++) {
                if (n % j === 0) {
                    fc+=2;
                }
            }
            if (Math.pow(sqrt,2) === sqrt) {
                fc--;
            }
            if (fc > 500) {
                EulerBlock.setResult(Problem.id, n);
                break;
            }
        }
    }
  }
  EulerBlock.bindSubmit(Problem.id, Problem.onSubmit);
}());

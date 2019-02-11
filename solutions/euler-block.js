'use strict';
const EulerBlock = {
    problems: {
        "p0001": "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.\n" +
            "The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.",
        "p0002": "Each new term in the Fibonacci sequence is generated by adding the previous two terms.\n" +
            "By starting with 1 and 2, the first 10 terms will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...\n" +
            "By considering the terms in the Fibonacci sequence whose values do not exceed four million,\n"+
            "find the sum of the even-valued terms.",
        "p0003": "The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ?",
        "p0004": "A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit\n"+
            "numbers is 9009 = 91 × 99. Find the largest palindrome made from the product of two 3-digit numbers.",
        "p0005": "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.\n"+
            "What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?",
        "p0006": "The sum of the squares of the first ten natural numbers is 1^2 + 2^2 + ... + 10^2 = 385.\n"+
            "The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)^2 = 55^2 = 3025.\n"+
            "Hence the difference between the sum of the squares of the first ten natural numbers and\n"+
            "the square of the sum is 3025 − 385 = 2640. Find the difference between the sum of the squares\n"+
            "of the first one hundred natural numbers and the square of the sum.",
        "p0007": "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.\n"+
            "What is the 10 001st prime number?",
        "p0008": "The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.\n"+
            "73167176531330624919225119674426574742355349194934\n"+
            "96983520312774506326239578318016984801869478851843\n"+
            "85861560789112949495459501737958331952853208805511\n"+
            "12540698747158523863050715693290963295227443043557\n"+
            "66896648950445244523161731856403098711121722383113\n"+
            "62229893423380308135336276614282806444486645238749\n"+
            "30358907296290491560440772390713810515859307960866\n"+
            "70172427121883998797908792274921901699720888093776\n"+
            "65727333001053367881220235421809751254540594752243\n"+
            "52584907711670556013604839586446706324415722155397\n"+
            "53697817977846174064955149290862569321978468622482\n"+
            "83972241375657056057490261407972968652414535100474\n"+
            "82166370484403199890008895243450658541227588666881\n"+
            "16427171479924442928230863465674813919123162824586\n"+
            "17866458359124566529476545682848912883142607690042\n"+
            "24219022671055626321111109370544217506941658960408\n"+
            "07198403850962455444362981230987879927244284909188\n"+
            "84580156166097919133875499200524063689912560717606\n"+
            "05886116467109405077541002256983155200055935729725\n"+
            "71636269561882670428252483600823257530420752963450\n"+
            "Find the thirteen adjacent digits in the 1000-digit number that have the greatest product.\n" +
            "What is the value of this product?",
        "p0009": "A Pythagorean triplet is a set of three natural numbers, a < b < c, for which, a^2 + b^2 = c^2\n" +
            "For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2. There exists exactly one Pythagorean triplet\n"+
            "for which a + b + c = 1000. Find the product abc.",
        "p0010": "The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17. Find the sum of all the primes below two million.",
        print: () => {
            for (let i in EulerBlock.problems) {
                if (typeof EulerBlock.problems[i] === 'string') {
                    document.querySelector('body').insertAdjacentHTML('beforeend', '<section id="' + i + '" class="container"><h2>Problem ' + i + '</h2>' +
                        '<pre>' + EulerBlock.problems[i] + '</pre> ' +
                        '<div><input type="button" class="submit" value="Get result" /></div><div>Result: <input class="result" value="" readonly/></div><blockquote class="euler-comment">Euler\'s quote</blockquote></section>');
                    const script = document.createElement('script');
                    script.src = './solutions/' + i + '.js';
                    document.querySelector('body').appendChild(script);
                }
            }
        }
    },
    success: {
        "p0001": "You are the 821258th person to have solved this problem. This problem had a difficulty rating of 5%.",
        "p0002": "You are the 657088th person to have solved this problem. This problem had a difficulty rating of 5%.",
        "p0003": "You are the 469761st person to have solved this problem. You have earned 1 new award: 'Baby Steps: Solve three problems'. This problem had a difficulty rating of 5%",
        "p0004": "You are the 416714th person to have solved this problem. This problem had a difficulty rating of 5%.",
        "p0005": "You are the 423905th person to have solved this problem. This problem had a difficulty rating of 5%.",
        "p0006": "You are the 426497th person to have solved this problem. This problem had a difficulty rating of 5%.",
        "p0007": "You are the 365183rd person to have solved this problem. This problem had a difficulty rating of 5%.",
        "p0008": "You are the 306739th person to have solved this problem. This problem had a difficulty rating of 5%.",
        "p0009": "You are the 310739th person to have solved this problem. This problem had a difficulty rating of 5%.",
        "p0010": "You are the 284531st person to have solved this problem. You have earned 1 new award: Decathlete: Solve ten consecutive problems. This problem had a difficulty rating of 5%.",
        print: (id) => {
            document.querySelector('#' + id + ' .euler-comment').innerHTML = EulerBlock.success[id];
        }
    },
    bindSubmit: (id, callback) => {
        document.querySelector('#' + id + ' .submit').addEventListener('click', callback);
    },
    setResult: (id, value) => {
        document.querySelector('#' + id + ' .result').value = value;
        EulerBlock.success.print(id);
    }
};
EulerBlock.problems.print();

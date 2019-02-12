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
        "p0011": "In the 20×20 grid below, four numbers along a diagonal line have been marked.\n" +
            "08 02 22 97 38 15 00 40  00  75  04  05 07 78 52 12 50 77 91 08\n" +
            "49 49 99 40 17 81 18 57  60  87  17  40 98 43 69 48 04 56 62 00\n" +
            "81 49 31 73 55 79 14 29  93  71  40  67 53 88 30 03 49 13 36 65\n" +
            "52 70 95 23 04 60 11 42  69  24  68  56 01 32 56 71 37 02 36 91\n" +
            "22 31 16 71 51 67 63 89  41  92  36  54 22 40 40 28 66 33 13 80\n" +
            "24 47 32 60 99 03 45 02  44  75  33  53 78 36 84 20 35 17 12 50\n" +
            "32 98 81 28 64 23 67 10 *26  38  40  67 59 54 70 66 18 38 64 70\n" +
            "67 26 20 68 02 62 12 20  95 *63  94  39 63 08 40 91 66 49 94 21\n" +
            "24 55 58 05 66 73 99 26  97  17 *78  78 96 83 14 88 34 89 63 72\n" +
            "21 36 23 09 75 00 76 44  20  45  35 *14 00 61 33 97 34 31 33 95\n" +
            "78 17 53 28 22 75 31 67  15  94  03  80 04 62 16 14 09 53 56 92\n" +
            "16 39 05 42 96 35 31 47  55  58  88  24 00 17 54 24 36 29 85 57\n" +
            "86 56 00 48 35 71 89 07  05  44  44  37 44 60 21 58 51 54 17 58\n" +
            "19 80 81 68 05 94 47 69  28  73  92  13 86 52 17 77 04 89 55 40\n" +
            "04 52 08 83 97 35 99 16  07  97  57  32 16 26 26 79 33 27 98 66\n" +
            "88 36 68 87 57 62 20 72  03  46  33  67 46 55 12 32 63 93 53 69\n" +
            "04 42 16 73 38 25 39 11  24  94  72  18 08 46 29 32 40 62 76 36\n" +
            "20 69 36 41 72 30 23 88  34  62  99  69 82 67 59 85 74 04 36 16\n" +
            "20 73 35 29 78 31 90 01  74  31  49  71 48 86 81 16 23 57 05 54\n" +
            "01 70 54 71 83 51 54 69  16  92  33  48 61 43 52 01 89 19 67 48\n" +
            "The product of these numbers is  26 × 63 × 78 × 14 = 1788696.\n" +
            "What is the greatest product of four adjacent numbers in the same direction (up, down, \n" +
            "left, right, or diagonally) in the 20×20 grid?",
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
        "p0011": "You are the 205240th person to have solved this problem. This problem had a difficulty rating of 5%.",
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

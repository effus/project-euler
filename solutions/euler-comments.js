const EulerComments = {
  "p0001": "Congratulations, the answer you gave to problem 1 is correct. You are the 821258th person to have solved this problem. This problem had a difficulty rating of 5%.",
  print: (id) => {
      document.querySelector('#'+id+' .euler-comment').innerHTML = EulerComments[id];
  }
};

let input = document.getElementById('input');
let output = document.getElementById('output');

input.focus();
input.addEventListener('change', function () {
  let str = this.value;
  let arr = str.split('');
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  output.innerHTML = sum;
});

const count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function like(index) {
  count[index] = count[index] + 1;

  document.getElementById(`demo${index}`).innerHTML = count[index];
}


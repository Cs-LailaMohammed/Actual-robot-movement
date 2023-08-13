var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height / 2;
var path = [];
ctx.strokeStyle = '#49A592';
ctx.lineWidth = 3;
var move;


function startpath() {
  ctx.beginPath();
  ctx.moveTo(x, y);
}

function moveforward() {
  y -= 30;
  ctx.lineTo(x, y);
  path.push([x, y]);
  ctx.stroke();
  console.log('F');
  move='F'

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "o.php");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  var data = "move=F";
  xhr.send(data);
}

function movebackward() {
  y += 30;
  ctx.lineTo(x, y);
  path.push([x, y]);
  ctx.stroke();

  if (move == 'B') {
    console.log('F');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "o.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "move=F";
    xhr.send(data);

  } else {
    console.log('B');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "o.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "move=B";
    xhr.send(data);

  }

  move = 'B';
}

function moveleft() {
  x -= 30;
  ctx.lineTo(x, y);
  path.push([x, y]);
  ctx.stroke();

  if (move == 'L') {
    console.log('F'); 
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "o.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "move=F";
    xhr.send(data);


  } else {
    console.log('L');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "o.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "move=L";
    xhr.send(data);

  }

  move = 'L';
}

function moveright() {
  x += 30;
  ctx.lineTo(x, y); 
  path.push([x, y]);
  ctx.stroke();

  if (move == 'R') {
    console.log('F');  
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "o.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "move=F";
    xhr.send(data);

  } else {
    console.log('R');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "o.php");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "move=R";
    xhr.send(data);

  }
  move = 'R';
}

function stop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  window.location.reload();
}



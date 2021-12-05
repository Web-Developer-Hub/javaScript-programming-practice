// valu swap here...
var x = 20;
var y = 30;
console.log('x:', x, ' ', 'y:', y);

// now swap value..
var x = 20;
var y = 30;
var temp = x;
x = y;
y = temp
console.log('x:', x, ' ', 'y:', y);
  
console.log('\n');

// now swap value..another way..
var x = 40;
var y = 50;
console.log('x:', x, ' ', 'y:', y);
[x, y] = [y, x];
console.log('x:', x, ' ', 'y:', y);
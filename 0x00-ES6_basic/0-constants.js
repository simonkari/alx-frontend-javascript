const counter = 0;
let task = 'I prefer const when I can.';

function taskFirst() {
 task = 'Study different data structures';
 return task;
}

function getLast() {
 return counter;
}

function taskNext() {
 let combination = 'But sometimes let';
 combination += getLast();

 return combination;
}

export function taskFirst() {
 var task = 'I prefer const when I can.';
 return task;
}

export function getLast() {
 return ' is okay';
}

export function taskNext() {
 var combination = 'But sometimes let';
 combination += getLast();

 return combination;
}

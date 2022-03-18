// Import stylesheets
import './style.css';
import './promse.js';
import './asyncAwait.js';

// function
function greet(name, age, work) {
  console.log(name + ' is ' + age + ' ' + '& a ' + work);
}

greet('Omogbolahan', 26, 'Fullstack developer');

// function and callback
function greetCall(name, callback) {
  console.log('Hi' + ' ' + name);
  callback();
}

// callback function
function callback() {
  console.log('I am callback function');
}

// passing function as an argument
greetCall('OmOgbolahan', callback);

import _ from 'lodash';
import './style.scss';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  element.classList.add('hello');
  element.textContent = _.join(['Hello', 'webpack'], ' ');

  const button = document.createElement('button');
  button.textContent = 'click me and check the console';
  button.addEventListener('click', printMe);

  element.append(button);

  return element;
}

document.body.append(component());

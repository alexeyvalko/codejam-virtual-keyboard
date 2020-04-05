function render() {

  const characters = ['Backquote', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'Minus', 'Equal', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'BracketLeft', 'BracketRight', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'IntlBackslash', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Comma', 'Period', 'Slash', 'ShiftRight',
    'ControlLeft', 'AltLeft', ' ', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight'
  ];

  document.body.insertAdjacentHTML('afterbegin', `<div class="keyboard" id="keyboard"> </div>`);
  document.body.insertAdjacentHTML('afterbegin', `<textarea class="input" id='input'></textarea>`);

  characters.forEach(item => {
    if (item === 'Backspace' || item === 'Tab' || item === 'CapsLock' ||
      item === 'Enter') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key double ${item}">${item}</div>`);
    } else if (item === 'Del') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key Delete">${item}</div>`);
    } else if (typeof item === 'number') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key Digit${item}">${item}</div>`);
    } else if (item === 'ShiftRight' || item === 'ShiftLeft') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key double ${item}">Shift</div>`);
    } else if (item === 'ControlRight' || item === 'ControlLeft') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key ${item}">Ctrl</div>`);
    } else if (item === 'AltRight' || item == 'AltLeft') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key ${item}">Alt</div>`);
    } else if (item === 'Minus' || item == 'Equal' || item == 'Backquote' || item == 'BracketLeft' || item == 'BracketRight') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key ${item}">${item == 'Minus'?'-':item == 'Equal'?'=':item == 'Backquote'?'`':item == 'BracketLeft'?'[':']'}</div>`);
    } else if (item === 'ArrowUp' || item === 'ArrowDown' || item == 'ArrowLeft' || item == 'ArrowRight') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key ${item}">${item == 'ArrowUp'?'↑':item == 'ArrowDown'?'↓':item == 'ArrowLeft'?'←':'→'}</div>`);
    } else if (item === 'Semicolon' || item === 'Quote' || item == 'IntlBackslash' || item == 'Backslash' || item == 'Slash') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key ${item}">${item == 'Semicolon'?';':item == 'Quote'?'\'':item == 'IntlBackslash' || item == 'Backslash'?'\\':'/'}</div>`);
    } else if (item == 'Comma' || item === 'Period') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key ${item}">${item == 'Comma'?',':'.'}</div>`);
    }
    else if (item == ' ') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key space Space"></div>`);
    } else {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key  Key${item.toUpperCase()}">${item}</div>`);
    }
  });
}




function clickEvent(event) {
  let text = event.target.textContent;
  console.log(text);
  console.log(event.target.className);
  if (event.target.className !== 'keyboard') {
    if (text == 'Tab') {
      event.preventDefault();
      input.value += `  `;
    }
    else if (text == '') {
      input.value  +=' ';
    } else if (text == 'Enter') {
      event.preventDefault();
      input.value += '\n';
    } else if (text == 'Backspace') {
      event.preventDefault();
      input.value = input.value.replace(/.$/, "");
    } else if (text == 'Alt') {
      event.preventDefault();
      input.value += `${text}`;
    } else if (text == 'Del') {
      event.preventDefault();
      input.value = input.value.replace(/^./, "");
    } else {
      input.value += `${text}`;
    }


  }
}

function keydown(event) {
  let key = event.key;
  if (key == 'Tab') {
    event.preventDefault();
    input.value += `  `;
  } else if (key == 'Enter') {
    event.preventDefault();
    input.value += '\n';
  } else if (key == 'Backspace') {
    event.preventDefault();
    input.value = input.value.replace(/.$/, "");
  } else if (key == 'Alt') {
    event.preventDefault();
    input.value += `${key}`;
  } else if (key == 'Delete') {
    event.preventDefault();
    input.value = input.value.replace(/^./, "");
  } else {
    input.value += `${key}`;
  }

  console.log(event.code);
if (event.code == 'Backslash') {
document.querySelector(`.IntlBackslash`).classList.add('active');

} else {
  document.querySelector(`.${event.code}`).classList.add('active');
}

}

function keyup(event) {
if (event.code == 'Backslash') {
  document.querySelector(`.IntlBackslash`).classList.remove('active');

} else {
document.querySelector(`.${event.code}`).classList.remove('active');
}




}
render();


document.addEventListener('keydown', keydown);
document.addEventListener('keyup', keyup);
document.querySelector('#keyboard').addEventListener('click', clickEvent);

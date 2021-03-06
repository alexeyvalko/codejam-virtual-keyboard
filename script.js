function render() {
  const en = ['Backquote', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'Minus', 'Equal', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'BracketLeft', 'BracketRight', 'Del',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Semicolon', 'Quote', 'Enter',
    'ShiftLeft', 'IntlBackslash', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Comma', 'Period', 'Slash', 'ShiftRight',
    'ControlLeft', 'AltLeft', 'Win', ' ', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight',
  ];

  const ru = ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
    'ShiftLeft', '\\', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ShiftRight',
    'ControlLeft', 'AltLeft', 'Win', ' ', 'AltRight', 'ControlRight', '←', '↑', '↓', '→',
  ];

  const pressShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'Del'];
  document.body.insertAdjacentHTML('afterbegin', '<div class="megatext"> Windows клавиатура. Переключение языка Ctrl + Alt</div>');
  document.body.insertAdjacentHTML('afterbegin', '<div class="keyboard" id="keyboard"> </div>');
  document.body.insertAdjacentHTML('afterbegin', '<textarea class="input" id="input"></textarea>');

  for (let i = 0; i < en.length; i++) {
    if (en[i] === 'Backspace' || en[i] === 'Tab' || en[i] === 'CapsLock'
      || en[i] === 'Enter') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key double" id="${en[i]}"><span>${en[i]}</span></div>`);
    } else if (en[i] === 'ShiftRight' || en[i] === 'ShiftLeft') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key double" id="${en[i]}"><span>Shift</span></div>`);
    } else if (en[i] === 'AltRight' || en[i] == 'AltLeft') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key" id="${en[i]}"><span>Alt</span></div>`);
    } else if (en[i] === 'ControlRight' || en[i] == 'ControlLeft') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key" id="${en[i]}"><span>Ctr</span></div>`);
    } else if (en[i] === 'Del') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key" id="Delete"><span>${en[i]}</span></div>`);
    } else if (en[i] === 'Win') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key" id="MetaLeft"><span>${en[i]}</span></div>`);
    } else if (en[i] === 'Minus' || en[i] == 'Equal' || en[i] == 'Backquote' || en[i] == 'BracketLeft' || en[i] == 'BracketRight') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key" id="${en[i]}"><span class="lang en digit">${en[i] == 'Minus' ? '-' : en[i] == 'Equal' ? '=' : en[i] == 'Backquote' ? '`' : en[i] == 'BracketLeft' ? '[' : ']'} </span><span class="lang ru digit hidden ">${ru[i]}</span> <span class="shift hidden">${pressShift[i]}</span></div>`);
    } else if (en[i] === 'ArrowUp' || en[i] === 'ArrowDown' || en[i] == 'ArrowLeft' || en[i] == 'ArrowRight') {
      keyboard.insertAdjacentHTML('beforeend', `<div class = "key" id = "${en[i]}" > ${en[i] == 'ArrowUp' ? '↑' : en[i] == 'ArrowDown' ? '↓' : en[i] == 'ArrowLeft' ? '←' : '→'} </div>`);
    } else if (en[i] === 'Semicolon' || en[i] === 'Quote' || en[i] == 'IntlBackslash' || en[i] == 'Backslash' || en[i] == 'Slash') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key " id="${en[i]}"><span class="lang en">${en[i] == 'Semicolon' ? ';' : en[i] == 'Quote' ? '\'' : en[i] == 'IntlBackslash' || en[i] == 'Backslash' ? '\\' : '/'}</span><span class="lang ru hidden">${ru[i]}</span></div>`);
    } else if (en[i] == 'Comma' || en[i] === 'Period') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key" id="${en[i]}"><span class="lang en ">${en[i] == 'Comma' ? ',' : '.'}</span><span class="lang ru hidden">${ru[i]}</span></div>`);
    } else if (en[i] === ' ') {
      keyboard.insertAdjacentHTML('beforeend', '<div class="key space" id="Space"></div>');
    } else if (typeof en[i] === 'string') {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key" id="Key${en[i].toUpperCase()}"><span class="lang en">${en[i]}</span><span class="lang ru hidden">${ru[i]}</span></div>`);
    } else {
      keyboard.insertAdjacentHTML('beforeend', `<div class="key" id="Digit${en[i]}"><span class="lang en digit">${en[i]}</span><span class="lang ru digit hidden">${ru[i]}</span><span class="shift hidden">${pressShift[i]}</span></div>`);
    }
  }
}
render();
let capsLock = false;
let eng = true;
function clickEvent(event) {
  const text = event.target.textContent;

  console.log(text);
  console.log(event.target.className);
  if (event.target.className !== 'keyboard') {
    if (text === 'Tab') {
      event.preventDefault();
      input.value += '  ';
    } else if (text === '') {
      input.value += ' ';
    } else if (text === 'CapsLock') {
      capsLock ? capsLock = false : capsLock = true;
      document.querySelectorAll('.lang').forEach((item) => item.classList.toggle('caps'));
    } else if (text === 'Enter') {
      event.preventDefault();
      input.value += '\n';
    } else if (text === 'Backspace') {
      event.preventDefault();
      input.value = input.value.replace(/.$/, '');
    } else if (text === 'Alt') {
      event.preventDefault();
      input.value += `${text}`;
    } else if (text === 'Del') {
      event.preventDefault();
      input.value = input.value.replace(/^./, '');
    } else if (capsLock === true) {
      input.value += `${text.toUpperCase()}`;
    } else {
      input.value += `${text}`;
    }
  }
}

function keyDown(event) {
  console.log(event.keyCode);
  console.log(event.key);

  const { key } = event;
  if (key === 'Tab') {
    event.preventDefault();
    input.value += '    ';
  } else if (key === '') {
    input.value += ' ';
  } else if (key === 'CapsLock') {
    capsLock ? capsLock = false : capsLock = true;
    document.querySelectorAll('.lang').forEach((item) => item.classList.toggle('caps'));

  } else if (key === 'Enter') {
    event.preventDefault();
    input.value += '\n';
  } else if (key === 'Backspace') {
    event.preventDefault();
    input.value = input.value.replace(/.$/, '');
  } else if (event.altKey || event.shiftKey) {
    event.preventDefault();
  } else if (key === 'Delete') {
    event.preventDefault();
    input.value = input.value.replace(/^./, '');
  } else if (capsLock === true && event.keyCode >= 65 && event.keyCode <= 90) {
    if(eng) {
      const char = document.querySelector(`#${event.code} > span.en`).textContent;
      input.value += `${char.toUpperCase()}`;
    } else {
      const char = document.querySelector(`#${event.code} > span.ru`).textContent;
      input.value += `${char.toUpperCase()}`;
    }
  } else if (!event.ctrlKey && eng) {
    event.preventDefault();
    if (document.querySelector(`#${event.code} > span.en`)) {
      const char = document.querySelector(`#${event.code} > span.en`).textContent;
      input.value += `${char}`;
    } else {
      event.preventDefault();
      input.value += `${key}`;
    }

  } else if (!event.ctrlKey && !eng) {
    event.preventDefault();
    if (document.querySelector(`#${event.code} > span.ru`)) {
      const char = document.querySelector(`#${event.code} > span.ru`).textContent;
      input.value += `${char}`;
    } else {
      event.preventDefault();
      input.value += `${key}`;
    }
  }
  // else if (!event.ctrlKey) {
  //   event.preventDefault();
  //   input.value += `${key}`;
  // }

  if (event.altKey && event.ctrlKey) {
    eng ? eng = false : eng = true;
    document.querySelectorAll('.en').forEach((item) => item.classList.toggle('hidden'));
    document.querySelectorAll('.ru').forEach((item) => item.classList.toggle('hidden'));
  }

  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight' || event.shiftKey) {
    document.querySelectorAll('.en').forEach((item) => item.classList.add('caps'));
    document.querySelectorAll('.ru').forEach((item) => item.classList.add('caps'));
    document.querySelectorAll('.shift').forEach((item) => item.classList.remove('hidden'));

    document.querySelectorAll('.digit').forEach((item) => item.classList.add('hidden'));

  }

  if (event.code == 'Backslash') {
    document.querySelector('#IntlBackslash').classList.add('active');
  } else if (event.code == 'CapsLock') {
    document.querySelector('#CapsLock').classList.toggle('active-caps');
  } else {
    document.querySelector(`#${event.code}`).classList.add('active');
  }
}

function keyUp(event) {
  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight' || event.shiftKey) {
    if(capsLock) {
      document.querySelectorAll('.shift').forEach((item) => item.classList.add('hidden'));

    } else {
      document.querySelectorAll('.en').forEach((item) => item.classList.remove('caps'));
      document.querySelectorAll('.ru').forEach((item) => item.classList.remove('caps'));
      document.querySelectorAll('.shift').forEach((item) => item.classList.add('hidden'));
    }



    if(eng) {
      document.querySelectorAll('.en').forEach((item) => item.classList.remove('hidden'));
    } else {
      document.querySelectorAll('.ru').forEach((item) => item.classList.remove('hidden'));
    }

  }
  if (event.code == 'Backslash') {
    document.querySelector('#IntlBackslash').classList.remove('active');
  } else {
    document.querySelector(`#${event.code}`).classList.remove('active');
  }
}

function mouseup(e) {
  console.log(e.target.parentElement);
  e.target.parentElement.classList.remove('active');

}

function mousedown(e) {
  console.log(e);

  if (e.target.parentElement.id == 'CapsLock') {
    document.querySelector('#CapsLock').classList.toggle('active-caps');
  } else {
    e.target.parentElement.classList.add('active');
  }




}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
document.querySelector('#keyboard').addEventListener('click', clickEvent);
document.querySelector('#keyboard').addEventListener('mousedown', mousedown);
document.querySelector('#keyboard').addEventListener('mouseup', mouseup);

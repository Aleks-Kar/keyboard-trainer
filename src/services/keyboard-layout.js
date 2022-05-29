const keyboardArr = [
  {
    side: 'left',
    chars: ['ёйфяцычувскамепи', 'qazwsxedcrfvtgb'],
    signs: ['!"№;%:', '~!@#$%^']
  },
  {
    side: 'right',
    chars: ['нртгоьшлбщдюзжхэъ', 'yhnujmikolp'],
    signs: ['?*()_+,/', '&*()_+{}|:"<>?']
  },
  { code: 'Backquote', value: ['ё', '~`'] },
  { code: 'Digit1', value: ['!1', '!1'] },
  { code: 'Digit2', value: ['"2', '@2'] },
  { code: 'Digit3', value: ['№3', '#3'] },
  { code: 'Digit4', value: [';4', '$4'] },
  { code: 'Digit5', value: ['%5', '%5'] },
  { code: 'Digit6', value: [':6', '^6'] },
  { code: 'Digit7', value: ['?7', '&7'] },
  { code: 'Digit8', value: ['*8', '*8'] },
  { code: 'Digit9', value: ['(9', '(9'] },
  { code: 'Digit', value: [')0', ')0'] },
  { code: 'Minus', value: ['_-', '_-'] },
  { code: 'Equal', value: ['+=', '+='] },
  { code: 'Backspace', value: ['backspace', 'backspace'] },

  { code: 'Tab', value: ['tab', 'tab'] },
  { code: 'KeyQ', value: ['й', 'q'] },
  { code: 'KeyW', value: ['ц', 'w'] },
  { code: 'KeyE', value: ['у', 'e'] },
  { code: 'KeyR', value: ['к', 'r'] },
  { code: 'KeyT', value: ['е', 't'] },
  { code: 'KeyY', value: ['н', 'y'] },
  { code: 'KeyU', value: ['г', 'u'] },
  { code: 'KeyI', value: ['ш', 'i'] },
  { code: 'KeyO', value: ['щ', 'o'] },
  { code: 'KeyP', value: ['з', 'p'] },
  { code: 'BracketLeft', value: ['х', '{['] },
  { code: 'BracketRight', value: ['ъ', '}]'] },
  { code: 'Backslash', value: ['/\\', '|\\'] },

  { code: 'CapsLock', value: ['caps', 'caps'] },
  { code: 'KeyA', value: ['ф', 'a'] },
  { code: 'KeyS', value: ['ы', 's'] },
  { code: 'KeyD', value: ['в', 'd'] },
  { code: 'KeyF', value: ['а', 'f'] },
  { code: 'KeyG', value: ['п', 'g'] },
  { code: 'KeyH', value: ['р', 'h'] },
  { code: 'KeyJ', value: ['о', 'j'] },
  { code: 'KeyK', value: ['л', 'k'] },
  { code: 'KeyL', value: ['д', 'l'] },
  { code: 'Semicolon', value: ['ж', ':;'] },
  { code: 'Quote', value: ['э', `"'`] },
  { code: 'Enter', value: ['enter', 'enter'] },

  { code: 'ShiftLeft', value: ['shift', 'shift'] },
  { code: 'KeyZ', value: ['я', 'z'] },
  { code: 'KeyX', value: ['ч', 'x'] },
  { code: 'KeyC', value: ['с', 'c'] },
  { code: 'KeyV', value: ['м', 'v'] },
  { code: 'KeyB', value: ['и', 'b'] },
  { code: 'KeyN', value: ['т', 'n'] },
  { code: 'KeyM', value: ['ь', 'm'] },
  { code: 'Comma', value: ['б', '<,'] },
  { code: 'Period', value: ['ю', '>.'] },
  { code: 'Slash', value: [',.', '?/'] },
  { code: 'ShiftRight', value: ['shift', 'shift'] },

  { code: 'ControlLeft', value: ['ctrl', 'ctrl'] },
  { code: 'MetaLeft', value: ['win', 'win'] },
  { code: 'AltLeft', value: ['alt', 'alt'] },
  { code: 'Space', value: [' ', ' '] },
  { code: 'AltRight', value: ['alt', 'alt'] },
  { code: 'MetaRight', value: ['win', 'win'] },
  { code: 'ContextMenu', value: ['menu', 'menu'] },
  { code: 'ControlRight', value: ['ctrl', 'ctrl'] }
]
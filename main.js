let arr = new Map([
        ['C'    ,     'http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav'  ],
        ['C#'   ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav' ],
        ['D'    ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav' ],
        ['D#'   ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav' ],
        ['E'    ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav' ],
        ['F'    ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav' ],
        ['F#'   ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav' ],
        ['G'    ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav' ],
        ['G#'   ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav' ],
        ['A'    ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav' ],
        ['A#'   ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav' ],
        ['B'    ,      'http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav' ]

])

function play(keyName) {
    let audio = new Audio(arr.get(keyName));
    audio.play();
}

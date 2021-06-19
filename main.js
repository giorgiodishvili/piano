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


document.addEventListener("keypress", function onPress(event) {
        console.log(event.key)
        if (event.key === "a") {
                play('C')
        }else if (event.key === "w") {
                play('C#')
        }else if (event.key === "s") {
                play('D')
        }else if (event.key === "e") {
                play('D#')
        }else if (event.key === "d") {
                play('E')
        }else if (event.key === "f") {
                play('F')
        }else if (event.key === "t") {
                play('F#')
        }else if (event.key === "g") {
                play('G')
        }else if (event.key === "y") {
                play('G#')
        }else if (event.key === "h") {
                play('A')
        }else if (event.key === "u") {
                play('A#')
        }else if (event.key === "j") {
                play('B')
        }
});



function playNotes(notesArray){
        for (let i=0; i<notesArray.length; i++) {
                play(notesArray[i])
        }
}

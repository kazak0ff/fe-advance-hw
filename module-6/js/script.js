const keyTrainer = {
    chars: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'],
    charCount: '',
    setCharCount () {
        debugger
        let int;
        while(!keyTrainer.charCount) {
            debugger
            int = prompt("insert count of symbhols","");
            if (keyTrainer.checkPositiveInteger(int)) keyTrainer.charCount = int;
        }
    },
    checkPositiveInteger (int) {
        if (int - Math.floor(int) == 0 && int > 0 && isNaN(int) === true){
          return true;
        } else { 
            return false;
        }
    },
    task: '',
    createTask () {

    },
    startTask () {
        prompt("", "")
    },
    userInput: '',
    compareCountOfErrors() {

    },
    userErrors: ''

};

function run() {
    debugger
    keyTrainer.setCharCount();
}

run();

// const enArray = addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm,./", "a", "z");
// const uaArray = addKeyboardLayout("йцукенгшщзхїфівапролджєячсмитьбю.", "ф", "я");
// const ruArray = addKeyboardLayout("йцукенгшщзхъфывапролджэячсмитьбю.","ф", "я");

// function addKeyboardLayout(alphabet, secondIndex, thirdIndex) {
//     let firstString = alphabet.substr(0,alphabet.indexOf(secondIndex));
//     let secondString = alphabet.substr(alphabet.indexOf(secondIndex), alphabet.indexOf(thirdIndex) - alphabet.indexOf(secondIndex));

// 	let thirdString =  alphabet.substr(alphabet.indexOf(thirdIndex));
//     const firstArray = firstString.split('');
//     const secondArray = secondString.split('');

// 	const thirdArray = thirdString.split('');
//     return [firstArray, secondArray, thirdArray];

// }

// function fillArrays(array, key) {
//         keyboard.layouts[key].topRow = array[0];
//         keyboard.layouts[key].middleRow = array[1];
//         keyboard.layouts[key].bottomRow = array[2];
// }

// fillArrays(enArray, "en");
// fillArrays(uaArray, "ua");
// fillArrays(ruArray, "ru");

// let intLanguages = ["0", "1", "2"];
// let randomRow = ["topRow", "middleRow", "bottomRow"]

// while(!keyboard.currentLang) {

//     let selectLanguage = prompt("en-0, ru-1, ua-2","");

//     if (selectLanguage === null) break
//     else if (selectLanguage in intLanguages) {
//     	keyboard.currentLang = selectLanguage;
//     } else alert("Incorrect symbhol, please try again");
// }

// alert (getRandCharInRow());

// function getRandCharInRow() {
// 	let symbhol;

// 	while(!symbhol) {
// 		randomRow = Object.keys(keyboard.layouts.en)[Math.floor(Math.random() * 3)];
// 		symbhol = keyboard.layouts[keyboard.langs[keyboard.currentLang]][randomRow][Math.floor(Math.random() * 11)];
// 	}

// 	return symbhol;
// }

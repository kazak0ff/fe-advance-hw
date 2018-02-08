const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};

const notes = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si']

function addKeyboardLayout(alphabet, secondIndex, thirdIndex) {
  let firstString = alphabet.substr(0,alphabet.indexOf(secondIndex));
  let secondString = alphabet.substr(alphabet.indexOf(secondIndex), alphabet.indexOf(thirdIndex) - alphabet.indexOf(secondIndex));

  let thirdString =  alphabet.substr(alphabet.indexOf(thirdIndex));
  const firstArray = firstString.split('');
  const secondArray = secondString.split('');

  const thirdArray = thirdString.split('');
  const fourth = [" "]
  return [firstArray, secondArray, thirdArray, fourth];
}

const enArray = addKeyboardLayout(lang.en, "a", "z");

const body = document.querySelector('body');

const keyboard = document.createElement('div');
keyboard.className = "keyboard";

let counter = 0;
let add = 1;
for(const array of enArray) {
  const row = document.createElement('div');
  row.className = "keyboard__row";
  for(const symbhol of array) {
    const but = document.createElement('div');
    but.className = "keyboard__btn";
    but.setAttribute('data-note',notes[counter]);

    if(symbhol === " ") {
      but.textContent = "SPACE";
    } else {
      but.textContent = symbhol;
    }
    row.append(but);
    if (add === 6 && add === 0) {
      add *= -1;
    }
    counter += add;
  }
  keyboard.append(row);
}

body.append(keyboard);
// const onClick = (event) => {
//   let key = String.fromCharCode(event.keyCode).toLowerCase();
//   console.log(key);
// 	if(keys.includes(key)) {
//     buttons.forEach(element => {
//       if(element.innerText === key) {
//          if(document.getElementById("slideThree").checked === true) {
//           playSound(element.getAttribute("data-note"));
//          }
//         element.classList.add("keyboard__btn--active");
//         setTimeout(() => {
//           element.classList.remove("keyboard__btn--active");
//         }, 200);
//       }
//     });
  
//   }
// }

// window.addEventListener("keydown", onClick);

// const playSound = note => {
//   const audio = document.querySelector(`audio[data-note=${note}]`);
//   audio.currentTime = 0;
//   audio.play();
// };

// const buttons = Array.from(document.querySelectorAll("button"));
// const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");


const navbarActive = document.querySelector('.navbar-nav');

document.querySelector('#hamburger').onclick = () => {
  navbarActive.classList.toggle('active');
}

const hamburger = document.querySelector('#hamburger');

document.addEventListener('click', function(event){
	if(!hamburger.contains(event.target) && !navbarActive.contains(event.target));
})


const titleElement1 = document.querySelector('.title1');
const titleElement2 = document.querySelector('.title2');
const text1 = 'Tanaman';
const text2 = 'Hidroponik';

let wordIndex1 = 0;
let wordIndex2 = 0;
let isDeleting1 = false;
let isDeleting2 = false;

function typeEffect1() {
  let currentText;
  if (!isDeleting1) {
    currentText = text1.substring(0, wordIndex1 + 1);
    titleElement1.textContent = currentText;
    wordIndex1++;
    if (wordIndex1 === text1.length) {
      isDeleting1 = true;
      setTimeout(typeEffect2, 1000);
    } else {
      setTimeout(typeEffect1, 200);
    }
  } else {
    currentText = text1.substring(0, wordIndex1 - 1);
    titleElement1.textContent = currentText;
    wordIndex1--;
    if (wordIndex1 === 0) {
      isDeleting1 = false;
    }
    setTimeout(typeEffect1, 100);
  }
}

function typeEffect2() {
  let currentText;
  if (!isDeleting2) {
    currentText = text2.substring(0, wordIndex2 + 1);
    titleElement2.textContent = currentText;
    wordIndex2++;
    if (wordIndex2 === text2.length) {
      isDeleting2 = true;
      setTimeout(typeEffect2, 2000);
    } else {
      setTimeout(typeEffect2, 200);
    }
  } else {
    currentText = text2.substring(0, wordIndex2 - 1);
    titleElement2.textContent = currentText;
    wordIndex2--;
    if (wordIndex2 === 0) {
      isDeleting2 = false;
    }
    setTimeout(typeEffect2, 100);
  }
}

typeEffect1();
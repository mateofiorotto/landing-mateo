
let btnTogglerColor = document.getElementById('mode-toggler');

document.addEventListener('DOMContentLoaded', () => {
    const isLightMode = localStorage.getItem('theme') === 'light';
    if (isLightMode) {
        document.body.classList.add('light');
    }
});

btnTogglerColor.addEventListener("click", modeToggler);

function modeToggler() {
    let bodyTag = document.body;
    bodyTag.classList.toggle("light");

    if (bodyTag.classList.contains("light")) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }

    document.body.classList.add('fade');
    window.setTimeout(function () {
        document.body.classList.remove('fade');
    }, 100);
}

//typewriter
let TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    let i = this.loopNum % this.toRotate.length;
    let fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    let that = this;
    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    let elements = document.getElementsByClassName('typewrite');
    for (let i=0; i<elements.length; i++) {
        let toRotate = elements[i].getAttribute('data-type');
        let period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

};

///////
let btnInfo = document.getElementById("a-information");
let liInfo = document.getElementById("li-information");
let infoArt = document.getElementById('information')

btnInfo.addEventListener("click", infoSection);

let btnHobbies = document.getElementById("a-hobbies");
let liHobbies = document.getElementById("li-hobbies");
let hobbiesArt = document.getElementById('hobbies')

btnHobbies.addEventListener("click", hobbiesSection);

let btnSecret = document.getElementById("a-secret");
let liSecret = document.getElementById("li-secret");
let secretArt = document.getElementById('secret')

btnSecret.addEventListener("click", secretSection);



function infoSection() {
    infoArt.classList.add('showed-section');
    liInfo.classList.add('underlined-default')

    hobbiesArt.classList.remove('showed-section');
    liHobbies.classList.remove('underlined-default')

    secretArt.classList.remove('showed-section');
    liSecret.classList.remove('underlined-default')
}

function hobbiesSection() {
    hobbiesArt.classList.add('showed-section');
    liHobbies.classList.add('underlined-default')

    infoArt.classList.remove('showed-section');
    liInfo.classList.remove('underlined-default')

    secretArt.classList.remove('showed-section');
    liSecret.classList.remove('underlined-default')
}

function secretSection() {
    secretArt.classList.add('showed-section');
    liSecret.classList.add('underlined-default')

    infoArt.classList.remove('showed-section');
    liInfo.classList.remove('underlined-default')

    hobbiesArt.classList.remove('showed-section');
    liHobbies.classList.remove('underlined-default')
}


//botonIMG
let clickCucumber = document.getElementById('photo-cucumber')
let lumberSection = document.getElementById('lumber-section')
let siteContent = document.getElementById('site')

clickCucumber.addEventListener("click", lumberGame);

function lumberGame() {
    lumberSection.classList.add('d-block')
    lumberSection.classList.remove('d-none')
    siteContent.classList.remove('d-block')
    siteContent.classList.add('d-none')
}

//botonclose
let closeLumber = document.getElementById('close-lumber-section')

closeLumber.addEventListener("click", lumberClosed);

function lumberClosed() {
    siteContent.classList.add('d-block')
    siteContent.classList.remove('d-none')
    lumberSection.classList.remove('d-block')
    lumberSection.classList.add('d-none')
}


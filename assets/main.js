
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
let clickHere = document.getElementById('click-here')
let lumberSection = document.getElementById('lumber-section')
let siteContent = document.getElementById('site')

clickHere.addEventListener("click", lumberGame);

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

let lang = document.documentElement.lang;
let rowSkills = document.getElementById('row-skills');
let rowHobbies = document.getElementById('row-hobbies');

if (lang === "en") {
    let skills = [
        { name: "HTML", img: "imgs/html5.png", description: "Web content structuring" },
        { name: "CSS", img: "imgs/css3.png", description: "Styling web pages" },
        { name: "JavaScript", img: "imgs/javascript.png", description: "Frontend interactivity and logic" },
        { name: "Bootstrap", img: "imgs/bootstrap.png", description: "Framework for responsive design" },
        { name: "Tailwind CSS", img: "imgs/tailwind.png", description: "Utility-first CSS framework" },
        { name: "Sass", img: "imgs/sass.png", description: "CSS preprocessor for advanced styling" },
        { name: "MySQL", img: "imgs/mysql.png", description: "Relational database management system" },
        { name: "PHP", img: "imgs/php.png", description: "Programming language for backend development" },
        { name: "Git", img: "imgs/git.png", description: "Version control and project collaboration" },
        { name: "Vue.js", img: "imgs/vue.png", description: "Framework for building user interfaces" }
    ];

    let hobbies = [
        { title: "Programming", img: "imgs/programming.webp"},
        { title: "Play Videogames", img: "imgs/videogames.webp"},
        { title: "Learn", img: "imgs/learn.webp"}
    ]

    skills.forEach(function(skill, index) {
        rowSkills.innerHTML += `
                <div data-aos="fade-up" class="col-lg-6 col-md-10 pt-3 pb-3 pt-lg-5 pb-lg-5 m-auto">
                        <div class="row mt-5 mb-5 mt-lg-1 mb-lg-1">
                            <!--img-->
                            <div class="border bg-light p-4 col-lg-3 d-flex justify-content-center align-items-center">
                                <img class="img-fluid w-100" src="${skill.img}" alt="${skill.name} Icon">
                            </div>
                            <!--contenido caja-->
                            <div class="border p-4 col-lg-8 col-md-12">
                                <h3>${skill.name}</h3>
                                <p>${skill.description}.
                            </div>
                        </div>
                    </div>
        `
        
    })

    hobbies.forEach(function(hobbie,index){
        rowHobbies.innerHTML += `
            <div class="col-lg-4 p-4 col-md-10 text-center">
                <img src="${hobbie.img}" alt="Hobbie ${hobbie.title}" class="w-75 img-fluid">
                <h3 class="pt-5">${hobbie.title}</h3>
            </div>
        `
    })
    
} else if (lang === "es") {
    let skills = [
        { name: "HTML", img: "imgs/html5.png", description: "Estructuración del contenido web" },
        { name: "CSS", img: "imgs/css3.png", description: "Estilización de las páginas web" },
        { name: "JavaScript", img: "imgs/javascript.png", description: "Interactividad y lógica en el frontend" },
        { name: "Bootstrap", img: "imgs/bootstrap.png", description: "Framework para diseño responsivo" },
        { name: "Tailwind CSS", img: "imgs/tailwind.png", description: "Framework de utilidades para estilos" },
        { name: "SASS", img: "imgs/sass.png", description: "Preprocesador de CSS para estilos avanzados" },
        { name: "MySQL", img: "imgs/mysql.png", description: "Sistema de gestión de bases de datos relacionales" },
        { name: "PHP", img: "imgs/php.png", description: "Lenguaje de programación para el backend" },
        { name: "Git", img: "imgs/git.png", description: "Control de versiones y colaboración en proyectos" },
        { name: "Vue.js", img: "imgs/vue.png", description: "Framework para construir interfaces de usuario" }
    ]

    
    let hobbies = [
        { title: "Programar", img: "imgs/programming.webp"},
        { title: "Jugar Videojuegos", img: "imgs/videogames.webp"},
        { title: "Aprender", img: "imgs/learn.webp"}
    ]

    skills.forEach(function(skill, index) {
        rowSkills.innerHTML += `
                <div data-aos="fade-up" class="col-lg-6 col-md-10 pt-3 pb-3 pt-lg-5 pb-lg-5 m-auto">
                        <div class="row mt-5 mb-5 mt-lg-1 mb-lg-1">
                            <!--img-->
                            <div class="border bg-light p-4 col-lg-3 d-flex justify-content-center align-items-center">
                                <img class="img-fluid w-100" src="${skill.img}" alt="${skill.name} Icon">
                            </div>
                            <!--contenido caja-->
                            <div class="border p-4 col-lg-8 col-md-12">
                                <h3>${skill.name}</h3>
                                <p>${skill.description}.
                            </div>
                        </div>
                    </div>
        `
    })

    hobbies.forEach(function(hobbie,index){
        rowHobbies.innerHTML += `
            <div class="col-lg-4 p-4 col-md-10 text-center">
                <img src="${hobbie.img}" alt="Hobbie ${hobbie.title}" class="w-75 img-fluid">
                <h3 class="pt-5">${hobbie.title}</h3>
            </div>
        `
    })
    
}



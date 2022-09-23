const name = 'Java';

function displayName() {
    const name = 'Script';
    logMessage(name);
}

function logMessage(name) {
    console.log(`Hello ${name}`);
}

displayName();

const linkElement = document.getElementById('link');
linkElement.setAttribute('target', '_blank');

document.querySelector('h1').style.color = '#5cdc5f';

let click = 0;
document.addEventListener('click', function (event) {
    click += 1;
    if (click === 5) {
        alert('Alert!')
    }
});

document.getElementById("intro").innerHTML = new Date().getFullYear();

const joinUs = document.querySelector("#link");

joinUs.addEventListener("click", function () {
    joinUs.classList.toggle("is-hidden")
});



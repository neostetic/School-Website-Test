window.addEventListener("load", async () => {
    document.getElementById('loader').style.opacity = '0';
    await sleep(1000);
    document.getElementById('loader').style.display = 'none';
})

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let moreClass = document.getElementsByClassName('more-caret-down');
for (let i = 0; i < moreClass.length; i++) {
    moreClass[i].innerHTML += ' <i class="fa-solid fa-caret-down fac-sized"></i>'
}

let buttonHoverClass = document.getElementsByClassName('button-hover');
for (let i = 0; i < buttonHoverClass.length; i++) {
    buttonHoverClass[i].innerHTML += '<span></span>'
}

let linkHovers = document.getElementsByClassName('link-hover');
for (let i = 0; i <  linkHovers.length; i++) {
    linkHovers[i].innerHTML += '<span></span>'
}

let header = document.getElementById('header');
window.onscroll = () => {
    if (scrollY > 20) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
}
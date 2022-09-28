let header = document.getElementById('header');
window.onscroll = () => {
    if (scrollY > 20) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
}


let linkDropSpans = document.getElementsByClassName('link-drop-span');
for (let i = 0; i < linkDropSpans.length; i++) {
    linkDropSpans[i].innerHTML += '<span></span>'
}

let linkDropIcons = document.getElementsByClassName('link-drop-icon');
for (let i = 0; i < linkDropIcons.length; i++) {
    linkDropIcons[i].innerHTML += '<i class="fa-solid fa-chevron-down fac-chevron-down"></i>'
}

let linkSwipers = document.getElementsByClassName('link-swipe');
for (let i = 0; i < linkSwipers.length; i++) {
    linkSwipers[i].innerHTML += '<span></span>'
}
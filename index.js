let incrementSlide = 0;
const projectList = [
    'https://images.unsplash.com/photo-1660121999601-18cbe99954de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1659813254494-fbf374803c7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1659662393068-3c526a8e91c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI3fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1659380139642-690af1567639?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1659584079553-c300cb85f10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ0fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    'https://images.unsplash.com/photo-1659264734760-094c73faf1f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDUxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
]
function myFunction() {
    var x = document.getElementById("navbar-container");
    if (x.className === "topnav") {
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}

function renderSlideItem() {
    for (let i = 0; i < projectList.length; i += 1) {
        document.querySelector('#slide-show').insertAdjacentHTML('beforeend', `
            <div class="slide-item ${i === 0 ? 'active' : ''}">
                <img class="fade" src=${projectList[i]} style="width:100%;height:400px;object-fit:cover" >
            </div>
        `)
    }
    for (let i = 0; i < projectList.length; i += 1) {
        document.querySelector('#dots-group').insertAdjacentHTML('beforeend', `
            <button onclick="renderSlideByDots(${i})" class="dots ${i === 0 && 'active-dots'}"></button>
        `)
    }
}

function slideShow() {
    document.getElementById('right-button-slide').style.display = 'block';
    document.getElementById('left-button-slide').style.display = 'block';
    for (let i = 0; i < projectList.length; i += 1) {
        document.querySelectorAll(".slide-item")[i].classList.remove('active');
        document.querySelectorAll(".dots")[i].classList.remove('active-dots');
    }
    if (incrementSlide >= (projectList.length - 1)) {
        document.getElementById('right-button-slide').style.display = 'none';
    }
    if (incrementSlide <= 0) {
        document.getElementById('left-button-slide').style.display = 'none';
    }
    document.querySelectorAll(".slide-item")[incrementSlide].classList.add('active')
    document.querySelectorAll(".dots")[incrementSlide].classList.add('active-dots');
}

document.getElementById('left-button-slide').addEventListener('click', () => {
    incrementSlide -= 1;
    slideShow();
})
document.getElementById('right-button-slide').addEventListener('click', () => {
    incrementSlide += 1;
    slideShow();
})

const handleShowNavItem = () => {
    let showNavMenuList = document.querySelector(".nav-menu-list")
    let showNavMenuContact = document.querySelector(".nav-contact")
    let burgerButton = document.querySelector("#icon-burger")
    if (showNavMenuList.style.display === 'block') {
        showNavMenuList.classList.remove('fade-in')
        showNavMenuList.classList.add('fade-out')
        showNavMenuList.style.display = 'none';
        showNavMenuContact.style.display = 'none';
        burgerButton.innerHTML = 'menu'

    } else {
        showNavMenuList.classList.remove('fade-out')
        showNavMenuList.classList.add('fade-in')
        showNavMenuList.style.display = 'block';
        showNavMenuContact.style.display = 'flex';
        burgerButton.innerHTML = 'close'

    }
}

const handleRedirectContent = () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    })
}

function renderSlideByDots(number) {
    incrementSlide = number;
    slideShow()
}

renderSlideItem()

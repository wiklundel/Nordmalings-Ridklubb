// Kontakt
// Bekräftelse när meddelande skickats
const form = document.querySelector('form');

if (form) {
    form.addEventListener('submit', myFunction);
    function myFunction() {
        alert("Tack för meddelandet!");
  }
}

// --------------------------------------------------------------------------------------------------------------------------------------------------------------
// Våra hästar
// Shuffla hästbilder
  function shuffleImg() {
    
    const containers = document.getElementsByClassName("hastbilder");
    if(containers) {
        for (let container of containers) {
            const items = Array.from(container.children); // Convert HTMLCollection to an array

            const newItems = [];

            while (items.length > 0 ) {
                let j = Math.floor(Math.random() * items.length);
                let v = items[j];
                items.splice(j, 1);

                newItems.push(v);
            }
            newItems.forEach(item => container.appendChild(item));
        }
    }
}
window.onload = shuffleImg;

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// sidebar
const btn = document.querySelector('.btn');
const sidemenu = document.querySelector('.sidemenu');

if(btn && sidemenu) {
    function updateIcon() {
        if (sidemenu.classList.contains("active")) {
            btn.setAttribute("icon", "ph:caret-double-left-light");
        } else {
            btn.setAttribute("icon", "ph:list-light"); 
        }
    }
    updateIcon();
    
    btn.addEventListener('click', function () {
        sidemenu.classList.toggle('active');
        updateIcon();
    });
} else {
    console.log('btn or sidemenu not found');
}

// -------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// header

// Add box shadow to header on scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});




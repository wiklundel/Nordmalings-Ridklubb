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
    
    const containers = document.getElementsByClassName("hästbilder");
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
const btn = document.querySelector('#btn');
const sidebar = document.querySelector('.sidebar');

if(btn && sidebar) {
    btn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
}

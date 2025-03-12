const form = document.querySelector('form');
form.addEventListener('submit', myFunction);

function myFunction() {
    alert("Tack för meddelandet!");
  }

// Function to shuffle the array (Fisher-Yates Shuffle)
function shuffleImg() {
    
    const containers = document.getElementsByClassName("hästbilder");

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
window.onload = shuffleImg;
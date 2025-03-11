function myFunction() {
    alert("Tack för meddelandet!");
  }

// Function to shuffle the array (Fisher-Yates Shuffle)
function shuffleImg() {
    
    const img = document.getElementsByClassName("hästbilder");

    for (let container of imgContainers) {
        const items = Array.from(container.children); // Convert HTMLCollection to an array

        for (let i = items.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
        items.forEach(item => container.appendChild(item));
    }

    window.onload = shuffleImg;
}

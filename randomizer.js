function myFunction() {
    alert("Tack för meddelandet!");
  }

// Function to shuffle the array (Fisher-Yates Shuffle)
function shuffleImg() {
    const img = document.getElementsByClassName("hästbilder");
    const items = Array.from(img.children);

    for (let i = items.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
    items.forEach(items => img.appendChild(items));
    window.onload = shuffleGrid;
}

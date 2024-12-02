console.log("file is working!");

    function shuffleGrid() {
      const grid = document.getElementById('grid');
      const images = Array.from(grid.children);

      // Shuffle the images array using Fisher-Yates algorithm
      for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
      }

      // Clear the grid and append shuffled images
      grid.innerHTML = '';
      images.forEach(img => grid.appendChild(img));
    }





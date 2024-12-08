document.addEventListener('DOMContentLoaded', () => {
  // Select all images with the class 'grayscale-image'
  const images = document.querySelectorAll('.grayscale-image');

  // Loop through each image and set initial grayscale
  images.forEach((image) => {
      image.style.filter = 'grayscale(100%)'; // Start with grayscale
      image.style.transition = 'filter 1s ease'; // Slow transition to color on hover (1 second)

      image.addEventListener('mouseenter', () => {
          image.style.filter = 'grayscale(0%)'; // Turn to color on hover
      });

      image.addEventListener('mouseleave', () => {
          image.style.filter = 'grayscale(100%)'; // Revert to grayscale when hover ends
      });
  });

  // Set the custom bee emoji cursor for the entire page
  const cursorStyle = "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 height=%2732%27 width=%2732%27 viewBox=%270 0 32 32%27%3E%3Ctext y=%2728%27 font-size=%2728%27%3E🐝%3C/text%3E%3C/svg%3E'), auto";
  document.body.style.cursor = cursorStyle;

  // Ensure all elements inherit the custom cursor
  document.querySelectorAll('*').forEach((element) => {
      element.style.cursor = cursorStyle;
  });
});


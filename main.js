// JavaScript to fetch and display a random image
fetch('https://source.unsplash.com/random')
.then((response) => {
  document.getElementById('product-image').src = response.url;
})
.catch((error) => {
  console.error('Error:', error);
});

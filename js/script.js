/**
 * Change image when mouse enters 
 */
let images = document.querySelectorAll('img');

images.forEach(elt => {
  elt.addEventListener('mouseover', function () {
    elt.src = 'images/' + elt.getAttribute('id')+ '_2.jpg';
  });
});

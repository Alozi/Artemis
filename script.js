let width = document.querySelector('video').offsetWidth + 25; // ширина картинки
console.log(width);
let count = 3;

let list = carousel.querySelector('.video-list');
let listElems = carousel.querySelectorAll('.video-list__item');

let position = 0;

carousel.querySelector('.prev').onclick = function() {
  position += width * 1;
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  position -= width * 1;
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};
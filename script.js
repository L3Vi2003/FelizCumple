document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length-1]);
}
/*document.getElementById('next').addEventListener('click', function() {
    let currentSlide = document.querySelector('.item.active');
    let nextSlide = currentSlide.nextElementSibling;
  
    if (!nextSlide) {
      nextSlide = document.querySelector('.item:first-child');
    }
  
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
  });
  
  document.getElementById('prev').addEventListener('click', function() {
    let currentSlide = document.querySelector('.item.active');
    let prevSlide = currentSlide.previousElementSibling;
  
    if (!prevSlide) {
      prevSlide = document.querySelector('.item:last-child');
    }
  
    currentSlide.classList.remove('active');
    prevSlide.classList.add('active');
  });*/
let  burger = document.querySelector(".header-burger")

burger.onclick = function() {
  burger.classList.toggle('active');
  burger.previousElementSibling.classList.toggle("active");
  document.body.classList.toggle("lock");
};

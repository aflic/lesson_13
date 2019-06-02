var button = document.querySelector("#button");
var modal = document.querySelector("#modal");
var close = document.querySelector("#close");

function closeModal(){
  modal.classList.remove("modal_active");
};

function openModal(){
  modal.classList.add('modal_active');
  setTimeout(closeModal, 5000);
};

button.addEventListener("click", function() {
  openModal();
});

close.addEventListener("click", function(){
  closeModal();
});



// setTimeout( function(){
//   modal.classList.remove('modal_active');
// }5000);
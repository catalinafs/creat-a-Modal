const modal = document.getElementById('containerModal')

const openButton = document.getElementById('openFirstModal')
openButton.onclick = open;


function open(){
  modal.style.display = 'block'
  console.log('hola')
}

const closeButton = document.getElementById('closeButton')
closeButton.onclick = close;

function close(){
  modal.style.display = 'none'
  console.log('chao')
}

const containerSecondModal = document.getElementById('containerSecondModal')

const openButton1 = document.getElementById('openSecondModal')
openButton1.onclick = open;

function open(){
  containerSecondModal.style.display = 'block'
  console.log('hola')
}

const closeSecondButton = document.getElementById('closeSecondButton')
closeSecondButton.onclick = close;
function close(){
  containerSecondModal.style.display = 'none'
  console.log('chao')
}
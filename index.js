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
openButton1.onclick = open1;

function open1(){
  containerSecondModal.style.display = 'block'
  console.log('hola1')
}

const closeSecondButton = document.getElementById('closeSecondButton')
closeSecondButton.onclick = close1;
function close1(){
  containerSecondModal.style.display = 'none'
  console.log('chao1')
}

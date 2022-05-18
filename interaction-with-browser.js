// function can be declared earlier:
const ourElement = document.querySelector('button');

  function handleClickFunction(event) {
    alert('named function');
  }
ourElement.addEventListener('click', handleClickFunction);

  function handleMouseClick(event) {
    console.log('you clicked on an element:', event.target);
  }
window.addEventListener('click', handleMouseClick);    

// or it maybe anonymous:
  ourElement.addEventListener('click', function (event) {
    alert('anonymous function')
  })

// anonymous functions are useful for rapid development or when the handler is created in one single place.
  element.addEventListener('click', (event) => {
    alert('anonymous function')
  })

// with the help of events, it is possible to handle keystrokes on the keyboard when the focus is set in the input field.
const ourElement = document.querySelector('input')

ourElement.addEventListener('keydown', function (event) {
  const message = '<code>' + event.key + '</code>';
  const value = event.target.value;

  if (event.key === 'Enter' && value.length > 0) {
    const messageElement = document.createElement('div');
      messageElement.classList.add('message')
      messageElement.innerText = value
    document.querySelector('.result').appendChild(messageElement)
      event.target.value = ''
  }
   document.querySelector('.event').innerHTML = message
})

// remove the event handler
ourElement.removeEventListener('click', handleMouseClick)

// if you want the event to fire only once
someElement.addEventListener('click', function (event) {
  console.log('Click!')
}, { once: true })

// dynamic creation and deletion of paragraphs on the page
/*
<html>
  <head></head>
  <body >
    <h1>Living Collection</h1>
    <h3>При загрузке страницы мы один раз получили все параграфы на странице с помощью getElementsByTagName, их список поддерживается актуальным автоматически</h3>
    <h2>Сейчас в коллекции: <span id="counter"></span></h2>
    <div id="article">
      <p>Это параграф #1</p>
      <p>Это параграф #2</p>
    </div>
    <button id="add">Добавить параграф </button>
    <button id="remove">Удалить параграф</button>
  </body>
</html>



*/

function createParagraphElement(number) {
      let newP = document.createElement('p');
      newP.textContent = 'Это параграф #' + number;
      return newP;
    }

    let paragraphs = document.getElementsByTagName('p'); // получаем один раз при загрузке страницы!
    let articleDiv = document.getElementById('article');
    let counterSpan = document.getElementById('counter');
    let addButton = document.getElementById('add');
    let removeButton = document.getElementById('remove');

    counterSpan.textContent = paragraphs.length;

    addButton.addEventListener('click', function() {
      articleDiv.appendChild(createParagraphElement(paragraphs.length + 1));
      counterSpan.textContent = paragraphs.length;
    });

    removeButton.addEventListener('click', function() {
      articleDiv.removeChild(paragraphs[paragraphs.length-1]);

      counterSpan.textContent = paragraphs.length;
    });







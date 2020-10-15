const dark = document.querySelector('.dark')
const list = document.querySelectorAll('.nav-link')
dark.addEventListener('keyup', function(e){
  if(e.keyCode===13 && dark.value.toLowerCase() === '-d'){
    document.body.style.background = '#151515'
    document.querySelector('body').style.color = '#fff'
    document.querySelectorAll(".collection li a").forEach(function(e){
      e.style.color = '#fff'
  })
  }else if(e.keyCode === 13 && dark.value.toLowerCase() === '-l'){
    document.body.style.background = '#fff'
    document.querySelector('body').style.color = '#333'
    list.forEach(function(e){
      e.style.color = '#333'
    })
  }
})

const terminal = document.querySelector('.terminal')
const getHelp = document.querySelector('.help')

getHelp.addEventListener('keyup', function(e){
  if(e.keyCode === 13 && getHelp.value.toLowerCase() === 'help'){ 
    console.log('help')
    createElements()
    createInputElement()
  }
})

// function to create new element
function createElements(e){
  // create span and input
  const span = document.createElement('span')
  // add class to span
  span.className = 'pound'
  // // add text content
  // span.textContent = '$ '
  // add inner html 
  span.innerHTML = '$ <span class= "showHelp about">about </span> | <span class= "showHelp work" > work </span><br>'
  // append
  terminal.appendChild(span)

  console.log(span)
  // console.log("Function Called")
}

function createInputElement(e){
  // create span and input
  const span = document.createElement('span')
  // add class to span
  span.className = 'pound'
  // add text content
  span.textContent = '$ '
  terminal.appendChild(span)
  // create input
  const input = document.createElement('input')
  // set attribute
  function setAttributes(e,attribute){
    for(let key in attribute){
      e.setAttribute(key,attribute[key])
    }
  }
  setAttributes(input,{"type":"text", "class": "about work back"})
  console.log(input)
  // append
  terminal.appendChild(input)

  const about = document.querySelector('input.about')
  const work = document.querySelector('input.work')
  const back = document.querySelector('input.work')
  about.addEventListener('keyup',function(e){
    if(e.keyCode===13 && about.value.toLowerCase() === 'about')
    window.open('about.html','_blank')
  })

  work.addEventListener('keyup',function(e){
    if(e.keyCode===13 && about.value.toLowerCase() === 'work')
    window.open('work.html','_blank') 
  })
  back.addEventListener('keyup',function(e){
    if(e.keyCode===13 && about.value.toLowerCase() === 'back')
    window.open = 'index.html'
  })
}


 
  

// storing the applied theme in local storage


/*
version 0.1
Future changes to be made:::::

1) Make website dynamic
  * add work section with grid
  * if typed stack the stack will animate and show up
2) add new elements in teminal dynamically
3) make terminal more dynamic
4) store applied theme in LS
5) add some animations
6) create a backend



*/ 
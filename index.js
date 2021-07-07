
let text = document.querySelector('#text')
let ul = document.querySelector('#ul')

text.addEventListener('keypress', function(event){
  if(event.keyCode ===13){
      let name = event.target.value
     createLi(ul,name)
     event.target.value=''
  }
    
})


function createLi(ul,name){
let li =document.createElement('li')
li.className='list-group-item d-flex'
li.innerHTML=name
let span =document.createElement('span')
span.innerHTML='x'
span.className='ml-auto'
span.style.color='red'
li.appendChild(span)
span.style.cursor='pointer'
span.addEventListener('click', function(){
    ul.removeChild(li)
})
ul.appendChild(li)
}
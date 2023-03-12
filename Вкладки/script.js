'use strict'

let ul = document.querySelector('ul')
let tabs1 = document.getElementById('tabs-1')
let tabs2 = document.getElementById('tabs-2')
let tabs3 = document.getElementById('tabs-3')
let allA = document.querySelectorAll('a')



function removeStyles(arr){
tabs1.style.display = 'none'
tabs2.style.display = 'none'
tabs3.style.display = 'none'
  arr.forEach(element => {
      element.style.backgroundColor = null
  });
}

removeStyles(allA)


ul.addEventListener('click', function openObject(event){
  let target = event.target

  if (target.matches('a')){

       removeStyles(allA)
    
    
     if(target.hash == "#tabs-1"){
        tabs1.style.display = null
        target.style.backgroundColor = 'white'
     }
    else if(target.hash == "#tabs-2"){
        tabs2.style.display = null
        target.style.backgroundColor = 'white'
     }

    else if(target.hash == "#tabs-3"){
        tabs3.style.display = null
        target.style.backgroundColor = 'white'
     }
    
  }
})
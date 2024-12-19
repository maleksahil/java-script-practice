const p = document.getElementById('w3r');

const text = document.getElementById('demo2');

function getattribute(){
  let x1 =  p.getAttribute('type')
  let x2 = p.getAttribute('href')
  let x3 = p.getAttribute('rel')
  let x4 = p.getAttribute('hreflang')

  text.append( x1 , x2 , x3 , x4)
}

getattribute()
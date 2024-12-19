const p = document.getElementById('text');

function js_style(){
    p.style.backgroundColor = '#1235'
    p.style.color = 'white'
    p.style.fontSize = '3rem'
    p.style.textAlign = 'center'
    p.style.fontFamily = 'fantasy'
}
const form = document.getElementById('form1')
const text = document.getElementById('demo');
let input= document.querySelectorAll('#input')

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    
   input.forEach((val)=>{
    let x = val.getAttribute('value')
      text.append(' ' + x)
      
   })
})

// function getFormvalue(event){
    
//     text.append('malek');
//     text.append('shail')    
// }
window.onscroll=function(){
    let scroll=document.documentElement.scrollTop
    const header=document.getElementById('nava')
    if(scroll>20){
header.classList.add('navefect')

    }
    else if(scroll<20){
        header.classList.remove('navefect')
    }
}


//efecto escritura


var options = {
    strings: ['FRONT END', 'BACKEND','FULL STACK'],
    typeSpeed: 180,
    loop:true
  };
  kkg
  
  var typed = new Typed('#efect', options);

//efecto light-box
const carrousel=document.querySelector('.carrousel')
const light_principal=document.getElementById('light-principal')

carrousel.addEventListener('click',(e)=>{
    const comentariotext=document.querySelector('.comentario');    
    const light=document.querySelector('.light')
    const link_web=document.querySelector('#link-web')
    const link_github=document.querySelector('#link-github')
    
    link_web.href=e.target.getAttribute('data-web')
    link_github.href=e.target.getAttribute('data-github')
    comentariotext.textContent=e.target.getAttribute('data-text')
const image=e.target.getAttribute("src")
const insertarimagen=document.getElementById('insertarimagen')
insertarimagen.src=image
light_principal.style.display='block'
let conta=0;
function click(e){
    
    const resultadoclick=e.target.className
    conta=conta+1
    if(!resultadoclick.includes('imagen-light') && conta>=2){
        light_principal.style.display='none'
        conta=0
        window.removeEventListener('click',click)
    }
    
    console.log(conta)
}
window.addEventListener('click',click)

})



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
  
  var typed = new Typed('#efect', options);



var span = document.getElementById("icon");
window.onscroll = ()=>{
    if ( window.scrollY >=200 ) {
                span.style.display ='block';
       
                }
             else {
                span.style.display ='none';
            }
}
span.onclick =(e)=>{
e.preventDefault()
window.scrollTo(top ,0)
}



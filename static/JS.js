
/*fill progress*/
var gvalue=1;
function fillProgress(){
    var progressFill = document.getElementById ('loadProgress');
        setInterval (function ()
       { 
                    if(gvalue<100){
                       gvalue++;
                       progressFill.value =gvalue;  
                     }
                     fillProgress();            
         }, 1000);
   }

   /*read more*/
   const readMoreBtn = document.querySelector('.readMoreButton');
   const text = document.querySelector('.text');
   readMoreBtn.addEventListener('click',(e)=> {
     text.classList.toggle('showMore');
     if(readMoreBtn.innerText === 'Read More') {
       readMoreBtn.innerText = 'Read Less';
     }else {
      readMoreBtn.innerText = 'Read More';
     }
   })

//pull the pathname from window location
const activePage = window.location.pathname;
console.log(window);
console.log(window.location);
console.log(activePage);

/*create an arey of the links in nav, 
compare each to pathname and mark the one that is active
*/ 
const navLinks = document.querySelectorAll('nav a').forEach(link => {    
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
  }
});



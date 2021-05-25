/**
 * Change image when mouse enters
 */
 (function(){

    let images = document.querySelectorAll('img');     

    images.forEach( elt =>  {        
       
        elt.addEventListener('mouseenter', function changeImage(){
            let attributeSrc = this.getAttribute('src');
            let rootPath = attributeSrc.substring(0, attributeSrc.length-4);            
            this.setAttribute('src', rootPath + '_2.jpg');  
            this.removeEventListener('mouseenter', changeImage);          
        })

    });       
}());




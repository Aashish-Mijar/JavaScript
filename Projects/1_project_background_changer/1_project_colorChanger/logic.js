 const button=document.querySelectorAll('.button');
 const body=document.querySelector('body');

 button.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id==='red'){
            body.style.backgroundColor='rgb(140, 16, 16)';
        }
        
        if(e.target.id==='blue'){
            body.style.backgroundColor='rgb(9, 9, 105)';
        }
        
        if(e.target.id==='magenta'){
            body.style.backgroundColor='rgb(132, 13, 132)';
        }
        
        if(e.target.id==='olive'){
            body.style.backgroundColor=e.target.id;
        }
        
    })
 });

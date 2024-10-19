const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    console.log(color);
    return color;
}
randomColor();

let intervalId;

const changeBgColor=function(){
    if(!intervalId){
       intervalId=setInterval(changeColor, 1000);
    }
    
    function changeColor(){
        let div1=document.querySelector('.box1');
        let div2=document.querySelector('.box2');
        let div3=document.querySelector('.box3');
        let div4=document.querySelector('.box4');

        let color1=randomColor();
        let color2=randomColor();
        let color3=randomColor();
        let color4=randomColor();

        div1.style.backgroundColor=color1;
        div2.style.backgroundColor=color2;
        div3.style.backgroundColor=color3;
        div4.style.backgroundColor=color4;

        document.querySelector('#hex-box1').innerText=`The hex value for box1 Color is ${color1}`;
        document.querySelector('#hex-box2').innerText=`The hex value for box2 Color is ${color2}`;
        document.querySelector('#hex-box3').innerText=`The hex value for box3 Color is ${color3}`;
        document.querySelector('#hex-box4').innerText=`The hex value for box4 Color is ${color4}`;
    }
}

const stopChangeBgColor=function(){
        clearInterval(intervalId);
        intervalId=null;
}

document.querySelector('#btn-start').addEventListener('click',changeBgColor)

document.querySelector('#btn-stop').addEventListener('click',stopChangeBgColor)
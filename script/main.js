const body = document.querySelector('body');

var a = 0;
var zIndex = 1;
var object;
var classDiv;
let objecatWidth ;




function trans(e){

        object.addEventListener("mouseup", function(){
           a=100;
           
        })
    if(a!=100){
        
        object.style.position="absolute";
        object.style.zIndex=zIndex;
        
        object.style.top = (e.clientY)-10 +"px";
        object.style.left= (e.clientX)-object.offsetWidth/2  +"px";
    }else{return;}
}


function startMoveWindow(event){
    a=0;
    zIndex++;
    object=event.target;
    
    body.addEventListener("mousemove", trans)
}


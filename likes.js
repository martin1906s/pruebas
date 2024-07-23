let votosMinecraft=0;
let votosRoblox=0;

sumarLikeMinecraft=function(){
    votosMinecraft+=1;
    cmpResultado=document.getElementById("lblMinecraft");
    cmpResultado.innerText=votosMinecraft;
}
sumarCorazonMinecraft=function(){
    votosMinecraft+=5;
    cmpResultado=document.getElementById("lblMinecraft");
    cmpResultado.innerText=votosMinecraft;
}
restarLikeMinecraft=function(){
    votosMinecraft-=1;
    cmpResultado=document.getElementById("lblMinecraft");
    cmpResultado.innerText=votosMinecraft;
}
sumarLikeRoblox=function(){
    votosRoblox+=1;
    cmpResultado=document.getElementById("lblRoblox");
    cmpResultado.innerText=votosRoblox;
}
sumarCorazonRoblox=function(){
    votosRoblox+=5;
    cmpResultado=document.getElementById("lblRoblox");
    cmpResultado.innerText=votosRoblox;
}
restarLikeRoblox=function(){
    votosRoblox-=1;
    cmpResultado=document.getElementById("lblRoblox");
    cmpResultado.innerText=votosRoblox;
}
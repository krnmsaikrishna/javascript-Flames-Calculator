window.onresize=function(){
var wid=""+window.screen.width; 
var hei=""+window.screen.height;
wid=parseInt(wid.slice(0,wid.length-1));
hei=parseInt(hei.slice(0,hei.length-1));
var res=(wid-hei)/2;
if(res<=0){res=(res*-1)/2+1;}
if(res>0 && res<=9){res=9;}
document.getElementsByClassName("hangtext")[0].style.fontSize=res+"px";
};
window.onload=function(){
var wid=""+window.screen.width;
var hei=""+window.screen.height;
wid=parseInt(wid.slice(0,wid.length-1));
hei=parseInt(hei.slice(0,hei.length-1));
var res=(wid-hei)/2;
res=parseInt(res);
if(res<=0){res=(res*-1)/2+1;}
if(res>0 && res<=9){res=9;}
document.getElementsByClassName("hangtext")[0].style.fontSize=res+"px";
};

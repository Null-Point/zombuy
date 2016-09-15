/**
 * Created by Administrator on 2016/9/6.
 */
var bannerScnFiveliOne=document.getElementsByClassName("bannerScnFiveliOne")[0];
var bannerScnFiveliTwo=document.getElementsByClassName("bannerScnFiveliTwo")[0];
var bannerScnFiveliThree=document.getElementsByClassName("bannerScnFiveliThree")[0];
var bannerScnFiveliFour=document.getElementsByClassName("bannerScnFiveliFour")[0];
var bannerScnFiveP=document.getElementsByClassName("bannerScnFiveP")[0];
 bannerScnFiveliOne.onmousemove=function(){
     bannerScnFiveliThree.style.display="block";
     this.style.background="#dcdcdc";
     bannerScnFiveliFour.style.display="none";
     bannerScnFiveliTwo.style.background=" #efefef";
 }
bannerScnFiveliTwo.onmousemove=function(){
    bannerScnFiveliFour.style.display="block";
    this.style.background="#dcdcdc";
    bannerScnFiveliThree.style.display="none";
    bannerScnFiveliOne.style.background=" #efefef";
}
bannerScnFiveP.onmouseover=function(){
   this.style.color="red";
}
bannerScnFiveP.onmouseout=function(){
    this.style.color="#333";
}

/**
 * Created by Administrator on 2016/9/8.
 */
var mainNewsScnOneMainspan=document.getElementById("mainNewsScnOneMainspan");
var mainNewsScnOneMainSpan=document.getElementsByClassName("mainNewsScnOneMainSpan")[0];
var mainNewsScnOneMainSpanp=mainNewsScnOneMainSpan.getElementsByTagName("p");
mainNewsScnOneMainspan.onmousemove=function(){
    mainNewsScnOneMainSpan.style.display="block";
}
for(var i=0;i<mainNewsScnOneMainSpanp.length;i++){
    mainNewsScnOneMainSpanp[i].onmouseout=function(){
        mainNewsScnOneMainSpan.style.display="none";
    }
}
for(var i=0;i<mainNewsScnOneMainSpanp.length;i++) {
    mainNewsScnOneMainSpanp[i].onmouseover = function () {
        mainNewsScnOneMainSpan.style.display = "block";
    }
}
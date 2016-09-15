/**
 * Created by HTML5 on 2016/9/15.
 */
var classifyOne_three=document.getElementsByClassName("classifyOne_three")[0];
var aList=classifyOne_three.getElementsByTagName("a");
var shangpinjuti=document.getElementsByClassName("shangpinjuti")[0];
for(var i=0;i<aList.length;i++){
    aList[i].onmouseover=function () {
        for(var j=0;j<aList.length;j++){
            aList[j].style.borderBottom="1px solid #e4393c";
        }
        this.style.border="1px solid #e4393c";
        this.style.borderBottom="1px solid #fff";
        shangpinjuti.style.border="1px solid #e4393c";
        shangpinjuti.style.borderTop="0";
    }
    aList[i].onmouseout=function () {
        for(var j=0;j<aList.length;j++){
            aList[j].style.borderBottom="1px solid #dcdcdc";
        }
        this.style.border="1px solid #dcdcdc";
        shangpinjuti.style.border="1px solid #dcdcdc";
        shangpinjuti.style.borderTop="0";
        // this.style.borderBottom="1px solid #fff";
    }
}

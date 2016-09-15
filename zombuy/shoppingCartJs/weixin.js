/**
 * Created by HTML5 on 2016/9/15.
 */
var wei_xinS=document.getElementById("wei_xinS");
var weixin_code=document.getElementsByClassName("weixin_code")[0];
wei_xinS.onmouseover=function () {
    weixin_code.style.display="block";
}
wei_xinS.onmouseout=function () {
    weixin_code.style.display="none";
}
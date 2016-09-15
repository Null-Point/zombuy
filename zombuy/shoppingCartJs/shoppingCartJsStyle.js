/**
 * Created by HTML5 on 2016/9/14.
 */
function play() {
    var xhr;
    if(window.XMLHttpRequest){
        xhr=new XMLHttpRequest();
    }else{
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
            if(xhr.status==200){
                var Img=document.getElementById("bt");
                var result=xhr.responseText;
                var oData=eval("("+result+")");
                Img.innerHTML=oData[0].name;
            }else{
                alert("获取数据失败");
            }
        }
    }
    xhr.open("get","/周末动漫/datajson/shoppingCart.txt",true);
    xhr.send();
}
play();
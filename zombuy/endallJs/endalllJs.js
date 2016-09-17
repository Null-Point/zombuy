$(function(){
        //首先判断cookie的长度，判断长度后再进行loop判断
      var strCookie=document.cookie;
      var arrCookie=strCookie.split("; ");
      var loopcount=arrCookie.length;
       console.log(loopcount);
      for(var i=1;i<loopcount;i++){
        var answer=cookieUtil.getCookie(i).split("=");
        $("<div class='cook_div'><img class='cookImg' src="+answer[0]+">"+
            "<span class='span_loop'>"+answer[1]+"</span>"
            +"<span class='price_loop'>"+answer[2]+"</span>"
                +"<span>"+answer[3]+"</span>"
            +"</div>").appendTo($("#closureScn_three"));
    }

})

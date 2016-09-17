$(function(){
        //首先判断cookie的长度，判断长度后再进行loop判断
      var strCookie=document.cookie;
      var arrCookie=strCookie.split("; ");
      var loopcount=arrCookie.length;
       // console.log(loopcount);
      for(var i=1;i<=loopcount;i++){
        var answer=cookieUtil.getCookie(i).split("=");
          var t=answer[2].split("￥");
          t= parseInt(t[1]);
        $("<div class='cook_div'><img class='cookImg' src="+answer[0]+">"+
            "<span class='span_loop'>"+answer[1]+"</span>"
            +"<span class='price_loop'>"+answer[2]+"</span>"
                +"<span class='co_loop'><a class='loop_le' href=''>+</a><input class='loop_input' type='text' value='"+answer[3]+"'><a class='loop_ri' href=''>-</a></span>"+
                "<span class='subtotal'>"+"￥"+  t*answer[3]+"</span>"+
                "<span class='del_loop'>删除</span>"
            +"</div>").appendTo($("#closureScn_three"));
               // alert(t);
          // $(".subtotal").html(t*answer[3]);
    }
       //删除操作
       $(".del_loop").click(function () {
           var sum=0;
           //    *******************
           var ervealList =$(".subtotal").text();
           // console.log(ervealList);
           var mon_ereal=ervealList.split("￥");
           for(var i=1;i<mon_ereal.length;i++){
               sum=sum+parseInt(mon_ereal[i]);
           }
           //获取当前所在行的.subtotal
           var npm=$(this).siblings(".subtotal").text();
           var arrnpm=npm.split("￥");
           // alert(typeof  parseInt(arrnpm[1]));
           // alert(typeof  num);
           $(".reveal").html(sum-parseInt(arrnpm[1]));
           //    *****************
           $(this).parent().remove();
       });
       //数据的增加
       $(".loop_le").click(function (event) {
           var sum=0;
            event.preventDefault();
           var swap=$(this).siblings(".loop_input").val();
           swap=parseInt(swap)+1;
           $(this).siblings(".loop_input").val(swap);
           var arr=$(this).parent().siblings(".price_loop").text().split("￥");
           $(this).parent().siblings(".subtotal").html("￥"+parseInt(arr[1])*swap);
           //    *******************
           var ervealList =$(".subtotal").text();
           // console.log(ervealList);
           var mon_ereal=ervealList.split("￥");
           for(var i=1;i<mon_ereal.length;i++){
               sum=sum+parseInt(mon_ereal[i]);
           }
           console.log(sum);
           $(".reveal").html(sum);
           //    *****************
       });
     // 数据的减少
    $(".loop_ri").click(function (event) {
        var sum=0;
        event.preventDefault();
        var swap=$(this).siblings(".loop_input").val();
        swap=parseInt(swap)-1;
        $(this).siblings(".loop_input").val(swap);
        var arr=$(this).parent().siblings(".price_loop").text().split("￥");
        $(this).parent().siblings(".subtotal").html("￥"+parseInt(arr[1])*swap);
    //    *******************
        var ervealList =$(".subtotal").text();
        var mon_ereal=ervealList.split("￥");
        for(var i=1;i<mon_ereal.length;i++){
            sum=sum+parseInt(mon_ereal[i]);
        }
        console.log(sum);
        $(".reveal").html(sum);
    //    *****************
    });
//    数据结算
    var ervealList =$(".subtotal").text();
    var mon_ereal=ervealList.split("￥");
    var sum=0;
    for(var i=1;i<mon_ereal.length;i++){
     sum=sum+parseInt(mon_ereal[i]);
    }
    // console.log(sum);
    $(".reveal").html(sum)
})

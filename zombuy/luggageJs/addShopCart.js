/**
 * Created by HTML5 on 2016/9/16.
 */
// var article=$("#article");
//   设置总共的产品个数
      var count=1;
    $.get("http://localhost:8080/product/GetProductsByPage_get?pagesize=6&pageindex=1",callback);
    function callback(date) {
        var dateObject = JSON.parse(date);
//      console.log(dateObject);
        for(var i=0;i<6;i++){
            var jsonObject = JSON.parse(dateObject[i].Data);
            // console.log(jsonObject.shop_id);
            $("<div class='lug_div'>" +"<img class='luggageImg' src="+jsonObject.src_id+">"+"<span class='lug_span'><a>"+jsonObject.describ_id+
                "</a></span><br/>"+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>评价：0</span>&nbsp;&nbsp;&nbsp;"+"<span>销量：0</span>"+
                "<span class='shoucang_i'><i></i>收藏</span><br/>"+"<span class='ziying_i'><a href='#'><i></i>周末自营</a></span>"+
                "<span class='ke_fu'><a href='#'><i></i></a></span>"+"<span class='price_i'>"+jsonObject.price_id+"</span>"+
                "&nbsp;&nbsp;<span>运费：￥0.00</span>"+"<span class='count'>数量:&nbsp;&nbsp;&nbsp;<a class='lug_aL' href='#'>-</a><input class='lug_input' type='text' value='0'><a class='lug_aR' href='#'>+</a></span>"+
                "<a class='prompt' href='#'>立刻购买</a>"+"<span class='addition' >加入购物车</span>"+"<span class='lugshop_id'>"+jsonObject.shop_id+"</span>"+
                "</div>").appendTo("#article");
        }
        //加入购物车
        $(".addition").click(function () {
            // event.preventDefault();
            // 需要存储的信息
            var img_src=$(this).siblings(".luggageImg").attr("src");
            var describ_id=$(this).siblings(".lug_span").find("a").text();
            var price_id=$(this).siblings(".price_i").text();
            var shop_id=$(this).siblings(".lugshop_id").text();
            var coun_t=$(this).siblings(".count").find("input").val();
            coun_t=parseInt(coun_t)+1;
            $(this).siblings(".count").find("input").val(coun_t);
            // console.log(coun_t);
            // 存储信息到cookie里面
            cookieUtil.setCookie(shop_id,img_src+"="+describ_id+"="+price_id+"="+coun_t+"="+count++,30);
            var answer=cookieUtil.getCookie(shop_id).split("=");
            $(".shop-count").text(answer[4]);
        });
        //+物品的设置
        $(".lug_aR").click(function (event) {
            //*************************
            var img_src=$(this).parent().siblings(".luggageImg").attr("src");
            var describ_id=$(this).parent().siblings(".lug_span").find("a").text();
            var price_id=$(this).parent().siblings(".price_i").text();
            var shop_id=$(this).parent().siblings(".lugshop_id").text();
            //********************************
            event.preventDefault();
           var coun_t=$(this).siblings(".lug_input").val();
            coun_t=parseInt(coun_t)+1;
            $(this).siblings(".lug_input").val(coun_t);
        //    ************************
            cookieUtil.setCookie(shop_id,img_src+"="+describ_id+"="+price_id+"="+coun_t+"="+count++,30);
            var answer=cookieUtil.getCookie(shop_id).split("=");
            $(".shop-count").text(answer[4]);
        //    **********************
        });
    //    —物品的设置
        $(".lug_aL").click(function (event) {
            //*************************
            var img_src=$(this).parent().siblings(".luggageImg").attr("src");
            var describ_id=$(this).parent().siblings(".lug_span").find("a").text();
            var price_id=$(this).parent().siblings(".price_i").text();
            var shop_id=$(this).parent().siblings(".lugshop_id").text();
            //********************************
            event.preventDefault();
            var coun_t=$(this).siblings(".lug_input").val();
            coun_t=parseInt(coun_t)-1;
            $(this).siblings(".lug_input").val(coun_t);
            //    ************************
            cookieUtil.setCookie(shop_id,img_src+"="+describ_id+"="+price_id+"="+coun_t+"="+count++,30);
            var answer=cookieUtil.getCookie(shop_id).split("=");
            $(".shop-count").text(answer[4]);
            //    **********************
        });
    }



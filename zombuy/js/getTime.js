/**
 * Created by Administrator on 2016/9/5.
 */
setInterval(function(){
    //1970/1/1到指定时间的毫秒数
    var futureTime = Date.parse("October 1, 2016");
    //获取对象时、分、秒、的对象
    var buyTimeOne=document.getElementsByClassName("buyTimeOne")[0];
    var buyTimeTwo=document.getElementsByClassName("buyTimeTwo")[0];
    var buyTimeThree=document.getElementsByClassName("buyTimeThree")[0];
    var buyTimeFour=document.getElementsByClassName("buyTimeFour")[0];
//1970到现在时间的毫秒数
    var date=new Date();
    var  nowTime=date.getTime();
//算出2个时间相差的时间。
    var resultTime=futureTime-nowTime;
    //相差的年份。
    var resultYear=parseInt(resultTime/3600000/24/365);
    var resultDay=parseInt(resultTime/3600000/24);
    //算相差的小时
    var nowHourse=date.getHours();
    var nowMinutes=date.getMinutes();
    var nowSeconds=date.getSeconds();
    if(resultDay<10){
        buyTimeOne.innerHTML="0"+(resultDay);
    }else {
        buyTimeOne.innerHTML=resultDay;
    }
    if(24-nowHourse<10){
        buyTimeTwo.innerHTML="0"+(24-nowHourse);
    }else {
        buyTimeTwo.innerHTML=24-nowHourse;
    }
   if(60-nowMinutes<10){
       buyTimeThree.innerHTML="0"+(60-nowMinutes);
   }else {
       buyTimeThree.innerHTML=60-nowMinutes;
   }
    if(60-nowSeconds<10){
        buyTimeFour.innerHTML="0"+(60-nowSeconds);
    }else {
        buyTimeFour.innerHTML=60-nowSeconds;
    }

},1000);


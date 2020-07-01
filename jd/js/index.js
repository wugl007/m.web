 window.onload = function () {
        search();
        seckill();
};

/*search*/
     function search() {
         var search = document.getElementsByClassName('header_bar')[0];
         var banner = document.getElementsByClassName('mjd_banner')[0];
         var height = banner.offsetHeight;
         window.onscroll = function () {
             var top = document.body.scrollTop;
             if(top > height){
                 search.style.background = "rgba(201,21,35,0.85)"
             }else{
                 var value = top/height * 0.85;
                 search.style.background = "rgba(201,21,35,"+ value +")";
             }
         };
     };

 /*秒杀倒计时*/
    function seckill() {
        var parentTime = document.getElementsByClassName('sk_time')[0];
        var timeList = document.getElementsByClassName('num');
        // console.log(timeList.length);

        var times = 6 * 60 * 60;
        var timer;
        timer = setInterval(function () {
            times--;
            var h = Math.floor(times/(60*60));
            var m = Math.floor(times/60%60);
            var s = Math.floor(times%60);

            // console.log(h+'-'+m+"-"+s);
            timeList[0].innerHTML = h>10? Math.floor(h/10):0;
            timeList[1].innerHTML = h%10;
            timeList[2].innerHTML = m>10?Math.floor(m/10):0;
            timeList[3].innerHTML = m%10;

            timeList[4].innerHTML = s>10?Math.floor(s/10):0;
            timeList[5].innerHTML = s%10;

            if(times <= 0){
                clearInterval(timer);
            }
        },1000);
    }
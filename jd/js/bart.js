 window.onload = function () {
     var delete_box = document.getElementsByClassName('delete_box');
     var jd_win = document.getElementsByClassName('jd_win')[0];
     for(var i = 0; i < delete_box.length; i++){
         this.onclick  = function () {
            jd_win.style.display = "block";
     }
     }
     };
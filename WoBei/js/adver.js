$(function(){
         //设置定时函数触发轮播
        var flag=setInterval(swapImg,7000)//设置定时函数
        function swapImg(){//用于定时函数的函数
            index++;
            if(index>=imgs.length){
                index=0;
            }
            $(".adver").css('background-image','url("images/'+imgs[index]+'")');
            $(".adver li").eq(index).addClass("highLight").siblings().removeClass("highLight");
        }
        //保存多张图片
        var imgs=["host1.jpg","host2.jpg"];
        var index=0;

        //鼠标移到数字上触发事件
        $(".adver li").mouseover(function(){
            $(this).css('cursor','pointer');
            index=$(this).index();
            $(".adver").css('background-image','url("images/'+imgs[index]+'")');
            $(".adver li").eq(index).addClass("highLight").siblings().removeClass("highLight");
        })

       

        //左右切换
        $(".adver").mouseover(function(){
            $(".arrowLeft").show();
            $(".arrowRight").show();
            clearInterval(flag);
        }).mouseout(function(){
            $(".arrowLeft").hide();
            $(".arrowRight").hide();
            flag=setInterval(swapImg,2000)
        })
    })
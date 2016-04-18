window.onload=function(){

	
	 var aaa=getClass("remen");
	 var bbb=getClass("znyjright1");

	 
	 for(var i=0;i<aaa.length;i++)
	   {  aaa[i].index=i;
	 	aaa[i].onmouseover=function(){
	 		  
	 		  for(var j=0;j<bbb.length;j++){
           	   bbb[j].style.display="none";
               }

              bbb[this.index].style.display="block";
              for(var n=0;n<aaa.length;n++){
	 		  aaa[n].style.color="#000"
	 		  

	 		  }
	 		  aaa[this.index].style.color="red";

	       }
	    
           
	   }



	   var a=getClass("remen1");
	 var b=getClass("znyjright2");

	 
	 for(var i=0;i<a.length;i++)
	   {  a[i].index=i;
	 	a[i].onmouseover=function(){
	 		  
	 		  for(var j=0;j<b.length;j++){
           	   b[j].style.display="none";
               }

              b[this.index].style.display="block";
              for(var n=0;n<a.length;n++){
	 		  a[n].style.color="#000"
	 		  

	 		  }
	 		  a[this.index].style.color="red";

	       }
	    
           
	   }



	    var aa=getClass("remen2");
	 var bb=getClass("znyjright3");

	 
	 for(var i=0;i<aa.length;i++)
	   {  aa[i].index=i;
	 	aa[i].onmouseover=function(){
	 		  
	 		  for(var j=0;j<bb.length;j++){
           	   bb[j].style.display="none";
               }

              bb[this.index].style.display="block";
              for(var n=0;n<aa.length;n++){
	 		  aa[n].style.color="#000"
	 		  

	 		  }
	 		  aa[this.index].style.color="red";

	       }
	    
           
	   }

    

    var arr=getClass('bannerimg');
	var as=getClass('dian')[0].getElementsByTagName('span')
	// console.log(as)
	arr[0].style.zIndex="1";
	var num=0;
	
    var t=setInterval(move,2000)
    function move(){
    if(num>4){num=0};
	for(var i=0;i<arr.length;i++){
		arr[i].style.zIndex="";
		 as[i].className="hot1"
	}
	var s=num++;
    arr[s].style.zIndex="1"
    as[s].className="hot"

    }


    var wheel=getClass("banner")[0];
    wheel.onmouseover=function(){
         clearInterval(t);
    }
    wheel.onmouseout=function(){
    	t=setInterval(move,2000)
    }


    var links=getClass('dian')[0].getElementsByTagName('span');
	
	var lists=getClass('banner')[0].getElementsByTagName('img');
	
	 for(var i=0;i<links.length;i++)
	   {  links[i].index=i;
	 	links[i].onclick=function(){
	 		  
	 		  for(var j=0;j<lists.length;j++){
           	   lists[j].style.zIndex="";
           	   links[j].className="hot1";

               }

              lists[this.index].style.zIndex=3;
              links[this.index].className="hot"
              
	       }
	    
           
	   }


	   var btn1=getClass('btnleft')[0];
	   var btn2=getClass('btnright')[0];
	   btn2.onclick=function(){
	   	    move();
	   }
	   btn1.onclick=function(){
	   	    var s=num--;
	   	    if(num==-1){num=4};
	        for(var i=0;i<arr.length;i++){
		       arr[i].style.zIndex="";
		       as[i].className="hot1"
	        }
	        
            arr[s].style.zIndex="3"
            as[s].className="hot"

	   }  

//znyjbox的一个小动画
var yc=getClass('yc');
var znyj=$('.znyjbox1');
for(var i=0;i<znyj.length;i++){
	znyj[i].index=i
	znyj[i].onmouseover=function(){
		animate(yc[this.index],{bottom:0},150)
	
 	}
 	znyj[i].onmouseout=function(){
		animate(yc[this.index],{bottom:-69},150)
	
 	}
}

splbt('.wheel-tj','.lun1','.jiantour1','.jiantoul1')
splbt('.wheel-box','.lun','.jiantour','.jiantoul')
      function splbt(a,b,c,d){
      var aa=$(a)[0];//获取最大的盒子用来停止动画
      var img=$(b)
       console.log(img)
        var iW=parseInt(getStyle(img[0],'width'));//将获取的第一张图片的的属性width获取。然后去掉px。赋值给iW；
        //console.log(img);
        var now=0;
        var next=0;
        img[0].style.left='0';
        var flag=true;//设置一个开关的初始属性
        var t=setInterval(wheel,5000);//一个关于时间的函数调用。实现自动水平轮播
        function wheel(){    //wheel函数体
            if(!flag){       //此间段开关为关。返回
                return
            }
            flag=false;      //只要不执行完animate函数，则开关始终为关闭状态。直接返回
            next++;
            if(next==img.length){
              next=0;
            }
            img[next].style.left='100%';
            animate(img[now],{left:-iW},200);
            animate(img[next],{left:0},200,function(){flag=true});
            now=next;
                
            
        }
        aa.onmouseover=function(){
            clearInterval(t);
        }
        aa.onmouseout=function(){
            t=setInterval(wheel,5000);
        }
        
        var btn2=$(c)[0];
        var btn1=$(d)[0];
        btn1.onclick=function(){
           if(!flag){       //此间段开关为关。返回
                return
            }
            flag=false;      //只要不执行完animate函数，则开关始终为关闭状态。直接返回
            next--;
            if(next==-1){
              next=img.length-1;
            }
            img[next].style.left='-100%';
            animate(img[now],{left:iW},200);
            animate(img[next],{left:0},200,function(){flag=true});
            now=next;
            
        }
        btn2.onclick=function(){
            wheel();
        }
    }


	


	   
}
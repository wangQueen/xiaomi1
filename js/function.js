// 通过类名的方法获取元素

  function getClass(classname,obj){
            var obj=obj||document;
             if(document.getElementsByClassName!=undefined){
	           return obj.getElementsByClassName(classname);
            }else{
	            var qita=document.getElementsByTagName("*");
              var arr=[];
	           for(var i=0;i<qita.length;i++){
              //compare(qita[i].className,classname)
		          if(compare(qita[i].className,classname)){
			       arr.push(qita[i]);
		           }
	            }
	         return arr;
             }
  }
  function compare(oldclass,newclass){    //防止多个类名识别不了
      var arr=oldclass.split(" ");
      for(i=0;i<arr.length;i++){
          if(arr[i]==newclass){
            return true;
          }
      }
      return false;
  }
//getStyle 获取属性，解决兼容
 function getStyle(obj,attr){
   if(obj.currentStyle){
    return obj.currentStyle[attr];
   }else{
    return getComputedStyle(obj,null)[attr];
   }
 }      
//
// function text(obj,val){
// 	if(val==undefined){
// 		if(obj.innerText){
//             return obj.innerText;
//         }else{
//     	    return obj.textContent;
//         }
//     }
//     else{
//     	if(obj.innerText){
//             return obj.innerText=val;
//         }else{
//     	    return obj.textContent=val;
//              }
//         }
// 	}
    




function text(obj,val){
  if(val==undefined){
      if(obj.innerText==undefined){
            return obj.textContent;
      }else{
            return obj.innerText;
      }
  }else{
      if(obj.innerText==undefined){
            obj.textContent=val;
      }
      else{
            obj.innerText=val;
      }
  }
}


//简化元素获取操作
function $(selector,contest){
   
   if(typeof selector=="string"){
      contest=contest||document;
      if(selector.charAt(0)=="#"){
        //console.log(selector.substr(1));
       return contest.getElementById(selector.substr(1));
       
        }
      else if(selector.charAt(0)=="."){
      var b=selector.substr(1);
      return getClass(b,contest)
        }
      else if(/^[a-zA-Z][A-Za-z1-6]*$/.test(selector)){
       var c=selector;
       return contest.getElementsByTagName(c);
        }
      else if(/^<[a-zA-Z][A-Za-z1-6]{0,10}>$/.test(selector)){
            return document.createElement(selector.slice(1,-1));
        }
      }
   if(typeof selector=="function"){
       on(window,'load',selector)   
     } 
}



//去除空格 a-所有空格  l-去掉左边空格  r-去掉右边空格  lr-去掉左右两侧空格
function trim(str,type){
  type=type||'lr';
  if(type=='a'){
    return str.replace(/\s*/g,'');
  }
  else if(type=='l'){
    return str.replace(/^\s*/g,'');
  }
  else if(type=='r'){
    return str.replace(/\s*$/g,'');
  }
  else if(type=='lr'){
    return str.replace(/^\s*|\s*$/g,'');
  }
}
//去掉childNodes中的回车、空格等非必须元素；
//a需要文本  b不需要文本
function getChilds(obj,type){
  type=type||'b';
  var childs=obj.childNodes;
  var arr=[];
  if(type=='a'){
  for(var i=0;i<childs.length;i++){
    if(childs[i].nodeType==1){
      arr.push(childs[i]);
    }
    }
    return arr;
  }

  else if(type=='b'){
     for(var i=0;i<childs.length;i++){
     if(childs[i].nodeType==1||(childs[i].nodeType==3&&trim(childs[i].nodeValue)!='')){
      arr.push(childs[i]);
    }
    }return arr;
   }
   
  
}
//getNext、getLast、getFirst、getNum、getUp分别是获取下一个、获取第一个、获取最后一个、获取任意一个、获取上一个元素
function getFirst(obj,type){
  return getChilds(obj,type)[0];
}
function getLast(obj,type){
  var allChild=getChilds(obj,type);
  return getChilds(obj,type)[allChild.length-1]
}
function getNum(obj,index,type){
  return getChilds(obj,type)[index]
}
function getNext(obj){
     var next=obj.nextSibling;
    if(next==null){
      return false;
    }
    while(next.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s*|\s*$/g,"")=="")){
       next=next.nextSibling;
       if(next==null){
         return false; 
       }
    }
    return next;
}
function getUp(obj){
  var up=obj.previousSibling;
  if(up==null){
      return false;
    }
  while(up.nodeType==8||(next.nodeType==3&&next.nodeValue.replace(/^\s*|\s*$/g,"")=="")){
    up=up.previousSibling;
    if(up==null){
      return false;
    }
  }
  return up;
}
//删除一个对象
function remove(obj){
  obj.parentNode.removeChild(obj);
}
//绑定多个事件
function on(obj,event,fn){
    if(obj.attachEvent){
      obj.attachEvent('on'+event,fn)
    }else{
      obj.addEventListener(event,fn,false)
    }
}
//删除绑定事件
function off(obj,event,fn){
    if(obj.detachEvent){
      obj.attachEvent('on'+event,fn)
    }else{
      obj.removeEventListener(event,fn,false)
    }
}
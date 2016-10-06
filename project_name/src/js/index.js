// entry.js
require("../style/style.css") // 载入 style.css

// document.write('It works.');

// var m = require("./module.js");

// console.log(typeof m);

// document.write(m);
// 
//获得css样式的函数
function getStyle(node, property)
{
  if (node.style[property])
  {
    return node.style[property];

  }
  else if (node.currentStyle)
  {
    return node.currentStyle[property];
  }
  else if (document.defaultView && document.defaultView.getComputedStyle)
  {
    var style = document.defaultView.getComputedStyle(node, null);
    
    
    var prop = property.replace(/([A-Z])/g,"-$1");
    //表达式模式中有括起来的子匹配，$1属性值是第1个子匹配所捕获到的内容。如果去掉括号，只是大写字母替换成-$1;
    
    prop = prop.toLowerCase();
    return document.defaultView.getComputedStyle(node,null).getPropertyValue(prop);//getPropertyValue(属性名)中的属性名是css中的属性名（如background-color）
    
    //return style[property];
    //直接写成上面的样子也行；
    
    //兼容backgroundColor && background-color 两种属性写法

  }

  return null;
};

function move(obj, json, fnEnd)
{
  clearInterval(obj.timer);
  obj.timer=setInterval(function (){
    var bStop=true;   //假设：所有值都已经到了
    
    for(var attr in json)
    {
      var cur=0;
      
      if(attr=='opacity')
      {
        cur=Math.round(parseFloat(getStyle(obj, attr))*100);
      }
      else
      {
        cur=parseInt(getStyle(obj, attr).match(/\d+/));
      }
      
      var speed=(parseInt(json[attr].match(/\d+/))-cur)/6;
      speed=speed>0?Math.ceil(speed):Math.floor(speed);
      
      if(cur!=parseInt(json[attr].match(/\d+/)))
        bStop=false;
      
      if(attr=='opacity')
      {
        obj.style.filter='alpha(opacity:'+(cur+speed)+')';
        obj.style.opacity=(cur+speed)/100;
      }
      else
      {
        obj.style[attr] =cur+speed+'px';
      }
    }
    console.log(bStop);
    if(bStop)
    {
      clearInterval(obj.timer);
            
      if(fnEnd)fnEnd();
    }
  }, 30);
}

var aDiv = document.getElementsByTagName('div');

for(var i =0, len = aDiv.length; i<len; i++){
  aDiv[i].timer = null;
  aDiv[i].counter = 0;
  aDiv[i].onclick = function(){
    this.counter++;
    this.counter%2 ?move(this,{left:"500px"}) : move(this,{left:"0"});
    // console.log(this.counter);
    
  };
  
}

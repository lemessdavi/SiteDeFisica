
// Animated Thermometer

function tempLoad () {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb;";
    
    setTimeout(function(){
      temp.innerHTML = "&#xf2ca;";
    }, 1000);
    setTimeout(function(){
      temp.innerHTML = "&#xf2c9;";
    }, 2000);
    setTimeout(function(){
      temp.innerHTML = "&#xf2c8;";
    }, 3000);
    setTimeout(function(){
      temp.innerHTML = "&#xf2c7;";
    }, 4000);
    
  }
  
  tempLoad();
  
  setInterval(tempLoad, 5000);
  
  

  document.getElementById('farInput').addEventListener('input', function(e) {
  
   
    let far = e.target.value;
    

    document.getElementById('farToCel').innerHTML = ((5/9)*((far*1)-32)).toFixed(2);
    

    document.getElementById('farToKel').innerHTML = ((5/9)*((far*1)+459.67)).toFixed(2);
    
  });

  document.getElementById('celInput').addEventListener('input', function(e) {
    
 
    let cel = e.target.value;

    document.getElementById('celToFar').innerHTML = ( (cel*1.8) + 32).toFixed(2);
    

    document.getElementById('celToKel').innerHTML = ( (cel*1) + 273.15).toFixed(2);
    
  });
  

  document.getElementById('kelInput').addEventListener('input', function(e) {
    

    let kel = e.target.value;

    document.getElementById('kelToFar').innerHTML = ( 1.8*((kel*1)-273) + 32).toFixed(2);
 
    document.getElementById('kelToCel').innerHTML = ((kel*1)-273.15).toFixed(2);
    
  });
  var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    liquid = selectAll('.liquid'),
    tubeShine = select('.tubeShine'),
    label = select('.label'),
    follower = select('.follower'),
    dragger = select('.dragger'),
    dragTip = select('.dragTip'),
    minDragY = -380,
    liquidId = 0,
    step = Math.abs(minDragY/100),
    snap = Math.abs(minDragY/10),
    followerVY = 0
  

TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set(dragTip, {
 transformOrigin:'20% 50%'
})

var tl = new TimelineMax()
tl.staggerTo(liquid, 0.7, {
 x:'-=200',
 ease:Linear.easeNone,
 repeat:-1
},0.9)

tl.time(100);

document.addEventListener("touchmove", function(event){
    event.preventDefault();
});
Draggable.create(dragger, {
 type:'y',
 bounds:{minY:minDragY, maxY:0},
 onDrag:onUpdate,
 throwProps:true,
 throwResistance:2300,
 onThrowUpdate:onUpdate,
 overshootTolerance:0,
 snap:function(value){
  //Use this to snap the values to steps of 10
  //return Math.round(value/snap) * snap
 }
})

function onUpdate(){
 liquidId = Math.abs(Math.round(dragger._gsTransform.y/step));

 label.textContent = liquidId + '°';
 TweenMax.to(liquid, 1.3, {
  y:dragger._gsTransform.y*1.12,
  ease:Elastic.easeOut.config(1,0.4)
 })
 
}

TweenMax.to(follower, 1, {
 y:'+=0',
 repeat:-1,
 modifiers:{
  y:function(y, count){
  followerVY += (dragger._gsTransform.y - follower._gsTransform.y) * 0.23;
   followerVY *= 0.69;
   return follower._gsTransform.y + followerVY; 
  }
 }
})

TweenMax.to(dragTip, 1, {
 rotation:'+=0',
 repeat:-1,
 modifiers:{
  rotation:function(rotation, count){
   return rotation-followerVY
  }
 }
})

TweenMax.to(label, 1, {
 y:'+=0',
 repeat:-1,
 modifiers:{
  y:function(y, count){
   return y-followerVY * 0.5
  }
 }
})


TweenMax.to(dragger, 1.4, {
 y:minDragY/2,
 onUpdate:onUpdate,
 ease:Expo.easeInOut
})


